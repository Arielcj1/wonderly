// Casos de prueba realizado por:
// Autor: Yanina Cardozo
///<reference types="cypress"/>

import { Clase } from "../../paginas/Hijo/Clase";
import { MembresiasHijo } from "../../paginas/Hijo/MembresiasHijo";
import { MisHijos } from "../../paginas/Hijo/MisHijos";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("MEMBRESIAS", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfilhijo = new PerfilHijo();
  const clase = new Clase();
  const membresiahijos = new MembresiasHijo();
  const mishijos = new MisHijos();

  beforeEach(function () {
    cy.visit("https://developers.learnwonderly.com/");
    cy.fixture("variables/variablesUsuario").then((variables) => {
      this.variables = variables;
      home.click_IniciaSesion();
      cy.get("#input_1").type(this.variables.correoPadre1);
      ingresar.type_contrasena("12345");
      ingresar.click_continuar();
      // perfilhijo.click_seleccionarHijo();
    });
  });

  // COMPRA DE MEMBRESIAS SOLO EXPLORADOR TEMPORALMENTE
  it("1_Verificar que un hijo puede comprar una membresia Explorador", () => {
    home.click_salir();
    home.click_IniciaSesion();
    ingresar.type_Correo("berthita@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.botonComprarMembresia();
    membresiahijos.seleccionarHijoMembresia("Carito Salas");
    membresiahijos.botonComprar();
    membresiahijos.botonMembresiasCompradas();
  });

  //DETALLE DE LA MEMBRESIA: EXPLORADOR, INVENTOR y GENIO
  it("2_Comprobar que el detalle de la membresia 'Explorador' coincide con el Detalle de compra", () => {
    home.click_LogoWonderly();
    home.botonComprarMembresia();
    // home.click_Membresia_Explorador();
    membresiahijos.verificarDetalleCompraMembresiaExplorador(
      "Membresia: Explorador",
      "Precio Total: 29.99 USD."
    );
  });

  it.skip("3_Comprobar que el detalle de la membresia 'Inventor' coincide con el Detalle de compra", () => {
    home.click_LogoWonderly();
    home.click_Membresia_Inventor();
    membresiahijos.verificarDetalleCompraMembresiaInventor(
      "Membresia: Inventor",
      "Precio Total: 49.99 USD."
    );
  });

  it.skip("4_Comprobar que el detalle de la membresia 'Genio' coincide con el Detalle de compra", () => {
    home.click_LogoWonderly();
    home.click_Membresia_Genio();
    membresiahijos.verificarDetalleCompraMembresiaGenio(
      "Membresia: Genio",
      "Precio Total: 69.99 USD."
    );
  });

  //MENSAJE DE ADVERTENCIA: EXPLORADOR, INVENTOR y GENIO
  it("5_Verificar que el sistema muestra un mensaje de advertencia cuando no se completa los campos requeridos al comprar una membresia Explorador", () => {
    home.click_LogoWonderly();
    home.botonComprarMembresia();
    membresiahijos.botonComprar();
    // home.click_Membresia_Explorador();
    membresiahijos.MensajeAdvertencia();
  });

  it.skip("6_Verificar que el sistema muestra un mensaje de advertencia cuando no se completa los campos requeridos al comprar una membresia Inventor", () => {
    home.click_LogoWonderly();
    home.click_Membresia_Inventor();
    membresiahijos.MensajeAdvertencia();
  });

  it.skip("7_Verificar que el sistema muestra un mensaje de advertencia cuando no se completa los campos requeridos al comprar una membresia Genio", () => {
    home.click_LogoWonderly();
    home.click_Membresia_Genio();
    membresiahijos.MensajeAdvertencia();
  });

  it("8_Verificar que en el perfil del hijo se muestre el tipo de membresia que compró", () => {
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    cy.get(
      ":nth-child(1) > :nth-child(3) > .list-group > .list-group-item"
    ).should("be.visible");
  });
});
