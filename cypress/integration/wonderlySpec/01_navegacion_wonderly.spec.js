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

describe("Home Page - UI", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfil = new Perfil();
  const destrezas = new Destrezas();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  it("1_Verificar que un usuario pueda Iniciar sesion", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com"); //Cambiar usuario
    ingresar.type_contrasena("abcABC123"); //cambiar password
    ingresar.click_continuar();
    cy.contains("¿Quién está aprendiendo?").should("be.visible");
    perfil.buscar_hijo("Alex Cardozo");
  });

  it("2_Comprobar que redireccione al video de Wonderly en Accion", () => {
    home.botonWonderlyEnAccion();
    home.clickCerrarVideoWonderly();
  });
  it.skip("2_1_Demostrar que un usuario pueda ver los cursos de la seccion de EN VIVO", () => {
    home.click_seccionEnVivo();
    home.click_Flecha_Der();
  });

  it("3_Comprobar que un usuario pueda Ir a la pestaña 'Por que Wonderly'", () => {
    home.click_PorqueWonderly();
    cy.wait(4000);
  });

  it("4_Verificar que se pueda presionar las flechas Derecha e Izquierda en Schedule", () => {
    // home.click_seccionEnVivo();
    home.click_Flecha_Der();
    home.click_Flecha_Izq();
  });

  it("5_Verificar que un usuario pueda ver el contenido de la pestaña Destrezas", () => {
    destrezas.clickDestrezas();
    cy.get("h2").should("be.visible");
  });

  it("6_Probar que un usuario pueda ver el contenido de la pestaña Cursos", () => {
    home.clickPestañaCursos();
    cy.get(".header-cursos-page > h3.text-center").should("be.visible");
  });

  it("7_Comprobar que al presionar botones de desplazamiento se dirijan abajo y arriba", () => {
    home.clickDesplazarAbajo();
    home.clickDesplazarArriba();
    cy.get("h2").should("be.visible");
  });

  it.skip("8_Verificar que un usuario pueda seleccionar la fecha del Schedule para ver los cursos", () => {
    home.click_seccionEnVivo();
    home.click_dia();
    cy.wait(5000);
  });

  it.skip("9_Comprobar que un usuario pueda Ir al boton Explorar nuestras destrezas", () => {
    home.click_Destrezas2();
    cy.wait(5000);
  });

  it("11_Demostrar que un usuario Inicie sesion y pueda ir a la Membresia Explorador", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com"); //Cambiar ususario
    ingresar.type_contrasena("abcABC123"); //Cambiar password
    ingresar.click_continuar();
    cy.wait(3000);
    home.click_LogoWonderly();
    home.click_Membresias();
    home.botonComprarMembresia();
    cy.wait(3000);
    cy.get(".my-5").should("be.visible");
  });

  // Navegacion Menu Abajo
  it("12_Comprobar que el usuario se encuentre en la pestaña de Impacto social", () => {
    home.impactoSocial();
    cy.get("h2").should("be.visible");
  });

  it("13_Verificar que el usuario se encuentre en el contenido de Prensa", () => {
    home.prensa();
    cy.get("h2")
      .should("contain.text", "Bienvenido a Wonderly")
      .should("be.visible");
  });

  it("Verificar que redireccione al menu de Membresias desde la pagina de Wonderly", () => {
    home.membresiasMenuAbajo();
    cy.get(".content > .container > .mb-5").should("be.visible");
    cy.wait(2000);
  });

  // Desde la pestaña Destrezas menu Arriba
  it.skip("19_Demostrar que redireccione al contenido de Programacion", () => {
    destrezas.clickDestrezas();

    destrezas.botonMirarcursoProgramacion();
    cy.get("h2.mb-4")
      .should("contain.text", "Programación")
      .should("be.visible");
  });

  it.skip("20_Demostrar que al presionar el boton Mira el curso redireccione al contenido de Robotica", () => {
    destrezas.clickDestrezas();
    destrezas.botonMirarCursoRobotica();
    cy.get("h2.mb-4").should("contain.text", "Robótica");
  });

  it.skip("21_Demostrar que al presionar el boton Mira el curso redireccione al contenido de Ingles", () => {
    destrezas.clickDestrezas();
    destrezas.botonMirarCursoIngles();
    cy.get("h2.mb-4").should("contain.text", "Inglés");
  });

  it.skip("22_Demostrar que al presionar el boton Mira el curso redireccione al contenido de Matematicas", () => {
    destrezas.clickDestrezas();
    destrezas.botonMirarCursoMatematicas();
    cy.get("h2.mb-4").should("contain.text", "Matemáticas");
  });

  it.skip("23_Demostrar que al presionar el boton Mira el curso redireccione a la Vista de desarrollo de Video Juegos", () => {
    destrezas.clickDestrezas();
    destrezas.botonMirarCursoDesarrolloVideoJuego();
    cy.log;
    cy.get("h2.mb-4").should("contain.text", "Desarrollo de videojuegos");
  });

  it('24_Verificar que redireccione a los cursos cuando se presiona el boton " Comenzar ahora" en Robotica', () => {
    destrezas.botonRobotica();
    destrezas.botonComenzarAhora();
    cy.get(".header-cursos-page > h3.text-center").should("be.visible");
  });
  it('24_Verificar que redireccione a los cursos cuando se presiona el boton " Comenzar ahora" en Robotica', () => {
    destrezas.botonRobotica();
    destrezas.botonComenzarAhora();
    cy.get(".header-cursos-page > h3.text-center").should("be.visible");
  });

  it('25_Verificar que redireccione a los cursos cuando se presiona el boton " Comenzar ahora" en Matematica', () => {
    destrezas.botonMatematicas();
    destrezas.botonComenzarAhora();
    cy.get(".header-cursos-page > h3.text-center").should("be.visible");
  });

  it('26_Verificar que redireccione a los cursos cuando se presiona el boton " Comenzar ahora" en Programacion', () => {
    destrezas.botonProgramacion();
    destrezas.botonComenzarAhora();
    cy.get(".header-cursos-page > h3.text-center").should("be.visible");
  });

  it('27_Verificar que redireccione a los cursos cuando se presiona el boton " Comenzar ahora" en Ingles', () => {
    destrezas.botonIngles();
    destrezas.botonComenzarAhora();
    cy.get(".header-cursos-page > h3.text-center").should("be.visible");
  });
});
