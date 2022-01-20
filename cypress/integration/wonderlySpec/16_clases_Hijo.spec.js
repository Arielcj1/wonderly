/// <reference types="cypress" />
// Casos de prueba realizado por Yanina Cardozo

import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Clase } from "../../paginas/Hijo/Clase";
import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";
import { Autopayment } from "../../paginas/Hijo/Autopayment";
import { MisHijos } from "../../paginas/Hijo/MisHijos";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- clases hijos", () => {
  const perfilhijo = new PerfilHijo();
  const ingresar = new Ingresar();
  const home = new Home();
  const clase = new Clase();
  const claseshijo = new ClasesHijo();
  const mishijos = new MisHijos();
  const autopayment = new Autopayment();
  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("padre0@gmail.com"); //Cambiar usuario padre
    ingresar.type_contrasena("12345"); //Cambiar contraseña
    ingresar.click_continuar();
  });

  //CLASES
  it("27_Verificar que un hijo puede ingresar al detalle de un curso desde el schedule.", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    clase.click_botonEntrarClase();
    claseshijo.aprendizajeProyecto();
    cy.wait(2000);
    claseshijo.botonPreguntaWhatsapp();
  });
  it("28_Verificar que un hijo pueda ingresar al detalle de un curso desde la pestaña Cursos", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_pestañaCursos();
    claseshijo.botonInscribeteCursos();
    claseshijo.botonPreguntaWhatsapp();
    claseshijo.aprendizajeProyecto();
    cy.get(".col-md-7 > .title").should("be.visible");
  });

  it("29_Comprobar que el hijo pueda ver el detalle de una clase desde Clases Hijo", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    cy.wait(3000);
    clase.click_nombreDeLaClase();
    cy.get(".actions-header > .class-title").should("be.visible");
  });

  it("30_Verificar que un hijo pueda ingresar 30 minutos antes cuya clase esta por empezar", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    claseshijo.click_botonUnirseClase();
  });

  it.skip("33_verificar que las clases esten ordenadas cronologicamente", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    clase.VerificarFecha();
  });

  it("34_Verificar que un hijo pueda descargar el material de una clase", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    clase.click_descargarMaterial();
  });

  it("37_Verificar que el hijo pueda ver el counter de la clase", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    cy.get(".countdown-container").should("be.visible");
  });
  // AUTOPAYMENT:

  it("38_Verificar que pueda Activar el Autopayment desde el tablero Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    autopayment.verificarAutopaymentActivar();
  });

  it("39_Verificar que pueda Cancelar el Autopayment desde el tablero Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    autopayment.verificarAutopaymentCancelar();
  });

  it("40_41_42_Verificar que pueda Actualizar Membresia Genio, Inventor y Explorador desde el tablero Mis hijos", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    autopayment.ActualizarMembresia();
  });
});
