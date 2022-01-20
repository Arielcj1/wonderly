/// <reference types="cypress" />
// Casos de prueba realizado por Yanina Cardozo

import { Perfil } from "../../paginas/Profesor/Perfil";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { ClasesProfesor } from "../../paginas/Profesor/ClasesProfesor";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Clase } from "../../paginas/Hijo/Clase";

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

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("profeana@gmail.com"); ////Cambiar el correo del profesor nuevo
    ingresar.type_contrasena("123abc"); ////Cambiar la contraseña que le corresponde
    ingresar.click_continuar();
  });

  //HIJO SE INSCRIBE A UNA CLASE:
  it.skip("11_1_Comprobar que un hijo pueda inscribirse a una clase entrando al detalle de la clase", () => {
    perfil.click_salirDelMenu();
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com"); //Cambiar el correo del padre nuevo
    ingresar.type_contrasena("abcABC123"); //Cambiar la constraseña del padre nuevo que le corresponde
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    cy.wait(3000);
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    clase.verificarClaseInscrita();
  });

  it.skip("12_Verificar que un profesor puede iniciar una clase desde el detalle de la clase", () => {
    perfil.click_tableroClasesProfesor();
    cy.wait(2000);
    clasesprofesor.click_nombreClase();
    clasesprofesor.boton_iniciarClase();
    cy.wait(4000);
  });

  it.skip("13_Verificar que un profesor puede Iniciar su clase 30 minutos antes que inicie su clase desde el tablero Clases profesor", () => {
    perfil.click_tableroClasesProfesor();
    cy.wait(2000);
    perfil.click_iniciarClase();
    cy.wait(4000);
  });

  it.skip("14_Verificar que un profesor pueda Iniciar clase desde el Schedule", () => {
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    clasesprofesor.boton_iniciarClaseSchedule("Iniciar Clase");
  });

  it.skip("15_Verificar que un profesor pueda ver sus clases asignadas desde el schedule", () => {
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    clasesprofesor.verificarClaseAsignadaSchedule("Iniciar Clase");
  });

  it.skip("16_Verificar que un profesor puede editar su clase.", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.editarClase();
    clasesprofesor.type_youtubeVideo(
      "https://www.youtube.com/watch?v=8JnfIa84TnU"
    );
    clasesprofesor.click_botonGuardar();
    cy.get(".alert").should("be.visible");
  });

  it.skip("17_Verificar que un profesor puede agregar material a su clase", () => {
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
  it.skip("18_Verificar que un profesor puede eliminar material de su clase", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.AgregarMaterial2davez(
      "Titulo ",
      "Esto es una descripción ",
      "sample.pdf"
    );
    clasesprofesor.click_botonRegresar();
    cy.wait(2000);
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.EliminarMaterialAgregado();
  });

  //Agregar Material para Editar
  it.skip("19_Verificar que un profesor puede editar material a su clase", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.AgregarMaterial2davez(
      "Titulo ",
      "Esto es una descripción ",
      "sample.pdf"
    );
    clasesprofesor.click_botonRegresar();
    cy.wait(2000);
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.EditarMaterialAgregado(
      "Prueba para editar el titulo",
      "SegundoCuento.pdf"
    );
  });

  it.skip("20_Verificar que el material agregado por el profesor respeta los formatos permitidos y el tamaño maximo de archivo", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.click_botonAgregarMaterial();
    clasesprofesor.type_tituloFormAgregarMaterial(" ");
    clasesprofesor.type_descripcionFormAgregarMaterial(" ");
    perfil.subirArchivo();
    clasesprofesor.agregarMaterialForm();
  });

  it.skip("21_Verificar que las clases esten ordenadas cronologicamente", () => {
    cy.wait(2000);
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.VerificarFecha();
  });

  it.skip("22_Verificar que el profesor pueda ver el detalle de una clase seleccionada", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.click_nombreClase();
    cy.get(".actions-header > .class-title").should("be.visible");
    cy.get(".detail-materia > b").should("be.visible");
  });

  it.skip("23_Comprobar que un profesor no pueda iniciar una clase hasta 30 minutos que inicie una clase.", () => {
    perfil.click_tableroClasesProfesor();
    cy.wait(2000);
    perfil.iniciarLaClaseAntes("¡Oops! Es muy pronto para inciar la clase.");
    cy.wait(4000);
  });

  it.skip("25_Comprobar que un profesor pueda ver los alumnos registrados desde el icono ver Alumnos registrados.", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.click_iconoVerAlumnosInscritos();
    cy.get("tbody > tr > th").should("have.length", 1); //cambiar el numero de inscritos para verificar el assert
  });

  it.skip("26_Comprobar que un profesor pueda ver el mensaje cuando no se han inscrito alumnos a su clase", () => {
    perfil.click_salirDelMenu();
    home.click_IniciaSesion();
    ingresar.type_Correo("profepedro@gmail.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.click_iconoVerAlumnosInscritos();
    cy.get(".alert").should("be.visible");
  });
});
