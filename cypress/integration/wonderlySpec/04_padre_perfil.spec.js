/// <reference types="cypress" />
// Casos de prueba realizado por Patrik Delgadillo
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Perfil } from "../../paginas/Padre/Perfil";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe.skip("Perfil Padre", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfil = new Perfil();

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

  it("1_Verificar que un padre pueda Ir a su Perfil", function () {
    perfil.click_perfil(); //Click en la opcion Cuenta del dropdown menu
    cy.get("#menu-item-144 > .nav-link")
      .should("contain.text", "Perfil")
      .should("be.visible");
  });

  it("2_Verificar que se muestra un mensaje de advertencia cuando no se completa todos los campos requeridos en su Perfil.", () => {
    perfil.click_perfil(); //Click en la opcion Cuenta del dropdown menu
    perfil.click_guardar();
    cy.get(".title").should("be.visible");
  });

  it("3_Verificar que un padre puede editar y completar su Perfil.", () => {
    perfil.click_perfil();
    //Completar datos necesarios del Padre
    perfil.type_fechaNacimiento("01/01/2000");
    perfil.type_numCelular("71092100");
    perfil.type_direccion("Av Ayacucho 1234");
    perfil.type_ciudad("Cochabamba");
    perfil.type_provincia("Cercado");
    perfil.type_codigoPostal("00122");
    perfil.type_pais("Argentina");
    perfil.seleccionar_materias();
    perfil.click_guardar();
    cy.get(".alert").should("be.visible");
  });
});
