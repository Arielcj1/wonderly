// Casos de prueba realizado por:
// Autor: Yanina Cardozo
/// <reference types="cypress" />

import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Clase } from "../../paginas/Hijo/Clase";
import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";
import { Autopayment } from "../../paginas/Hijo/Autopayment";
import { MisHijos } from "../../paginas/Hijo/MisHijos";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";
import { Perfil } from "../../paginas/Profesor/Perfil";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- clases hijos", () => {
  const perfilhijo = new PerfilHijo();
  const ingresar = new Ingresar();
  const home = new Home();
  const clase = new Clase();
  const claseshijo = new ClasesHijo();
  const mishijos = new MisHijos();
  const autopayment = new Autopayment();
  const registrarhijo = new RegistrarHijo();
  const perfil = new Perfil();
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

  //CLASES

  it("1_Comprobar que un hijo puede navegar por el detalle de un curso desde la pagina principal", function () {
    perfil.click_salirDelMenu();
    home.click_IniciaSesion();
    cy.get("#input_1").type(this.variables.correoPadre1); //Cambiar el correo padre nuevo
    ingresar.type_contrasena("12345"); //Cambiar la constraseña del padre nuevo que le corresponde
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    var a = [1, 2, 3, 4];
    a.forEach((position) => {
      registrarhijo.verificarExistenciaMultiple(
        ".site-container",
        "#slick-slide0" +
          position +
          " > div > div > div > div > div.course-body.cursos-detail > div > div.w-50.mr-1.text-center > a",
        "verificador15",
        position
      );
    });
    cy.fixture("verificadores/verificador15").then((elementoGuardadoJson) => {
      this.elementoGuardadoJson = elementoGuardadoJson;
      cy.get(
        "#slick-slide0" +
          this.elementoGuardadoJson.position +
          " > div > div > div > div > div.course-body.cursos-detail > div > div.w-50.mr-1.text-center > a"
      ).click();

      claseshijo.botonPreguntaWhatsapp();
      claseshijo.aprendizajeProyecto();
      cy.get(".col-md-7 > .title").should("be.visible");
    });
  });

  it("2_Comprobar que un hijo pueda inscribirse a una clase entrando al detalle de la clase desde la pagina principal", function () {
    perfil.click_salirDelMenu();
    home.click_IniciaSesion();
    cy.get("#input_1").type(this.variables.correoPadre1); //Cambiar el correo padre nuevo
    ingresar.type_contrasena("12345"); //Cambiar la constraseña del padre nuevo que le corresponde
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    var a = [1, 2, 3, 4];
    a.forEach((position) => {
      registrarhijo.verificarExistenciaMultiple(
        ".site-container",
        "#slick-slide0" +
          position +
          " > div > div > div > div > div.course-body.cursos-detail > div > div.w-50.mr-1.text-center > a",
        "verificador16",
        position
      );
    });
    cy.fixture("verificadores/verificador16").then((elementoGuardadoJson) => {
      this.elementoGuardadoJson = elementoGuardadoJson;
      cy.get(
        "#slick-slide0" +
          this.elementoGuardadoJson.position +
          " > div > div > div > div > div.course-body.cursos-detail > div > div.w-50.mr-1.text-center > a"
      ).click();
      // claseshijo.botonInscribeteGratisEntraClase();
      claseshijo.botonInscribeteGratis();
    });
  });

  it("3_Comprobar que el hijo pueda ver el counter de la clase", function () {
    perfil.click_salirDelMenu();
    home.click_IniciaSesion();
    cy.get("#input_1").type(this.variables.correoPadre1);
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    cy.wait(3000);
    clase.click_nombreDeLaClase();
    claseshijo.verificarCounter();
  });

  it("4_Verificar que un hijo pueda ingresar al detalle de un curso desde la pestaña Cursos", function () {
    perfilhijo.click_seleccionarHijo();
    home.clickPestañaCursos();
    cy.wait(2000);
    var a = [1, 2, 3, 4];
    a.forEach((position) => {
      registrarhijo.verificarExistenciaMultiple(
        ".site-container",
        "div:nth-child(" +
          position +
          ") > div > div > div.course-body.cursos-detail > div > div.w-50.mr-1.text-center > a",
        "verificador12",
        position
      );
    });
    cy.fixture("verificadores/verificador12").then((elementoGuardadoJson) => {
      this.elementoGuardadoJson = elementoGuardadoJson;
      cy.get(
        "div:nth-child(" +
          this.elementoGuardadoJson.position +
          ") > div > div > div.course-body.cursos-detail > div > div.w-50.mr-1.text-center > a"
      ).click();
    });
    // claseshijo.botonInscribeteCursos();
    claseshijo.botonPreguntaWhatsapp();
    claseshijo.aprendizajeProyecto();
    cy.get(".col-md-7 > .title").should("be.visible");
  });

  it("5_Comprobar que el hijo pueda ver el detalle de una clase desde Clases Hijo", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    cy.wait(3000);
    clase.click_nombreDeLaClase();
    cy.get("h4").should("be.visible");
  });

  it("6_Verificar que un hijo pueda ingresar a la clase si esta por empezar", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    claseshijo.clickBotonUnirmeClase("Unirse a clase");
  });

  // AUTOPAYMENT:

  it("7_Verificar que pueda Activar el Autopayment desde el tablero Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    autopayment.verificarAutopaymentActivar();
  });

  it("8_Verificar que pueda Cancelar el Autopayment desde el tablero Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    autopayment.verificarAutopaymentCancelar();
  });

  it.skip("7_Verificar que pueda Actualizar Membresia Genio, Inventor y Explorador desde el tablero Mis hijos", () => {
    cy.wait(2000);
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    autopayment.ActualizarMembresia();
  });
});
