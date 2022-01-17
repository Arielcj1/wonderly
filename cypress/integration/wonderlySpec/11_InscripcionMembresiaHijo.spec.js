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
  const membresiahijos = new MembresiasHijo();
  const mishijos = new MisHijos();
  const clase = new Clase();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  // MEMBRESIAS EXPIRADAS
  it.skip("12_Verificar el mensaje de reserva de una clase con una membresia expirada", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("jaqueline@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    cy.wait(3000);
    membresiahijos.verificarMembresia(
      'No se pudo reservar el curso. "Compre una membresia"'
    );
    cy.get(".container > .mb-5")
      .should("contain.text", "Escoge el camino hacia la genialidad")
      .should("be.visible");
  });

  it.skip("17_Verificar que un hijo con membresia free no pueda Inscribirse a una clase que exceda sus 7 dias gratis.", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yenny@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_Flecha_Der();
    home.click_diaSchedule();
    cy.wait(3000);
    clase.click_InscribeteSchedule();
    clase.click_inscribeteGratis();
    cy.get(".container > .mb-5").should(
      "contain.text",
      "Escoge el camino hacia la genialidad"
    );
  });

  it.skip("18_Verificar que un hijo con membresia Explorador no pueda inscribirse a  una clase que exceda sus 31 dias", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("fernanda@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    cy.wait(3000);
    membresiahijos.verificarInscripcionExplorador();
    clase.click_inscribeteGratis();
    cy.get(".container > .mb-5").should(
      "contain.text",
      "Escoge el camino hacia la genialidad"
    );
  });

  it("19_Verificar que un hijo con membresia Inventor no pueda inscribirse a  una clase que exceda sus 31 dias", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("angel@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    cy.wait(3000);
    membresiahijos.verificarInscripcionInventor();
    clase.click_inscribeteGratis();
    cy.get(".container > .mb-5").should(
      "contain.text",
      "Escoge el camino hacia la genialidad"
    );
  });

  it("20_Verificar que un hijo con membresia Genio no pueda inscribirse a  una clase que exceda sus 31 dias", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("amalia@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    cy.wait(3000);
    membresiahijos.verificarInscripcionGenio();
    clase.click_inscribeteGratis();
    cy.get(".container > .mb-5").should(
      "contain.text",
      "Escoge el camino hacia la genialidad"
    );
  });
});
