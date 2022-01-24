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

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("padre6@gmail.com"); //Cambiar el correo del padre
    ingresar.type_contrasena("12345"); //Cambiar contraseña del padre
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
  });

  // COMPRA DE MEMBRESIAS EXPLORADOR, INVENTOR y GENIO
  it("1_Verificar que un hijo puede comprar una membresia Explorador, Inventor y Genio", () => {
    home.click_salir();
    home.click_IniciaSesion();
    ingresar.type_Correo("berthita@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    membresiahijos.Membresia("Carito Salas");
  });

  //DETALLE DE LA MEMBRESIA: EXPLORADOR, INVENTOR y GENIO
  it("2_Comprobar que el detalle de la membresia 'Explorador' coincide con el Detalle de compra", () => {
    home.click_LogoWonderly();
    home.click_Membresia_Explorador();
    membresiahijos.verificarDetalleCompraMembresiaExplorador(
      "Membresia: Explorador",
      "Precio Total: 29.99 USD."
    );
  });

  it("3_Comprobar que el detalle de la membresia 'Inventor' coincide con el Detalle de compra", () => {
    home.click_LogoWonderly();
    home.click_Membresia_Inventor();
    membresiahijos.verificarDetalleCompraMembresiaInventor(
      "Membresia: Inventor",
      "Precio Total: 49.99 USD."
    );
  });

  it("4_Comprobar que el detalle de la membresia 'Genio' coincide con el Detalle de compra", () => {
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
    home.click_Membresia_Explorador();
    membresiahijos.MensajeAdvertencia();
  });

  it("6_Verificar que el sistema muestra un mensaje de advertencia cuando no se completa los campos requeridos al comprar una membresia Inventor", () => {
    home.click_LogoWonderly();
    home.click_Membresia_Inventor();
    membresiahijos.MensajeAdvertencia();
  });

  it("7_Verificar que el sistema muestra un mensaje de advertencia cuando no se completa los campos requeridos al comprar una membresia Genio", () => {
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
