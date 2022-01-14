///<reference types="cypress"/>
// Casos de prueba realizado por Yanina Cardozo

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
    ingresar.type_Correo("marieschrei@gmail.com");
    // ingresar.type_Correo("yenny@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
  });

  // COMPRA DE MEMBRESIAS EXPLORADOR, INVENTOR y GENIO
  it.skip("21_22_23_Verificar que un hijo puede comprar una membresia Explorador, Inventor y Genio", () => {
    membresiahijos.Membresia("Alicia Schrei");
  });

  it.skip("24_Comprobar que el detalle de la membresia 'Explorador' coincide con el Detalle de compra", () => {
    home.click_Membresia_Explorador();
    membresiahijos.verificarDetalleCompraMembresia(
      "Membresia: Explorador",
      "Precio Total: 29.99 USD."
    );
  });

  it.skip("25_Comprobar que el detalle de la membresia 'Inventor' coincide con el Detalle de compra", () => {
    home.click_Membresia_Inventor();
    membresiahijos.verificarDetalleCompraMembresia(
      "Membresia: Inventor",
      "Precio Total: 49.99 USD."
    );
  });

  it.skip("26_Comprobar que el detalle de la membresia 'Genio' coincide con el Detalle de compra", () => {
    home.click_Membresia_Genio();
    membresiahijos.verificarDetalleCompraMembresia(
      "Membresia: Genio",
      "Precio Total: 69.99 USD."
    );
  });

  it.skip("27_28_29_Verificar que el sistema muestra un mensaje de advertencia cuando no se completa los campos requeridos al comprar una membresia Explorador, Inventor y Genio", () => {
    membresiahijos.MensajeAdvertencia();
  });

  it.skip("30_Verificar que en el perfil del hijo se muestre el tipo de membresia que compró", () => {
    // membresiahijos.Membresia("Carlita Schrei");
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    cy.get(
      ":nth-child(1) > :nth-child(3) > .list-group > .list-group-item"
    ).should("be.visible");
  });

  //MEMBRESIAS RESERVAS:
  it.skip("13_Comprobar que un hijo con membresia Explorador puede reservar una clase desde el schedule", () => {
    home.click_Membresia_Explorador();
    membresiahijos.select_MembresiaHijo("Carlita Schrei");
    membresiahijos.botonSubscribirse();
    membresiahijos.botonMembresiasCompradas();
    home.click_LogoWonderly();
    clase.verificarClaseInscrita();
  });

  it.skip("14_Comprobar que un hijo con membresia INVENTOR puede reservar una clase desde el schedule", () => {
    home.click_Membresia_Inventor();
    membresiahijos.select_MembresiaHijo("Lucia Schrei");
    membresiahijos.botonSubscribirse();
    membresiahijos.botonMembresiasCompradas();
    home.click_LogoWonderly();
    clase.verificarClaseInscrita();
  });

  it.skip("15_Comprobar que un hijo con membresia GENIO puede reservar una clase desde el schedule", () => {
    home.click_Membresia_Genio;
    membresiahijos.select_MembresiaHijo("Anita Schrei");
    membresiahijos.botonSubscribirse();
    membresiahijos.botonMembresiasCompradas();
    home.click_LogoWonderly();
    clase.verificarClaseInscrita();
  });
});
