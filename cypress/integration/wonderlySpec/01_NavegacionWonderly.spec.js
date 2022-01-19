/// <reference types="cypress" />
// Casos de prueba realizado por Patrik Delgadillo y Yanina Cardozo

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
    ingresar.type_Correo("josemunoz@gmail.com");    //Cambiar usuario
    ingresar.type_contrasena("123456");             //cambiar password
    ingresar.click_continuar();
    cy.contains("¿Quién está aprendiendo?").should("be.visible");
    perfil.buscar_hijo("Juan Muñoz");
  });

  it("2_Demostrar que un usuario pueda ver los cursos de la seccion de EN VIVO", () => {
    home.click_seccionEnVivo();
    home.click_Flecha_Der();
  });

  it("3_Comprobar que un usuario pueda Ir a la pestaña Por que Wonderly", () => {
    home.click_PorqueWonderly();
    cy.wait(4000);
  });

  it("4_Verificar que se pueda presionar las flechas Derecha e Izquierda en Schedule", () => {
    home.click_seccionEnVivo();
    home.click_Flecha_Der();
    cy.wait(4000);
    home.click_Flecha_Izq();
    cy.wait(4000);
  });

  it("5_Verificar que un usuario pueda ver el contenido de la pestaña Destrezas", () => {
    home.click_Destrezas();
  });

  it("6_Probar que un usuario pueda ver el contenido de la pestaña Cursos", () => {
    home.click_pestañaCursos();
  });

  it("7_Comprobar que al presionar botones de desplazamiento se dirijan abajo y arriba", () => {
    home.click_DesplazarAbajo();
    cy.wait(3000);
    home.click_DesplazarArriba();
    cy.wait(3000);
  });

  it("8_Verificar que un usuario pueda seleccionar la fecha del Schedule para ver los cursos", () => {
    home.click_seccionEnVivo();
    home.click_dia();
    cy.wait(5000);
  });

  it("9_Comprobar que un usuario pueda Ir al boton Explorar nuestras destrezas", () => {
    home.click_Destrezas2();
    cy.wait(5000);
  });

  it("11_Demostrar que un usuario Inicie sesion y pueda ir a las Membresias Explorador", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("josemunoz@gmail.com");    //CAmbiar ususario
    ingresar.type_contrasena("123456");             //Cambiar password
    ingresar.click_continuar();
    cy.wait(3000);
    home.click_LogoWonderly();
    home.click_Membresias();
    home.click_Membresia_Explorador();
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

  it("14_Verificar que el usuario se encuentre en la materia Robotica desde el menu Destrezas", () => {
    home.menu_Robotica();
    cy.get("h2.mb-4").should("contain.text", "Robótica");
  });

  it("15_Verificar que el usuario  se encuentre en la materia Programacion desde el menu Destrezas", () => {
    home.menu_Programacion();
    cy.get("h2.mb-4")
      .should("contain.text", "Programación")
      .should("be.visible");
  });

  it("16_Verificar que el usuario  se encuentre en la materia Desarrollo Video Juegos desde el menu Destrezas", () => {
    home.menu_DesarrolloVideoJuegos();
    cy.get("h2.mb-4")
      .should("contain.text", "Desarrollo de videojuegos")
      .should("be.visible");
  });

  it("17_Verificar que el usuario se encuentre en la materia Matematicas desde el menu Destrezas", () => {
    home.menu_Matematicas();
    cy.get("h2.mb-4")
      .should("contain.text", "Matemáticas")
      .should("be.visible");
  });

  it("18_Verificar que el usuario  se encuentre en la materia Ingles desde el menu Destrezas", () => {
    home.menu_Ingles();
    cy.get("h2.mb-4").should("contain.text", "Inglés").should("be.visible");
  });

  // Boton "Mira el curso" desde la pestaña Destrezas menu Arriba

  it("19_Demostrar que al presionar el boton Mira el curso redireccione al contenido de Programacion", () => {
    home.click_Destrezas();
    destrezas.botonMirarcursoProgramacion();
    cy.get("h2.mb-4")
      .should("contain.text", "Programación")
      .should("be.visible");
  });

  it("20_Demostrar que al presionar el boton Mira el curso redireccione al contenido de Robotica", () => {
    home.click_Destrezas();
    destrezas.botonMirarCursoRobotica();
    cy.get("h2.mb-4").should("contain.text", "Robótica");
  });

  it("21_Demostrar que al presionar el boton Mira el curso redireccione al contenido de Ingles", () => {
    home.click_Destrezas();
    destrezas.botonMirarCursoIngles();
    cy.get("h2.mb-4").should("contain.text", "Inglés");
  });

  it("22_Demostrar que al presionar el boton Mira el curso redireccione al contenido de Matematicas", () => {
    home.click_Destrezas();
    destrezas.botonMirarCursoMatematicas();
    cy.get("h2.mb-4").should("contain.text", "Matemáticas");
  });

  it("23_Demostrar que al presionar el boton Mira el curso redireccione a la Vista de desarrollo de Video Juegos", () => {
    home.click_Destrezas();
    destrezas.botonMirarCursoDesarrolloVideoJuego();
    cy.log;
    cy.get("h2.mb-4").should("contain.text", "Desarrollo de videojuegos");
  });

  it('24_Verificar que redireccione a los cursos cuando se presiona el boton " Comenzar ahora" en Robotica', () => {
    home.click_Destrezas();
    destrezas.botonMirarCursoRobotica();
    destrezas.botonComenzarAhora();
  });

  it('25_Verificar que redireccione a los cursos cuando se presiona el boton " Comenzar ahora" en Matematica', () => {
    home.click_Destrezas();
    destrezas.botonMirarCursoMatematicas();
    destrezas.botonComenzarAhora();
  });

  it('26_Verificar que redireccione a los cursos cuando se presiona el boton " Comenzar ahora" en Programacion', () => {
    home.click_Destrezas();
    destrezas.botonMirarcursoProgramacion();
    destrezas.botonComenzarAhora();
  });

  it('27_Verificar que redireccione a los cursos cuando se presiona el boton " Comenzar ahora" en Ingles', () => {
    home.click_Destrezas();
    destrezas.botonMirarCursoIngles();
    destrezas.botonComenzarAhora();
  });
});
