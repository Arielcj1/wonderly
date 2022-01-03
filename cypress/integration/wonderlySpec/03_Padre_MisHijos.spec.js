/// <reference types="cypress" />
// Casos de prueba realizado por Patrik Delgadillo

import { Login } from "../../paginas/login";
import { MisHijos } from "../../paginas/Padre/MisHijos";
import { Home } from "../../paginas/Home";
import { Perfil } from "../../paginas/Padre/Perfil";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe.skip("Tablero Mis Hijos", () => {
  const login = new Login();
  const mishijos = new MisHijos();
  const home = new Home();
  const perfil = new Perfil();
  const registrarhijo = new RegistrarHijo();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    login.login_padre("padre17@gmail.com", "12345");
    perfil.click_mostrarSubmenu();
    perfil.click_perfil();
  });

  it("Verificar que el padre pueda Ir al Tablero Mis Hijos", () => {
    mishijos.click_Tablero_MisHijos();
  });

  it("Demostrar que el padre pueda registrar a su hijo desde Tablero Mis Hijos", () => {
    mishijos.click_Tablero_MisHijos();
    mishijos.click_RegistrarHijo();
    registrarhijo.type_nombreHijo("Hijo");
    registrarhijo.type_apellidoHijo("tres");
    registrarhijo.type_fechaNacimiento("02/02/2014");
    registrarhijo.click_registrar();
    cy.get(".alert").should("be.visible");
  });
});
