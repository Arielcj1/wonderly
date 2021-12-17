/// <reference types="cypress" />

import { MisHijos } from "../../paginas/Hijo/MisHijos";
import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";
import { Perfil } from "../../paginas/Hijo/Perfil";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { MetodoPago } from "../../paginas/Hijo/MetodoPago";
import { Clase } from "../../paginas/Hijo/Clase";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- Home Page HIJO", () => {
  const perfil = new Perfil();
  const ingresar = new Ingresar();
  const home = new Home();
  const mishijos = new MisHijos();
  const claseshijo = new ClasesHijo();
  const metodopago = new MetodoPago();
  const clase = new Clase();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("padre@gmail.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
  });

  it("1_Demostrar que el hijo puede dirigirse a la pestaña POR QUE WONDERLY?", () => {
    // Seleccionar el hijo
    home.click_LogoWonderly();
    home.click_PorqueWonderly();
    cy.get("h2").should("be.visible");
  });

  it.skip("2_Comprobar que el hijo se encuentre en la pestaña de DESTREZAS", () => {
    // Seleccionar el hijo
    home.click_LogoWonderly();
    home.click_Destrezas();
    cy.get("h2").should("be.visible");
  });

  it.skip("3_Probar que el hijo se encuentre en la sección ON DEMAND", () => {
    // Seleccionar el hijo
    home.click_LogoWonderly();
    home.click_seccionOnDemand();
  });

  it.skip("4_Verificar que el hijo se encuentre en la sección EN VIVO", () => {
    // Seleccionar el hijo
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
  });

  it("5_Verificar que el hijo se encuentre en el Tablero de Perfil", () => {
    perfil.click_seleccionarHijo();
    home.click_MenuUsuario();
    cy.wait(2000);
    perfil.click_usuarioPerfil();
    cy.get(".text-dark").should("be.visible");
  });

  it("6_Verificar que el hijo se encuentre en el tablero de Mis Hijos", () => {
    perfil.click_seleccionarHijo();
    home.click_MenuUsuario();
    cy.wait(2000);
    perfil.click_usuarioPerfil();
    mishijos.click_tableroMisHijos();
    cy.get(".text-dark").should("be.visible");
  });

  it("7_Verificar que el hijo se encuentre en el tablero de Mis clases", () => {
    perfil.click_seleccionarHijo();
    home.click_MenuUsuario();
    claseshijo.click_menu_clasesHijo();
    cy.get(".text-dark").should("be.visible");
  });

  it("8_Verificar que el hijo se encuentre en el tablero de Metodo de Pago", () => {
    perfil.click_seleccionarHijo();
    home.click_MenuUsuario();
    perfil.click_usuarioPerfil();
    metodopago.click_tableroMetodoPago();
    cy.get(".card-header").should("be.visible");
  });

  //Boton eliminado CONECTAR
  it.skip("Verificar que el hijo pueda conectar un hijo desde el Tablero Mis hijos", () => {
    home.click_MenuUsuario();
    perfil.click_usuarioPerfil();
    mishijos.click_tableroMisHijos();
    mishijos.click_conectarHijo();
    cy.get(":nth-child(4) > .btn-danger").should("be.visible");
  });
});