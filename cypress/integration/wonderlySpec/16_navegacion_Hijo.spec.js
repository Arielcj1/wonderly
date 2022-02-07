// Casos de prueba realizado por:
// Autor: Yanina Cardozo
/// <reference types="cypress" />

import { MisHijos } from "../../paginas/Hijo/MisHijos";
import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { MetodoPago } from "../../paginas/Hijo/MetodoPago";
import { ClaseOnDemand } from "../../PaginasAdmin/ClaseOnDemand";
import { testCaseConfig } from "../../helpers/helpers";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- tablero hijo", () => {
  const perfilhijo = new PerfilHijo();
  const ingresar = new Ingresar();
  const home = new Home();
  const mishijos = new MisHijos();
  const claseshijo = new ClasesHijo();
  const metodopago = new MetodoPago();
  const claseondemand = new ClaseOnDemand();
  const homeadmin = new HomeAdmin();

  beforeEach(function () {
    cy.visit("https://developers.learnwonderly.com/");
    cy.fixture("variables/variablesUsuario").then((variables) => {
      this.variables = variables;
      home.click_IniciaSesion();
      cy.get("#input_1").type(this.variables.correoAdmin);
      ingresar.type_contrasena("abcABC123");
      ingresar.click_continuar();
    });
  });

  // NAVEGACION POR LOS TABLEROS:
  it("1_Verificar que el hijo se encuentre en el Tablero de Perfil", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    cy.wait(2000);
    cy.get("#menu-item-144 > .nav-link").should("contain.text", "Perfil");
  });

  it("2_Verificar que el hijo se encuentre en el tablero de Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    cy.wait(2000);
    mishijos.click_tableroMisHijos();
    cy.get("#menu-item-211 > .nav-link").should("contain.text", "Mis Hijos");
  });

  it("3_Verificar que el hijo se encuentre en el tablero de Mis clases", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    claseshijo.click_menu_clasesHijo();
    cy.get("#menu-item-704 > .nav-link").should("contain.text", "Clases");
  });

  it("4_Verificar que el hijo se encuentre en el tablero de Metodo de Pago", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    metodopago.click_tableroMetodoPago();
    cy.get("#menu-item-1391 > .nav-link").should(
      "contain.text",
      "Método de Pago"
    );
  });

  // SECCION:
  it("5_Probar que el hijo se encuentre en la sección ON DEMAND", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_seccionOnDemand();
    cy.get("#ondemand-tab").should("contain.text", "ON-DEMAND");
  });

  it("6_Demostrar que el hijo pueda entrar a un curso desde la seccion ON DEMAND", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    claseondemand.verificarCursoOnDemand(testCaseConfig.claseOnDemandBuscar);
  });
});
