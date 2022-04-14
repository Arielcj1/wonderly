// Autor: Patrik Delgadillo
/// <reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { ComprarPaquete } from "../../paginas/Padre/ComprarPaquete";
import { Perfil } from "../../paginas/Padre/Perfil";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";
import { Perfiles } from "../../paginas/Padre/Perfiles";
import { MetodoPago } from "../../paginas/Padre/MetodoPago";
import { MembresiasHijo } from "../../paginas/Hijo/MembresiasHijo";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe.skip("Padre - Comprar Membresias Hijos", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const paquete = new ComprarPaquete();
  const registrarhijo = new RegistrarHijo();
  const perfil = new Perfil();
  const pago = new MetodoPago();
  const perfiles = new Perfiles();
  const membresiahijos = new MembresiasHijo();

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

  it("1_Verificar que un padre pueda Añadir Tarjeta.", () => {
    perfil.click_perfil();
    pago.click_tablero_MetodoPago();
    pago.click_anadirTarjeta();
    //Completar o Actualizar datos de Tarjeta de Credito o Debito
    pago.type_numTarjeta("4242424242424242");
    pago.type_mesExp("05");
    pago.type_añoExp("2022");
    pago.type_cvc("123");
    pago.type_nomTitular("Julio Roca");
    pago.click_enviar();
    //cy.get("#gform_confirmation_message_37").should("be.visible");
  });

  it("2_Comprobar que un padre puede comprar una membresia 'Explorador'.", () => {
    home.click_LogoWonderly();
    home.click_Membresias();
    home.click_Membresia_Explorador();
    paquete.type_seleccionarHijo("Hijo Uno");
    cy.wait(2000);
    paquete.click_suscribirse();
    //cy.get(".text-primary").should("be.visible");
  });

  it("3_Comprobar que el detalle de la membresia 'Explorador' coincide con el 'Detalle de compra'.", () => {
    home.click_LogoWonderly();
    home.click_Membresias();
    home.click_Membresia_Explorador();
    paquete.type_seleccionarHijo("Hijo Dos");
    paquete.click_suscribirse();
    //cy.get(".text-primary").should("be.visible");   //¡Gracias por tu compra!
    paquete.verificarTipoMembresia("Explorador");
    paquete.verificarPrecioTotal("29.99 USD.");
  });

  it("4_Comprobar que el sistema muestra un mensaje de advertencia cuando no se completa los campos requeridos al comprar una membresia.", () => {
    home.click_LogoWonderly();
    home.click_Membresias();
    home.click_Membresia_Explorador();
    paquete.click_suscribirse();
    cy.get(".title").should("be.visible");
  });

  it("5_Probar que un padre pueda registrar a un hijo cuando compra una membresia 'Explorador'. ", () => {
    home.click_LogoWonderly();
    home.click_Membresias();
    home.click_Membresia_Explorador();
    //Registrar nuevo Hijo
    paquete.click_Aqui_nuevoHijo();
    registrarhijo.type_nombreHijo("FFFGI");
    registrarhijo.type_apellidoHijo("Explorador");
    registrarhijo.type_fechaNacimiento("01/01/2011");
    registrarhijo.click_registrar();
    paquete.type_seleccionarHijo("FFFGI Explorador");
    paquete.click_suscribirse();
    membresiahijos.botonMembresiasCompradas();
    // cy.get("thead > tr > :nth-child(3)").should("be.visible");
    //cy.get(".text-primary").should("be.visible");
  });
});
