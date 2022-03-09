// Casos de prueba realizado por:
// Autor: Yanina Cardozo
/// <reference types="cypress" />

import { Perfil } from "../../paginas/Profesor/Perfil";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { ClasesProfesor } from "../../paginas/Profesor/ClasesProfesor";
import { testCaseConfig } from "../../helpers/helpers";
import { AlumnosProfesor } from "../../paginas/Profesor/AlumnosProfesor";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- Clases Profesor", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfil = new Perfil();
  const clasesprofesor = new ClasesProfesor();
  const alumnosprofesor = new AlumnosProfesor();

  beforeEach(function () {
    cy.visit("https://developers.learnwonderly.com/");
    cy.fixture("variables/variablesUsuario").then((variables) => {
      this.variables = variables;
      home.click_IniciaSesion();
      cy.get("#input_1").type(this.variables.correoProfesor);
      ingresar.type_contrasena("12345"); //Cambiar la contraseña que le corresponde
      ingresar.click_continuar();
    });
  });

  it.skip("p2_Probar que un profesor pueda ver sus clases asignadas desde el schedule", () => {
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    clasesprofesor.click_nombreDeLaClase(); //Cambiar nombre de la clase
    cy.get("h4").should("be.visible");
    cy.wait(2000);
  });

  it.skip("p3_Verificar que un profesor pueda Iniciar clase desde el Schedule", () => {
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    clasesprofesor.click_nombreDeLaClase(); //Cambiar nombre de la clase
    clasesprofesor.botonIniciarClase();
  });

  it("1_Demostrar que un profesor puede iniciar una clase desde el detalle de la clase", () => {
    perfil.click_tableroClasesProfesor();
    clasesprofesor.clickNombreClaseTablero();
    clasesprofesor.botonIniciarClase();
  });

  it("2_Comprobar que un profesor puede Iniciar su clase 30 minutos antes que inicie su clase desde el tablero Clases profesor", () => {
    perfil.click_tableroClasesProfesor();
    perfil.click_iniciarClase();
  });

  it("3_Demostrar que un profesor puede editar su clase.", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.editarClase();
    clasesprofesor.type_youtubeVideo(
      "https://www.youtube.com/watch?v=8JnfIa84TnU"
    );
    clasesprofesor.click_botonGuardar();
    cy.get(".alert").should("be.visible");
  });

  it("4_Comprobar que un profesor puede agregar material a su clase", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.click_botonAgregarMaterial();
    clasesprofesor.type_tituloFormAgregarMaterial("Lectura, Cuentos");
    clasesprofesor.type_descripcionFormAgregarMaterial(
      "Cuentos cortos para practicar la lectura"
    );
    clasesprofesor.subirArchivoFormAgregarMaterial();
    clasesprofesor.botonAgregarMaterialForm();
    clasesprofesor.click_botonRegresar();
  });

  // Agregar material para Eliminar
  it("5_Verificar que un profesor puede eliminar material de su clase", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.agregarMaterial2daVez(
      "Titulo ",
      "Esto es una descripción ",
      "sample.pdf"
    );
    clasesprofesor.click_botonRegresar();
    cy.wait(2000);
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.eliminarMaterialAgregado();
  });

  //Agregar Material para Editar
  it("6_Probar que un profesor puede editar material a su clase", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.agregarMaterial2daVez(
      "Titulo ",
      "Esto es una descripción ",
      "sample.pdf"
    );
    clasesprofesor.click_botonRegresar();
    cy.wait(2000);
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.editarMaterialAgregado(
      "Prueba para editar el titulo",
      "SegundoCuento.pdf"
    );
  });

  it("7_Demostrar que el material agregado por el profesor respeta los formatos permitidos y el tamaño maximo de archivo", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.click_botonAgregarMaterial();
    clasesprofesor.type_tituloFormAgregarMaterial(" ");
    clasesprofesor.type_descripcionFormAgregarMaterial(" ");
    perfil.subirArchivo();
    clasesprofesor.agregarMaterialForm();
  });

  it("8_Verificar que el profesor pueda ver el detalle de una clase seleccionada", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.clickNombreClaseTablero();
    cy.get(".actions-header > .class-title").should("be.visible");
    cy.get(".detail-materia > b").should("be.visible");
    cy.wait(2000);
  });

  it("9_Comprobar que un profesor no pueda iniciar una clase hasta 30 minutos que inicie una clase.", () => {
    perfil.click_salirDelMenu();
    home.click_IniciaSesion();
    ingresar.type_Correo("profegoodman@gmail.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfil.click_tableroClasesProfesor();
    perfil.iniciarLaClaseAntes("¡Oops! Es muy pronto para inciar la clase.");
    cy.wait(3000);
  });

  it("10_Demostrar que un profesor pueda ver los alumnos registrados desde el icono ver Alumnos registrados.", function () {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.clickIconoVerAlumnosInscritos();
    home.verificarExistenciaElemento(
      ".site-container",
      ".table",
      "verificador2"
    );
    cy.wait(2000);
    cy.fixture("verificadores/verificador2").then((verifica) => {
      cy.log("VERIFICADOR 2", verifica);
      this.verifica = verifica;
      alumnosprofesor.mensajeAlumnosInscritos(this.verifica.verify);
    });
  });

  // it("p14_Probar que un profesor pueda ver el mensaje cuando no se han inscrito alumnos a su clase", function () {
  //   perfil.click_salirDelMenu();
  //   home.click_IniciaSesion();
  //   ingresar.type_Correo("profepedro@gmail.com");
  //   // ingresar.type_Correo("profeana@gmail.com");
  //   ingresar.type_contrasena("12345");
  //   ingresar.click_continuar();
  //   clasesprofesor.tableroClasesProfesor();
  //   clasesprofesor.clickIconoVerAlumnosInscritos();
  //   home.verificarExistenciaElemento(
  //     ".site-container",
  //     ".table",
  //     "verificador3"
  //   );
  //   cy.wait(2000);
  //   cy.fixture("verificadores/verificador3").then((verifica) => {
  //     cy.log("VERIFICADOR 3", verifica);
  //     this.verifica = verifica;
  //     alumnosprofesor.mensajeAlumnosInscritos(this.verifica.verify);
  //   });
  // });
});
