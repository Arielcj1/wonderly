/// <reference types="cypress" />
// Casos de prueba realizado por Patrik Delgadillo
import { Cursos } from "../../paginas/Cursos";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { AgregarNuevoHijo } from "../../paginas/Padre/AgregarNuevoHijo";
import { MisHijos } from "../../paginas/Padre/MisHijos";
import { Perfil } from "../../paginas/Padre/Perfil";
import { Perfiles } from "../../paginas/Padre/Perfiles";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";
import { Registro } from "../../paginas/Registro";
import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";
import { testCaseConfig } from "../../helpers/helpers";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe.skip("Perfil Padre y Registro de hijos", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfil = new Perfil();
  const perfiles = new Perfiles();
  const registrarhijo = new RegistrarHijo();
  const mishijos = new MisHijos();
  const agregarnuevohijo = new AgregarNuevoHijo();
  const cursos = new Cursos();
  const registro = new Registro();
  const claseshijo = new ClasesHijo();

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
    perfiles.botonAñadirhijoPV();
    cy.wait(2000);
    registrarhijo.type_nombreHijo("Hijo");
    registrarhijo.type_apellidoHijo("Uno");
    registrarhijo.type_fechaNacimiento("01/01/2010");
    registrarhijo.click_registrar();
    cy.get(".alert").should("be.visible");
  });

  it("2_Demostrar que un padre pueda registrar a un hijo desde el tablero 'Mis hijos' ", () => {
    perfil.click_perfil();
    mishijos.click_Tablero_MisHijos();
    mishijos.click_RegistrarHijo();
    registrarhijo.type_nombreHijo("Hijo");
    registrarhijo.type_apellidoHijo("Dos");
    registrarhijo.type_fechaNacimiento("01/01/2012");
    registrarhijo.click_registrar();
    cy.get(".alert").should("be.visible");
  });

  it("3_Demostrar que un padre pueda registrar a un hijo desde el menú en Perfiles", () => {
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

  it("4_Verificar que un padre pueda registrar a un hijo cuando se inscribe a un curso desde el HOME", () => {
    home.click_LogoWonderly();
    cursos.clickEnVivo();
    cursos.botonComienzaEnVivoUsuario();
    cursos.segundoBotonInscribete();
    perfiles.click_registrarHijo();
    registrarhijo.type_nombreHijo("Hijo");
    registrarhijo.type_apellidoHijo("Schedule1");
    registrarhijo.type_fechaNacimiento("01/01/2012");
    registrarhijo.click_registrar();
    cy.get(".alert").should("be.visible");
  });

  it("5_Verificar que un padre pueda registrar a un hijo cuando se inscribe a un curso desde la pestaña Cursos", () => {
    home.click_LogoWonderly();
    home.clickPestañaCursos();
    cursos.clickEnVivo();
    cursos.botonComienzaCursos();
    cursos.segundoBotonInscribete();
    perfiles.click_registrarHijo();
    registrarhijo.type_nombreHijo("Hijo");
    registrarhijo.type_apellidoHijo("Schedule2");
    registrarhijo.type_fechaNacimiento("01/01/2012");
    registrarhijo.click_registrar();
    cy.get(".alert").should("be.visible");
  });

  it("6_Comprobar que un padre pueda registrar a mas de un hijo desde el formulario Agregar nuevo hijo", () => {
    home.click_LogoWonderly();
    cy.visit(
      "https://developers.learnwonderly.com/registrar-padre/agregar-nuevo-hijo/"
    );
    agregarnuevohijo.type_Birthday("01/01/2016"); //dd/mm/yyyy
    agregarnuevohijo.type_NombreHijo("prueba");
    agregarnuevohijo.type_ApellidoHijo("uno");
    agregarnuevohijo.click_AgregarHijo();
    agregarnuevohijo.type_Birthday2("01/01/2016");
    agregarnuevohijo.type_NombreHijo2("prueba");
    agregarnuevohijo.type_ApellidoHijo2("dos");
    cy.get(".alert").should("be.visible");
    agregarnuevohijo.botonExploraCursos();
    cy.contains("¿Quién está aprendiendo?").should("be.visible");
  });

  it("7_Probar que un padre pueda eliminar el registro de un hijo desde el formulario Agregar nuevo hijo", () => {
    home.click_LogoWonderly();
    cy.visit(
      "https://developers.learnwonderly.com/registrar-padre/agregar-nuevo-hijo/"
    );
    agregarnuevohijo.type_Birthday("01/01/2016"); //dd/mm/yyyy
    agregarnuevohijo.type_NombreHijo("eliminar");
    agregarnuevohijo.type_ApellidoHijo("hijo1");
    agregarnuevohijo.click_AgregarHijo();
    agregarnuevohijo.type_Birthday2("01/01/2016");
    agregarnuevohijo.type_NombreHijo2("eliminar");
    agregarnuevohijo.type_ApellidoHijo2("hijo2");
    agregarnuevohijo.click_AgregarHijo();
    agregarnuevohijo.eliminarHijo2();
    cy.wait(2000);
    cy.get(".alert").should("be.visible");
  });
  it("8_Verificar que un padre pueda registrar a un hijo cuando ingresa al link de una clase", () => {
    home.clickSalirHijo();
    home.boton14diasGratis();
    registro.type_nombre("Belen");
    registro.type_apellidos("BB");
    registro.type_correo(testCaseConfig.correoPadre4);
    registro.type_contrasenia("12345");
    registro.type_numero("65754285");
    registro.click_siguiente();
    home.click_LogoWonderly();
    cursos.clickEnVivo();
    cursos.botonComienzaEnVivoUsuario();
    claseshijo.aprendizajeProyecto();
    claseshijo.clickLinks();
    claseshijo.verificarBotonInscribeteCurso("Inscríbete gratis al curso");
    // cy.get(".form_body > .modal-body").should("be.visible");
    registrarhijo.typeNombreHijo("Hijo");
    registrarhijo.typeApellidoHijo("Link");
    registrarhijo.typeFechaNacimiento("01/01/2012");
    registrarhijo.botonRegistrarHijo();
    cy.get("#menu-item-6738 > .nav-link")
      .should("contain.text", "Hijo Link")
      .should("be.visible");
    cy.wait(2000);
  });
  it("9_Verificar que un padre pueda registrar a un hijo cuando ingresa a un curso On demand", () => {
    home.clickSalirHijo();
    home.boton14diasGratis();
    registro.type_nombre("Maria");
    registro.type_apellidos("MM");
    registro.type_correo(testCaseConfig.correoPadre5);
    registro.type_contrasenia("12345");
    registro.type_numero("65754285");
    registro.click_siguiente();
    home.click_LogoWonderly();
    cursos.clickOnDemand();
    cursos.botonComienzaOndemandUsuario();
    cursos.botonEntraPrimeraClase();
    // perfiles.click_registrarHijo();
    registrarhijo.typeNombreHijo("Hijo");
    registrarhijo.typeApellidoHijo("Link");
    registrarhijo.typeFechaNacimiento("01/01/2012");
    registrarhijo.botonRegistrarHijo();
    cy.get(".welcome").should("be.visible");
  });

  it("10_Verificar que un padre no pueda registrar a un hijo que ya existe", () => {
    perfiles.botonAñadirOtroHijo();
    registrarhijo.type_nombreHijo("Hijo");
    registrarhijo.type_apellidoHijo("Perfiles");
    registrarhijo.type_fechaNacimiento("01/01/2012");
    registrarhijo.click_registrar();
    cy.get("#validation_message_24_14").should("be.visible");
    cy.get(".title").should("be.visible");
  });
});
