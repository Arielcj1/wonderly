/// <reference types="cypress" />
// Casos de prueba realizado por Patrik Delgadillo

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Registro } from "../../paginas/Registro";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe.skip("Padre - Registrar padre", () => {
  const home = new Home();
  const registro = new Registro();
  const ingresar = new Ingresar();

  beforeEach(function () {
    cy.visit("https://developers.learnwonderly.com/");
    cy.fixture("variables/variablesUsuario").then((variables) => {
      this.variables = variables;
    });
  });

  it("1_Demostrar que un padre pueda registrarse desde la opcion 'Aun no eres miembro? Registrate aqui', presionando el boton 'Inicia sesion'", function () {
    home.click_IniciaSesion();
    home.opcionRegistrateAqui();
    registro.type_nombre("Diego");
    registro.type_apellidos("Roca");
    cy.get("#input_21_2").type(this.variables.correoPadre1);
    registro.type_contrasenia("12345");
    registro.type_numero("65266222");
    registro.click_siguiente();
    cy.get("h2").should("be.visible");
  });

  it("2_Verificar que un padre pueda registrarse desde el boton 'Prueba por 14 dias' del Home Page ", function () {
    home.botonConMovimiento14diasGratis();
    registro.type_nombre("Pedro");
    registro.type_apellidos("Perez");
    cy.get("#input_21_2").type(this.variables.correoPadre2);
    registro.type_contrasenia("12345");
    registro.type_numero("65266222");
    registro.click_siguiente();
    cy.get("h2").should("be.visible");
  });

  it("3_Verificar que un padre pueda registrarse desde el boton Menú '14 dias gratis' del Header Menu ", function () {
    home.boton14diasGratis();
    registro.type_nombre("Juan");
    registro.type_apellidos("Perez");
    cy.get("#input_21_2").type(this.variables.correoPadre3);
    registro.type_contrasenia("12345");
    registro.type_numero("65266222");
    registro.click_siguiente();
    cy.get("h2").should("be.visible");
  });

  it("4_Verificar que un padre puede hacer login en wonderly con email y contraseña validos", function () {
    home.click_IniciaSesion();
    cy.get("#input_1").type(this.variables.correoPadre1);
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    cy.get(".text-center > .btn").should("be.visible");
  });

  it("5_Comprobar que un padre no pueda ingresar con email y contraseña invalidos", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("padreXX@gmail.com");
    ingresar.type_contrasena("54321");
    ingresar.click_continuar();
    cy.get(".text").should("be.visible");
  });

  it("6_Probar que un padre no pueda registrarse con un correo ya usado en Wonderly", function () {
    home.boton14diasGratis();
    registro.type_nombre("Carlos");
    registro.type_apellidos("Roca");
    cy.get("#input_21_2").type(this.variables.correoPadre1);
    registro.type_contrasenia("12345");
    registro.type_numero("65266222");
    registro.click_siguiente();
    registro.click_Modal();
    cy.get("#validation_message_21_2").should("be.visible");
  });
});
