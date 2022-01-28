// Casos de prueba realizado por:
// Autor: Yanina Cardozo
/// <reference types="cypress" />

import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Clase } from "../../paginas/Hijo/Clase";
import { MembresiasHijo } from "../../paginas/Hijo/MembresiasHijo";
import { testCaseConfig } from "../../helpers/helpers";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- Inscripcion a curso con Membresias", () => {
  const perfilhijo = new PerfilHijo();
  const ingresar = new Ingresar();
  const home = new Home();
  const clase = new Clase();
  const membresiahijos = new MembresiasHijo();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  // //MEMBRESIAS RESERVAS:
  it("2_Comprobar que un hijo con membresia Explorador pueda inscribirse a una clase desde el schedule", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("alfredo@gmail.com"); //Cambiar usuario Padre
    ingresar.type_contrasena("123"); //Cambiar contraseña
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_Membresia_Explorador();
    membresiahijos.select_MembresiaHijo("Belen Teran"); //Se debe Crear un hijo
    membresiahijos.botonSubscribirse();
    membresiahijos.botonMembresiasCompradas();
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    cy.contains(testCaseConfig.nombreCursoNavegacion).click(); //Cambiar nombre de curso
    clase.click_botonInscribeteCursos2davez("Inscríbete gratis");
  });

  it("3_Comprobar que un hijo con membresia INVENTOR pueda inscribirse a una clase desde el schedule", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("alfredo@gmail.com"); //Cambiar usuario Padre
    ingresar.type_contrasena("123"); //Cambiar contraseña
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(3);
    home.click_LogoWonderly();
    home.click_Membresia_Inventor();
    membresiahijos.select_MembresiaHijo("Alejandra Teran"); //Se debe Crear un hijo
    membresiahijos.botonSubscribirse();
    membresiahijos.botonMembresiasCompradas();
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    cy.contains(testCaseConfig.nombreCursoNavegacion).click(); //Cambiar nombre de curso
    clase.click_botonInscribeteCursos2davez("Inscríbete gratis");
  });

  it("4_Comprobar que un hijo con membresia GENIO pueda inscribirse a una clase desde el schedule", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("alfredo@gmail.com"); //Cambiar usuario Padre
    ingresar.type_contrasena("123"); //Cambiar contraseña
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(2);
    home.click_LogoWonderly();
    home.click_Membresia_Genio();
    cy.wait(2000);
    membresiahijos.select_MembresiaHijo("Alfredito Teran"); //Se debe Crear un hijo
    membresiahijos.botonSubscribirse();
    membresiahijos.botonMembresiasCompradas();
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    cy.contains(testCaseConfig.nombreCursoNavegacion).click(); //Cambiar nombre de curso
    clase.click_botonInscribeteCursos2davez("Inscríbete gratis");
  });

  it("5_Verificar que se muestra un mensaje de confirmacion cuando se inscribe a un curso", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("marquito@gmail.com"); //Cambiar un nuevo usuario existente
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo(); //Se debe  Crear un hijo
    clase.click_botonInscribeteCursos1eravez();
    clase.click_botonInscribeteCursos2davez("Inscríbete gratis");
    //
  });

  it("6_Demostrar que un hijo con membresia free no pueda Inscribirse a una clase que exceda sus 7 dias gratis.", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yenny@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    home.click_Flecha_Der();
    home.click_diaSchedule();
    cy.wait(3000);
    clase.click_InscribeteSchedule(); //Cambio de nombre del curso js
    clase.click_inscribeteGratis();
    cy.get(".container > .mb-5").should(
      "contain.text",
      "Escoge el camino hacia la genialidad"
    );
  });

  it("7_Verificar que un hijo con membresia Explorador no pueda inscribirse a  una clase que exceda sus 31 dias", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("angel@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_Membresia_Explorador();
    membresiahijos.comprarTipoDeMembresia("Mabel Diaz");
    home.click_LogoWonderly();
    cy.wait(3000);
    home.click_seccionEnVivo();
    membresiahijos.tipoDeMembresiaParaInscribir(); //Cambio de nombre del curso js
    clase.click_inscribeteGratis();
    cy.get(".container > .mb-5").should(
      "contain.text",
      "Escoge el camino hacia la genialidad"
    );
  });

  it("8_Probar que un hijo con membresia Inventor no pueda inscribirse a  una clase que exceda sus 31 dias", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("fernanda@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_Membresia_Inventor();
    membresiahijos.comprarTipoDeMembresia("Fer Gutierrez");
    home.click_LogoWonderly();
    cy.wait(3000);
    home.click_seccionEnVivo();
    membresiahijos.tipoDeMembresiaParaInscribir(); //Cambio de nombre del curso js
    clase.click_inscribeteGratis();
    cy.get(".container > .mb-5").should(
      "contain.text",
      "Escoge el camino hacia la genialidad"
    );
  });

  it("9_Comprobar que un hijo con membresia Genio no pueda inscribirse a  una clase que exceda sus 31 dias", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("amalia@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_Membresia_Genio();
    membresiahijos.comprarTipoDeMembresia("Cecilia Vargas");
    home.click_LogoWonderly();
    cy.wait(3000);
    home.click_seccionEnVivo();
    membresiahijos.tipoDeMembresiaParaInscribir(); //Cambio de nombre del curso js
    clase.click_inscribeteGratis();
    cy.get(".container > .mb-5").should(
      "contain.text",
      "Escoge el camino hacia la genialidad"
    );
  });
});
