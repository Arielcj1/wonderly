// Casos de prueba realizado por:
// Autor: Yanina Cardozo
/// <reference types="cypress" />

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
    ingresar.type_Correo("padre6@gmail.com"); //Cambiar usuario padre
    ingresar.type_contrasena("12345"); //Cambiar contraseña
    ingresar.click_continuar();
  });

  //CLASES
  it("1_Verificar que un hijo puede ingresar al detalle de un curso desde el schedule.", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    clase.click_botonEntrarClase();
    claseshijo.aprendizajeProyecto();
    cy.wait(2000);
    claseshijo.botonPreguntaWhatsapp();
  });
  it("2_Verificar que un hijo pueda ingresar al detalle de un curso desde la pestaña Cursos", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_pestañaCursos();
    claseshijo.botonInscribeteCursos();
    claseshijo.botonPreguntaWhatsapp();
    claseshijo.aprendizajeProyecto();
    cy.get(".col-md-7 > .title").should("be.visible");
  });

  it("3_Comprobar que el hijo pueda ver el detalle de una clase desde Clases Hijo", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    cy.wait(3000);
    clase.click_nombreDeLaClase();
    cy.get(".actions-header > .class-title").should("be.visible");
  });

  it("6_Verificar que el hijo pueda ver el counter de la clase", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    cy.get(".countdown-container").should("be.visible");
  });

  it("4_Verificar que un hijo pueda ingresar 30 minutos antes cuya clase esta por empezar", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    claseshijo.click_botonUnirseClase();
  });

  it("5_Verificar que un hijo pueda descargar el material de una clase", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    clase.click_descargarMaterial();
  });

  // AUTOPAYMENT:

  it("7_Verificar que pueda Activar el Autopayment desde el tablero Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    autopayment.verificarAutopaymentActivar();
  });

  it("8_Verificar que pueda Cancelar el Autopayment desde el tablero Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    autopayment.verificarAutopaymentCancelar();
  });

  it("9_Verificar que pueda Actualizar Membresia Genio, Inventor y Explorador desde el tablero Mis hijos", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    autopayment.ActualizarMembresia();
  });
});
