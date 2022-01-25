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

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("padre1@testtraining.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
  });

  it("01_Verificar que un padre pueda Ir a su Perfil", () => {
    perfil.click_perfil(); //Click en la opcion Cuenta del dropdown menu
  });

  it("02_Verificar que se muestra un mensaje de advertencia cuando no se completa todos los campos requeridos en su Perfil.", () => {
    //Ir al Perfil del padre
    perfil.click_perfil(); //Click en la opcion Cuenta del dropdown menu
    perfil.click_guardar();
    cy.get(".title").should("be.visible");
  });

  it("03_Verificar que un padre puede editar y completar su Perfil.", () => {
    //Ir al Perfil del padre
    perfil.click_perfil();
    //Completar datos necesarios del Padre
    perfil.type_fechaNacimiento("01/01/2000");
    perfil.type_numCelular("71092100");
    perfil.type_direccion("Av Ayacucho 1234");
    perfil.type_ciudad("Cochabamba");
    perfil.type_provincia("Cercado");
    perfil.type_codigoPostal("00122");
    perfil.type_pais("Argentina");
    perfil.seleccionar_materias();
    perfil.click_guardar();
    cy.get(".alert").should("be.visible");
  });

  it("04_Comprobar que un padre pueda registrar a un hijo desde el login-hijo", () => {
    cy.get(".text-center > .btn").click();
    registrarhijo.type_nombreHijo("Hijo");
    registrarhijo.type_apellidoHijo("Uno");
    registrarhijo.type_fechaNacimiento("01/01/2010");
    registrarhijo.click_registrar();
    cy.get(".alert").should("be.visible");
  });

  it("05_Verificar que el padre pueda Ir al Tablero Mis Hijos", () => {
    perfil.click_perfil();
    mishijos.click_Tablero_MisHijos();
  });

  it("06_Demostrar que un padre pueda registrar a un hijo desde el tablero 'Mis hijos' ", () => {
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

  it("07_Demostrar que un padre pueda registrar a un hijo desde el menú en Perfiles", () => {
    perfil.click_perfil();
    cy.wait(2000);
    perfil.click_perfiles();
    cy.wait(2000);
    perfiles.click_registrarHijo();
    registrarhijo.type_nombreHijo("Hijo");
    registrarhijo.type_apellidoHijo("Perfiles");
    registrarhijo.type_fechaNacimiento("01/01/2012");
    registrarhijo.click_registrar();
    cy.get(".alert").should("be.visible");
  });

  it("08_Verificar que un padre pueda registrar a un hijo cuando se inscribe a un curso en el schedule", () => {
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

  it("09_Verificar que un padre pueda registrar a un hijo cuando se inscribe a un curso desde la pestaña Cursos", () => {
    home.click_pestañaCursos();
    registrarhijo.click_inscribeteCurso();
    registrarhijo.click_botonInscribeteGratis();
    perfiles.click_registrarHijo();
    registrarhijo.type_nombreHijo("Hijo");
    registrarhijo.type_apellidoHijo("Curso");
    registrarhijo.type_fechaNacimiento("01/01/2012");
    registrarhijo.click_registrar();
    cy.get(".alert").should("be.visible");
  });

  it("10_Comprobar que un padre pueda registrar a mas de un hijo desde el formulario Agregar nuevo hijo", () => {
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

  it("11_Probar que un padre pueda eliminar el registro de un hijo desde el formulario Agregar nuevo hijo", () => {
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
