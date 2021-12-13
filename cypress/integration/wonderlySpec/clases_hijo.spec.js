/// <reference types="cypress" />
import { Perfil } from "../../paginas/Hijo/Perfil";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Clase } from "../../paginas/Hijo/Clase";
import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- Home Page", () => {
  const perfil = new Perfil();
  const ingresar = new Ingresar();
  const home = new Home();
  const clase = new Clase();
  const claseshijo = new ClasesHijo();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  it("Comprobar que el hijo pueda ver el detalle de una clase desde Clases Hijo", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    perfil.click_seleccionarHijo();
    home.click_MenuUsuario();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    cy.get(".actions-header > .class-title").should("be.visible");
  });

  it("Verificar que el hijo pueda inscribirse a una clase desde la seccion en VIVO", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    perfil.click_seleccionarHijo();
    clase.click_botonEntrarClase();
    cy.wait(3000);
    clase.verificarClaseInscrita();
  });

  it("Demostrar que el hijo pueda entrar a un curso desde la seccion ON DEMAND", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    perfil.click_seleccionarHijo();
    home.click_OnDemandSeccion();
    cy.wait(2000);
    clase.click_botonEntrarCurso();
    cy.get(":nth-child(1) > .title-modulo").should("be.visible");
  });
});
