///<reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Administrador - Login", () => {
  const home = new Home();
  const ingresar = new Ingresar();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  it("01_Verificar que el Admin puede ingresar con Correo electronico valido y Contraseña valido.", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
  });

  it("02_Verificar que el Admin no puede ingresar con Correo electronico invalido y Contraseña invalido.", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("neida.xxx@believesol.com");
    ingresar.type_contrasena("abcABCxxx");
    ingresar.click_continuar();
    cy.get(".message-error > .title").should("be.visible");
  });

  it("03_Verificar que el sistema muestra un mensaje de advertencia cuando no se completan los datos requeridos.", () => {
    home.click_IniciaSesion();
    ingresar.click_continuar();
    cy.get(".message-error > .title").should("be.visible");
  });

  it("04_Verificar que el sistema señala cuales son los campos obligatorios para completar.", () => {
    home.click_IniciaSesion();
    ingresar.click_continuar();
    cy.get(".message-error > .title").should("be.visible");
    ingresar.close_modalMessage();
    // Assert de mensajes 'Este campo es obligatorio.'
    cy.get("#validation_message_0_1").should("be.visible"); //Correo electronico
    cy.get("#validation_message_0_2").should("be.visible"); //Contraseña
  });
});
