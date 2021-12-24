/// <reference types="cypress" />

import { MisHijos } from "../../paginas/Hijo/MisHijos";
import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { MetodoPago } from "../../paginas/Hijo/MetodoPago";
import { Clase } from "../../paginas/Hijo/Clase";
import { Autopayment } from "../../paginas/Hijo/Autopayment";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- Home Page HIJO", () => {
  const perfilhijo = new PerfilHijo();
  const ingresar = new Ingresar();
  const home = new Home();
  const mishijos = new MisHijos();
  const claseshijo = new ClasesHijo();
  const metodopago = new MetodoPago();
  const clase = new Clase();
  const autopayment = new Autopayment(); //nueva seccion

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("padre14@gmail.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
  });

  it("1_Demostrar que el hijo puede dirigirse a la pestaña POR QUE WONDERLY?", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_PorqueWonderly();
    cy.get("h2").should("be.visible");
  });

  it("2_Comprobar que el hijo se encuentre en la pestaña de DESTREZAS", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_Destrezas();
    cy.get("h2").should("be.visible");
  });

  it("3_Probar que el hijo se encuentre en la sección ON DEMAND", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_seccionOnDemand();
  });

  it("4_Verificar que el hijo se encuentre en la sección EN VIVO", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_seccionEnVivo();
  });

  it("5_Verificar que el hijo se encuentre en el Tablero de Perfil", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    cy.wait(2000);
    perfilhijo.click_usuarioPerfil();
    cy.get(".text-dark").should("be.visible");
  });

  it("6_Verificar que el hijo se encuentre en el tablero de Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    cy.wait(2000);
    perfilhijo.click_usuarioPerfil();
    mishijos.click_tableroMisHijos();
    cy.get(".text-dark").should("be.visible");
  });

  it("7_Verificar que el hijo se encuentre en el tablero de Mis clases", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    claseshijo.click_menu_clasesHijo();
    cy.get(".text-dark").should("be.visible");
  });

  it("8_Verificar que el hijo se encuentre en el tablero de Metodo de Pago", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    perfilhijo.click_usuarioPerfil();
    metodopago.click_tableroMetodoPago();
    cy.get(".card-header").should("be.visible");
  });


  // Autopago
  it("Verificar que el hijo pueda actualizar el auto pago", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    perfilhijo.click_usuarioPerfil(); //Cuenta
    mishijos.click_tableroMisHijos();
    autopayment.verificarAutopayment();
  });
});
