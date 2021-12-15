/// <reference types="cypress" />

import { Perfil } from "../../paginas/Profesor/Perfil";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- Home Page", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfil = new Perfil();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  it("Verificar que el profesor pueda ingresar a su perfil", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("profeclaudia@mailinator.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfil.click_tableroClasesProfesor();
    cy.wait(2000);
    perfil.click_iniciarClase();
    // cy.get(".text-dark").should("be.visible");
  });
});
