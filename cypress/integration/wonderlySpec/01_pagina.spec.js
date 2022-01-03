/// <reference types="cypress" />
// Casos de prueba realizado por Patrik Delgadillo

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

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  it("Verificar que un usuario pueda Iniciar sesion", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("josemunoz@gmail.com");
    ingresar.type_contrasena("123456");
    ingresar.click_continuar();
    cy.contains("¿Quién está aprendiendo?").should("be.visible");
    perfil.buscar_hijo("Juan Muñoz");
  });

  it("Comprobar que un usuario pueda Ir a la pestaña Por que Wonderly", () => {
    home.click_PorqueWonderly();
    cy.wait(4000);
  });

  it("Verificar que se pueda presionar las flechas Derecha e Izquierda en Schedule", () => {
    home.click_Flecha_Der();
    cy.wait(4000);
    home.click_Flecha_Izq();
    cy.wait(4000);
  });

  it("Comprobar que un usuario pueda Ir a Destrezas", () => {
    home.click_Destrezas();
  });

  it("Verificar que la pestaña Cursos redirreccione a la vista de cursos", () => {
    home.click_pestañaCursos();
  });

  it("Comprobar que al presionar botones de desplazamiento se dirijan abajo y arriba", () => {
    home.click_DesplazarAbajo();
    cy.wait(3000);
    home.click_DesplazarArriba();
    cy.wait(3000);
  });

  it("Verificar que se pueda seleccionar un dia en Schedule", () => {
    home.click_dia();
    cy.wait(5000);
  });

  it("Comprobar que un usuario pueda Ir al boton Explorar nuestras destrezas", () => {
    home.click_Destrezas2();
    cy.wait(5000);
  });

  it("Demostrar que un usuario Inicie sesion y pueda ir a las Membresias Explorador", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("josemunoz@gmail.com");
    ingresar.type_contrasena("123456");
    ingresar.click_continuar();
    cy.wait(3000);
    home.click_LogoWonderly();
    home.click_Membresias();
    home.click_Membresia_Explorador();
    cy.wait(3000);
    cy.get(".my-5").should("be.visible");
  });
});
