/// <reference types="cypress" />
// Casos de prueba realizado por Yanina Cardozo

import { MisHijos } from "../../paginas/Hijo/MisHijos";
import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { MetodoPago } from "../../paginas/Hijo/MetodoPago";
import { ClaseOnDemand } from "../../PaginasAdmin/ClaseOnDemand";

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

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
  });

  // NAVEGACION POR LOS TABLEROS:
  it.skip("1_Verificar que el hijo se encuentre en el Tablero de Perfil", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    cy.wait(2000);
    cy.get("#menu-item-144 > .nav-link").should("contain.text", "Perfil");
  });

  it.skip("2_Verificar que el hijo se encuentre en el tablero de Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    cy.wait(2000);
    mishijos.click_tableroMisHijos();
    cy.get("#menu-item-211 > .nav-link").should("contain.text", "Mis Hijos");
  });

  it.skip("3_Verificar que el hijo se encuentre en el tablero de Mis clases", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    claseshijo.click_menu_clasesHijo();
    cy.get("#menu-item-704 > .nav-link").should("contain.text", "Clases");
  });

  it.skip("4_Verificar que el hijo se encuentre en el tablero de Metodo de Pago", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    metodopago.click_tableroMetodoPago();
    cy.get("#menu-item-1391 > .nav-link").should(
      "contain.text",
      "Método de Pago"
    );
  });

  // SECCION:
  it.skip("5_Probar que el hijo se encuentre en la sección ON DEMAND", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_seccionOnDemand();
    cy.get("#ondemand-tab").should("contain.text", "ON-DEMAND");
  });

  //
  it.skip("6_Demostrar que el hijo pueda entrar a un curso desde la seccion ON DEMAND", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    cy.wait(2000);
    claseondemand.verificarCursoOnDemand("Programación On-Demand");
  });
});
