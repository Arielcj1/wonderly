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

describe("Wonderly- Home Page", () => {
  const perfil = new Perfil();
  const ingresar = new Ingresar();
  const home = new Home();
  const mishijos = new MisHijos();
  const claseshijo = new ClasesHijo();
  const metodopago = new MetodoPago();
  const clase = new Clase();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  it("Verificar que el hijo se encuentre en el Tablero de Perfil", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    perfil.click_seleccionarHijo();
    home.click_MenuUsuario();
    cy.wait(2000);
    perfil.click_usuarioPerfil();
    cy.get(".text-dark").should("be.visible");
  });

  it("Verificar que el hijo se encuentre en el tablero de Mis Hijos", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    perfil.click_seleccionarHijo();
    home.click_MenuUsuario();
    cy.wait(2000);
    perfil.click_usuarioPerfil();
    mishijos.click_tableroMisHijos();
    cy.get(".text-dark").should("be.visible");
  });

  it("Verificar que el hijo se encuentre en el tablero de Mis clases", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    perfil.click_seleccionarHijo();
    home.click_MenuUsuario();
    claseshijo.click_menu_clasesHijo();
    cy.get(".text-dark").should("be.visible");
  });

  it("Verificar que el hijo se encuentre en el tablero de Metodo de Pago", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    perfil.click_seleccionarHijo();
    home.click_MenuUsuario();
    perfil.click_usuarioPerfil();
    metodopago.click_tableroMetodoPago();
    cy.get(".card-header").should("be.visible");
  });

  it("Verificar que el hijo pueda conectar un hijo desde el Tablero Mis hijos", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    home.click_MenuUsuario();
    perfil.click_usuarioPerfil();
    mishijos.click_tableroMisHijos();
    mishijos.click_conectarHijo();
    cy.get(":nth-child(4) > .btn-danger").should("be.visible");
  });
});
