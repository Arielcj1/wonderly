/// <reference types="cypress" />
import { Perfil } from "../../paginas/Hijo/Perfil";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- Home Page", () => {
  const perfil = new Perfil();
  const ingresar = new Ingresar();
  const home = new Home();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  it("Verificar que el hijo se encuentre en el Tablero de Perfil", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    perfil.click_seleccionarHijo();
    home.click_MenuUsuario();
    cy.wait(2000);
    perfil.click_usuarioPerfil();
    cy.get(".text-dark").should("be.visible");
  });
});
