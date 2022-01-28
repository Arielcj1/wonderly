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
  beforeEach(function () {
    cy.visit("https://developers.learnwonderly.com/");
    cy.fixture("variables/variablesUsuario").then((variables) => {
      this.variables = variables;
      home.click_IniciaSesion();
      cy.get("#input_1").type(this.variables.correoPadre1);
      ingresar.type_contrasena("12345");
      ingresar.click_continuar();
    });
  });

  //CLASES
  it.skip("1_Verificar que un hijo pueda ingresar al detalle de un curso desde la pestaña Cursos", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_pestañaCursos();
    claseshijo.botonInscribeteCursos();
    claseshijo.botonPreguntaWhatsapp();
    claseshijo.aprendizajeProyecto();
    cy.get(".col-md-7 > .title").should("be.visible");
  });

  it.skip("2_Comprobar que el hijo pueda ver el detalle de una clase desde Clases Hijo", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    cy.wait(3000);
    clase.click_nombreDeLaClase();
    cy.get("h4").should("be.visible");
  });

  it("3_Verificar que un hijo pueda ingresar 30 minutos antes cuya clase esta por empezar", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    claseshijo.clickBotonUnirmeClase("Unirse a clase");
  });

  // AUTOPAYMENT:

  it("5_Verificar que pueda Activar el Autopayment desde el tablero Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    autopayment.verificarAutopaymentActivar();
  });

  it("6_Verificar que pueda Cancelar el Autopayment desde el tablero Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    autopayment.verificarAutopaymentCancelar();
  });

  it("7_Verificar que pueda Actualizar Membresia Genio, Inventor y Explorador desde el tablero Mis hijos", () => {
    cy.wait(2000);
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    autopayment.ActualizarMembresia();
  });
});
