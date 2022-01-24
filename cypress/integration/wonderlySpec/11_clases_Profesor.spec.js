// Casos de prueba realizado por:
// Autor: Yanina Cardozo
/// <reference types="cypress" />

import { Perfil } from "../../paginas/Profesor/Perfil";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { ClasesProfesor } from "../../paginas/Profesor/ClasesProfesor";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Clase } from "../../paginas/Hijo/Clase";
import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- PROFESOR", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfil = new Perfil();
  const clasesprofesor = new ClasesProfesor();
  const clase = new Clase();
  const perfilhijo = new PerfilHijo();
  const claseshijo = new ClasesHijo();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("profesor3@gmail.com"); //Cambiar el correo del profesor nuevo
    ingresar.type_contrasena("12345"); //Cambiar la contraseña que le corresponde
    ingresar.click_continuar();
  });

  //HIJO VERIFICA EL COUNTER Y SE INSCRIBE A UNA CLASE:
  it("6_Verificar que el hijo pueda ver el counter de la clase", () => {
    perfil.click_salirDelMenu();
    home.click_IniciaSesion();
    ingresar.type_Correo("padre6@gmail.com");
    ingresar.type_contrasena("12345");
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    cy.get(".countdown-container").should("be.visible");
  });

  it("1_Comprobar que un hijo pueda inscribirse a una clase entrando al detalle de la clase desde el Schedule", () => {
    perfil.click_salirDelMenu();
    home.click_IniciaSesion();
    ingresar.type_Correo("padre6@gmail.com"); //Cambiar el correo del padre nuevo
    ingresar.type_contrasena("12345"); //Cambiar la constraseña del padre nuevo que le corresponde
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    cy.wait(3000);
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    clase.verificarClaseInscrita();
  });

  it("2_Verificar que un profesor puede iniciar una clase desde el detalle de la clase", () => {
    perfil.click_tableroClasesProfesor();
    cy.wait(2000);
    clasesprofesor.clickNombreClase();
    clasesprofesor.botonIniciarClase();
    cy.wait(4000);
  });

  it("3_Verificar que un profesor puede Iniciar su clase 30 minutos antes que inicie su clase desde el tablero Clases profesor", () => {
    perfil.click_tableroClasesProfesor();
    cy.wait(2000);
    perfil.click_iniciarClase();
    cy.wait(4000);
  });

  it("4_Verificar que un profesor pueda Iniciar clase desde el Schedule", () => {
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    clasesprofesor.botonIniciarClaseSchedule("Iniciar Clase");
  });

  it("5_Verificar que un profesor pueda ver sus clases asignadas desde el schedule", () => {
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    clasesprofesor.verificarClaseAsignadaSchedule("Iniciar Clase");
  });

  it("6_Verificar que un profesor puede editar su clase.", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.editarClase();
    clasesprofesor.type_youtubeVideo(
      "https://www.youtube.com/watch?v=8JnfIa84TnU"
    );
    clasesprofesor.click_botonGuardar();
    cy.get(".alert").should("be.visible");
  });

  it("7_Verificar que un profesor puede agregar material a su clase", () => {
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
  it("8_Verificar que un profesor puede eliminar material de su clase", () => {
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
  it("9_Verificar que un profesor puede editar material a su clase", () => {
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

  it("10_Verificar que el material agregado por el profesor respeta los formatos permitidos y el tamaño maximo de archivo", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.click_botonAgregarMaterial();
    clasesprofesor.type_tituloFormAgregarMaterial(" ");
    clasesprofesor.type_descripcionFormAgregarMaterial(" ");
    perfil.subirArchivo();
    clasesprofesor.agregarMaterialForm();
  });

  it("11_Verificar que el profesor pueda ver el detalle de una clase seleccionada", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.clickNombreClase();
    cy.get(".actions-header > .class-title").should("be.visible");
    cy.get(".detail-materia > b").should("be.visible");
  });

  it("12_Comprobar que un profesor no pueda iniciar una clase hasta 30 minutos que inicie una clase.", () => {
    perfil.click_salirDelMenu();
    home.click_IniciaSesion();
    ingresar.type_Correo("profegoodman@gmail.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfil.click_tableroClasesProfesor();
    cy.wait(3000);
    perfil.iniciarLaClaseAntes("¡Oops! Es muy pronto para inciar la clase.");
    cy.wait(3000);
  });

  it("13_Comprobar que un profesor pueda ver los alumnos registrados desde el icono ver Alumnos registrados.", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.clickIconoVerAlumnosInscritos();
    cy.get("tbody > tr > th").should("have.length", 1); //cambiar el numero de inscritos para verificar el assert
  });

  it("14_Comprobar que un profesor pueda ver el mensaje cuando no se han inscrito alumnos a su clase", () => {
    perfil.click_salirDelMenu();
    home.click_IniciaSesion();
    ingresar.type_Correo("profepedro@gmail.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.clickIconoVerAlumnosInscritos();
    cy.get(".alert").should("be.visible");
  });
});
