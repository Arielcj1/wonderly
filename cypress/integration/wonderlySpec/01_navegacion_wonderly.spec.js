// Casos de prueba realizado por:
// Autor: Patrik Delgadillo y Yanina Cardozo
/// <reference types="cypress" />

import { Destrezas } from "../../paginas/Destrezas";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Perfil } from "../../paginas/Perfil";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe.skip("Home Page - UI", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfil = new Perfil();
  const destrezas = new Destrezas();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  it("1_Verificar que un usuario pueda Iniciar sesion en Wonderly", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com"); //Cambiar usuario
    ingresar.type_contrasena("12345"); //cambiar password
    ingresar.click_continuar();
    cy.contains("¿Quién está aprendiendo?").should("be.visible");
    perfil.buscar_hijo("Alex Cardozo");
  });

  it("2_Comprobar que redireccione al video de Wonderly en Accion", () => {
    home.botonWonderlyEnAccion();
    home.clickCerrarVideoWonderly();
  });

  it("3_Comprobar que un usuario pueda Ir a la pestaña 'Por que Wonderly'", () => {
    home.click_PorqueWonderly();
    cy.wait(4000);
  });

  it("4_Verificar que un usuario pueda ver el contenido de la pestaña Destrezas", () => {
    destrezas.clickDestrezas();
    cy.get("h2").should("be.visible");
  });
  it("5_Probar que un usuario pueda ver el contenido de la pestaña Cursos", () => {
    home.clickPestañaCursos();
    cy.get(".pt-3")
      .should("contain.text", "Elige los cursos que te apasionan")
      .should("be.visible");
  });

  it("6_Verificar que la opción de Membresías redireccione a un usuario sin registro a un formulario de asesor al cliente", () => {
    home.membresiasMenuAbajo();
    cy.get("#gform_47").should("be.visible");
  });

  it("7_Demostrar que un usuario Inicie sesion y pueda ir a la Membresia Explorador", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com"); //Cambiar ususario
    ingresar.type_contrasena("12345"); //Cambiar password
    ingresar.click_continuar();
    cy.wait(3000);
    home.click_LogoWonderly();
    home.click_Membresias();
    home.botonComprarMembresia();
    cy.wait(3000);
    cy.get(".my-5").should("be.visible");
  });

  it('8_Probar que un usuario pueda ver el contenido haciendo click en la materia "Programación" desde el home', () => {
    home.materiaProgramacionHome();
    cy.get("h2.mb-4")
      .should("contain.text", "Programación")
      .should("be.visible");
  });
  it('9_Demostrar que un usuario pueda ver el contenido haciendo click en la materia "Desarrollo de videojuegos" desde el home', () => {
    home.materiaDesarrolloDeVideoJuegosHome();
    cy.get("h2.mb-4")
      .should("contain.text", "Desarrollo de videojuegos")
      .should("be.visible");
  });

  it('10_Demostrar que un usuario pueda ver el contenido haciendo click en la materia "Robotica" desde el home', () => {
    home.materiaRoboticaHome();
    cy.get("h2.mb-4").should("contain.text", "Robótica").should("be.visible");
  });
  it('11_Demostrar que un usuario pueda ver el contenido haciendo click en la materia "Matemáticas" desde el home', () => {
    home.materiaMatematicasHome();
    cy.get("h2.mb-4")
      .should("contain.text", "Matemáticas")
      .should("be.visible");
  });
  it('12_Demostrar que un usuario pueda ver el contenido haciendo click en la materia "Inglés" desde el home', () => {
    home.materiaInglesHome();
    cy.get("h2.mb-4").should("contain.text", "Inglés").should("be.visible");
  });

  it("13_Verificar que se pueda presionar las flechas Derecha e Izquierda en Schedule", () => {
    home.click_Flecha_Der();
    home.click_Flecha_Izq();
  });
  it('14_Verificar que redireccione a Cursos cuando se presiona el boton " Comienza ahora" en Robotica', () => {
    destrezas.botonRobotica();
    destrezas.botonComenzarAhora();
    cy.get(".pt-3")
      .should("contain.text", "Elige los cursos que te apasionan")
      .should("be.visible");
  });
  it('15_Verificar que redireccione a Cursos cuando se presiona el boton " Comienza ahora" en Matematica', () => {
    destrezas.botonMatematicas();
    destrezas.botonComenzarAhora();
    cy.get(".pt-3")
      .should("contain.text", "Elige los cursos que te apasionan")
      .should("be.visible");
  });

  it('16_Verificar que redireccione a Cursos cuando se presiona el boton " Comienza ahora" en Programacion', () => {
    destrezas.botonProgramacion();
    destrezas.botonComenzarAhora();
    cy.get(".pt-3")
      .should("contain.text", "Elige los cursos que te apasionan")
      .should("be.visible");
  });

  it('17_Verificar que redireccione a Cursos cuando se presiona el boton " Comienza ahora" en Ingles', () => {
    destrezas.botonIngles();
    destrezas.botonComenzarAhora();
    cy.get(".pt-3")
      .should("contain.text", "Elige los cursos que te apasionan")
      .should("be.visible");
  });

  it("18_Comprobar que al presionar botones de desplazamiento se dirijan abajo y arriba", () => {
    home.clickDesplazarAbajo();
    home.clickDesplazarArriba();
    cy.get("h2").should("be.visible");
  });

  it("19_Comprobar que el usuario se encuentre en la pestaña de Impacto social", () => {
    home.impactoSocial();
    cy.get("h2").should("be.visible");
  });

  it("20_Verificar que el usuario se encuentre en el contenido de Prensa", () => {
    home.prensa();
    cy.get("h2")
      .should("contain.text", "Bienvenido a Wonderly")
      .should("be.visible");
  });

  // Desde la pestaña Destrezas menu Arriba
  it("21_Demostrar que al presionar el boton Mira el curso redireccione al contenido de Programacion", () => {
    destrezas.clickDestrezas();
    destrezas.botonMirarcursoProgramacion();
    cy.get("h2.mb-4")
      .should("contain.text", "Programación")
      .should("be.visible");
  });

  it("22_Demostrar que al presionar el boton Mira el curso redireccione al contenido de Robotica", () => {
    destrezas.clickDestrezas();
    destrezas.botonMirarCursoRobotica();
    cy.get("h2.mb-4").should("contain.text", "Robótica");
  });

  it("23_Demostrar que al presionar el boton Mira el curso redireccione a la Vista de desarrollo de Video Juegos", () => {
    destrezas.clickDestrezas();
    destrezas.botonMirarCursoDesarrolloVideoJuego();
    cy.log;
    cy.get("h2.mb-4").should("contain.text", "Desarrollo de videojuegos");
  });

  it("24_Demostrar que al presionar el boton Mira el curso redireccione al contenido de Ingles", () => {
    destrezas.clickDestrezas();
    destrezas.botonMirarCursoIngles();
    cy.get("h2.mb-4").should("contain.text", "Inglés");
  });

  it("25_Demostrar que al presionar el boton Mira el curso redireccione al contenido de Matematicas", () => {
    destrezas.clickDestrezas();
    destrezas.botonMirarCursoMatematicas();
    cy.get("h2.mb-4").should("contain.text", "Matemáticas");
  });
});
