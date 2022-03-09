/// <reference types="cypress" />
// Casos de prueba realizado por Patrik Delgadillo
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { AgregarNuevoHijo } from "../../paginas/Padre/AgregarNuevoHijo";
import { MisHijos } from "../../paginas/Padre/MisHijos";
import { Perfil } from "../../paginas/Padre/Perfil";
import { Perfiles } from "../../paginas/Padre/Perfiles";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Perfil Padre y Registro de hijos", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfil = new Perfil();
  const perfiles = new Perfiles();
  const registrarhijo = new RegistrarHijo();
  const mishijos = new MisHijos();
  const agregarnuevohijo = new AgregarNuevoHijo();

  beforeEach(function () {
    cy.visit("https://developers.learnwonderly.com/");

    cy.fixture("variables/variablesUsuario").then((variables) => {
      this.variables = variables;
      home.click_IniciaSesion();
      cy.get("#input_1").type(this.variables.correoPadre1);
      ingresar.type_contrasena("12345");
      ingresar.click_continuar();
    });
  });

  it("1_Comprobar que un padre pueda registrar a un hijo desde el login-hijo", () => {
    cy.get(".text-center > .btn").click();
    registrarhijo.type_nombreHijo("Hijo");
    registrarhijo.type_apellidoHijo("Uno");
    registrarhijo.type_fechaNacimiento("01/01/2010");
    registrarhijo.click_registrar();
    cy.get(".alert").should("be.visible");
  });

  it("2_Demostrar que un padre pueda registrar a un hijo desde el tablero 'Mis hijos' ", () => {
    perfil.click_perfil();
    //Registrar nuevo hijo
    mishijos.click_Tablero_MisHijos();
    mishijos.click_RegistrarHijo();
    registrarhijo.type_nombreHijo("Hijo");
    registrarhijo.type_apellidoHijo("Dos");
    registrarhijo.type_fechaNacimiento("01/01/2012");
    registrarhijo.click_registrar();
    cy.get(".alert").should("be.visible");
  });

  it("3_Demostrar que un padre pueda registrar a un hijo desde el menú en Perfiles", () => {
    // perfil.click_perfil();
    cy.wait(2000);
    perfil.clickPerfiles();
    cy.wait(2000);
    perfiles.click_registrarHijo();
    registrarhijo.type_nombreHijo("Hijo");
    registrarhijo.type_apellidoHijo("Perfiles");
    registrarhijo.type_fechaNacimiento("01/01/2012");
    registrarhijo.click_registrar();
    cy.get(".alert").should("be.visible");
  });

  it.skip("Verificar que un padre pueda registrar a un hijo cuando se inscribe a un curso en el schedule", () => {
    home.click_LogoWonderly();
    cy.get("#vivo-tab").click();
    registrarhijo.click_botonInscribete();
    registrarhijo.click_botonInscribeteGratis();
    perfiles.click_registrarHijo();
    registrarhijo.type_nombreHijo("Hijo");
    registrarhijo.type_apellidoHijo("Schedule");
    registrarhijo.type_fechaNacimiento("01/01/2012");
    registrarhijo.click_registrar();
    cy.get(".alert").should("be.visible");
  });

  it("4_Verificar que un padre pueda registrar a un hijo cuando se inscribe a un curso desde la pestaña Cursos", function () {
    home.clickPestañaCursos();

    var a = [1, 2, 3, 4];
    a.forEach((position) => {
      registrarhijo.verificarExistenciaMultiple(
        ".site-container",
        "div:nth-child(" +
          position +
          ") > div > div > div.course-body.cursos-detail > div > div.w-50.mr-1.text-center > a",
        "verificador10",
        position
      );
    });
    cy.fixture("verificadores/verificador10").then((elementoGuardadoJson) => {
      this.elementoGuardadoJson = elementoGuardadoJson;
      cy.get(
        "div:nth-child(" +
          this.elementoGuardadoJson.position +
          ") > div > div > div.course-body.cursos-detail > div > div.w-50.mr-1.text-center > a"
      ).click();
    });

    registrarhijo.click_botonInscribeteGratis();
    perfiles.click_registrarHijo();
    registrarhijo.type_nombreHijo("Hijo");
    registrarhijo.type_apellidoHijo("Curso");
    registrarhijo.type_fechaNacimiento("01/01/2012");
    registrarhijo.click_registrar();
    cy.get(".alert").should("be.visible");
  });

  it("5_Comprobar que un padre pueda registrar a mas de un hijo desde el formulario Agregar nuevo hijo", () => {
    home.click_LogoWonderly();
    cy.visit(
      "https://developers.learnwonderly.com/registrar-padre/agregar-nuevo-hijo/"
    );
    agregarnuevohijo.type_Birthday("01/01/2016"); //dd/mm/yyyy
    agregarnuevohijo.type_NombreHijo("Hijo1");
    agregarnuevohijo.type_ApellidoHijo("Uno1");
    agregarnuevohijo.click_AgregarHijo();
    agregarnuevohijo.type_Birthday2("01/01/2016");
    agregarnuevohijo.type_NombreHijo2("Hijo2");
    agregarnuevohijo.type_ApellidoHijo2("Dos2");
    agregarnuevohijo.botonExploraCursos();
    cy.contains("¿Quién está aprendiendo?").should("be.visible");
  });

  it("6_Probar que un padre pueda eliminar el registro de un hijo desde el formulario Agregar nuevo hijo", () => {
    home.click_LogoWonderly();
    cy.visit(
      "https://developers.learnwonderly.com/registrar-padre/agregar-nuevo-hijo/"
    );
    agregarnuevohijo.type_Birthday("01/01/2016"); //dd/mm/yyyy
    agregarnuevohijo.type_NombreHijo("Hijo1");
    agregarnuevohijo.type_ApellidoHijo("Uno1");
    agregarnuevohijo.click_AgregarHijo();
    agregarnuevohijo.type_Birthday2("01/01/2016");
    agregarnuevohijo.type_NombreHijo2("Hijo2");
    agregarnuevohijo.type_ApellidoHijo2("Dos2");
    agregarnuevohijo.click_AgregarHijo();
    agregarnuevohijo.eliminarHijo2();
    cy.wait(2000);
  });
});
