// Casos de prueba realizado por:
// Autor: Yanina Cardozo
///<reference types="cypress"/>

import { MembresiasHijo } from "../../paginas/Hijo/MembresiasHijo";
import { MisHijos } from "../../paginas/Hijo/MisHijos";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Cursos } from "../../paginas/Cursos";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("MEMBRESIAS", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfilhijo = new PerfilHijo();
  const membresiahijos = new MembresiasHijo();
  const mishijos = new MisHijos();
  const cursos = new Cursos();

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

  it("1_Comprobar que el detalle de la membresia 'Explorador' coincide con el Detalle de compra", () => {
    home.click_LogoWonderly();
    home.botonComprarMembresia();
    // home.click_Membresia_Explorador();
    membresiahijos.verificarDetalleCompraMembresiaExplorador(
      "Membresia: Explorador",
      "Precio Total: 29.99 USD."
    );
  });
  it("2_Verificar que el sistema muestra un mensaje de advertencia cuando no se completa los campos requeridos al comprar una membresia Explorador", () => {
    home.click_LogoWonderly();
    home.botonComprarMembresia();
    membresiahijos.botonComprar();
    // home.click_Membresia_Explorador();
    membresiahijos.MensajeAdvertencia();
  });

  it("3_Verificar que un hijo compre una membresia Explorador y pueda inscribirse a un curso desde el home", () => {
    home.clickSalirHijo();
    home.click_IniciaSesion();
    ingresar.type_Correo("yani238@mailinator.com"); //Cambiar usuario Padre
    ingresar.type_contrasena("12345"); //Cambiar contraseña
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(4);
    home.click_LogoWonderly();
    home.click_Membresia_Explorador();
    membresiahijos.seleccionarHijoMembresia("Hijo GGG");
    membresiahijos.botonComprar();
    membresiahijos.botonMembresiasCompradas();
    home.click_LogoWonderly();
    home.clickEnVivo();
    cursos.botonComienzaEnVivoUsuario();
    cursos.segundoBotonInscribete();
    cy.get(".alert").should("be.visible");
  });

  it("4_Verificar que en el perfil del hijo se muestre el tipo de membresia que compró", () => {
    home.clickSalirHijo();
    home.click_IniciaSesion();
    ingresar.type_Correo("yani238@mailinator.com"); //Cambiar usuario Padre
    ingresar.type_contrasena("12345"); //Cambiar contraseña
    ingresar.click_continuar();
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    cy.get(
      ":nth-child(1) > :nth-child(3) > .list-group > .list-group-item"
    ).should("be.visible");
  });

  it("5_Verificar que se muestre un mensaje de confirmacion cuando se inscribe a un curso", () => {
    home.clickSalirHijo();
    home.click_IniciaSesion();
    ingresar.type_Correo("yani238@mailinator.com"); //Cambiar usuario Padre
    ingresar.type_contrasena("12345"); //Cambiar contraseña
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(4);
    home.click_LogoWonderly();
    home.clickEnVivo();
    cursos.botonComienzaEnVivoUsuario();
    cursos.segundoBotonInscribete();
    cy.get(".modal-body > p").should("be.visible");
    cy.get(".alert").should("be.visible");
  });
});
