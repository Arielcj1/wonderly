// Casos de prueba realizado por:
// Autor: Yanina Cardozo
///<reference types="cypress"/>

import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";
import { MembresiasHijo } from "../../paginas/Hijo/MembresiasHijo";
import { MisHijos } from "../../paginas/Hijo/MisHijos";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("MEMBRESIAS", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfilhijo = new PerfilHijo();
  const membresiahijos = new MembresiasHijo();
  const mishijos = new MisHijos();
  const registrarhijo = new RegistrarHijo();
  const claseshijo = new ClasesHijo();

  beforeEach(function () {
    cy.visit("https://developers.learnwonderly.com/");
    cy.fixture("variables/variablesUsuario").then((variables) => {
      this.variables = variables;
      home.click_IniciaSesion();
      cy.get("#input_1").type(this.variables.correoPadre1);
      ingresar.type_contrasena("12345");
      ingresar.click_continuar();
      // perfilhijo.click_seleccionarHijo();
    });
  });

  it("1_Comprobar que un hijo compre una membresia Explorador y pueda inscribirse a una clase desde la pagina principal", function () {
    home.clickSalirHijo();
    home.click_IniciaSesion();
    ingresar.type_Correo("alfredoteran@testtraining.com"); //Cambiar usuario Padre
    ingresar.type_contrasena("12345"); //Cambiar contraseña
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(1);
    home.click_LogoWonderly();
    home.click_Membresia_Explorador();
    membresiahijos.seleccionarHijoMembresia("Carol Teran");
    membresiahijos.botonComprar();
    membresiahijos.botonMembresiasCompradas();
    home.click_LogoWonderly();
    var a = [1, 2, 3, 4];
    a.forEach((position) => {
      registrarhijo.verificarExistenciaMultiple(
        ".site-container",

        "#slick-slide0" +
          position +
          " > div > div > div > div > div.course-body.cursos-detail > div > div.w-50.mr-1.text-center > a",
        "verificador17",
        position
      );
    });
    cy.fixture("verificadores/verificador17").then((elementoGuardadoJson) => {
      this.elementoGuardadoJson = elementoGuardadoJson;

      cy.get(
        "#slick-slide0" +
          this.elementoGuardadoJson.position +
          " > div > div > div > div > div.course-body.cursos-detail > div > div.w-50.mr-1.text-center > a"
      ).click();
      claseshijo.botonInscribeteGratis();
    });
  });

  //DETALLE DE LA MEMBRESIA: EXPLORADOR, INVENTOR y GENIO
  it("2_Comprobar que el detalle de la membresia 'Explorador' coincide con el Detalle de compra", () => {
    home.click_LogoWonderly();
    home.botonComprarMembresia();
    // home.click_Membresia_Explorador();
    membresiahijos.verificarDetalleCompraMembresiaExplorador(
      "Membresia: Explorador",
      "Precio Total: 29.99 USD."
    );
  });

  it.skip("3_Comprobar que el detalle de la membresia 'Inventor' coincide con el Detalle de compra", () => {
    home.click_LogoWonderly();
    home.click_Membresia_Inventor();
    membresiahijos.verificarDetalleCompraMembresiaInventor(
      "Membresia: Inventor",
      "Precio Total: 49.99 USD."
    );
  });

  it.skip("4_Comprobar que el detalle de la membresia 'Genio' coincide con el Detalle de compra", () => {
    home.click_LogoWonderly();
    home.click_Membresia_Genio();
    membresiahijos.verificarDetalleCompraMembresiaGenio(
      "Membresia: Genio",
      "Precio Total: 69.99 USD."
    );
  });

  //MENSAJE DE ADVERTENCIA: EXPLORADOR, INVENTOR y GENIO
  it("3_Verificar que el sistema muestra un mensaje de advertencia cuando no se completa los campos requeridos al comprar una membresia Explorador", () => {
    home.click_LogoWonderly();
    home.botonComprarMembresia();
    membresiahijos.botonComprar();
    // home.click_Membresia_Explorador();
    membresiahijos.MensajeAdvertencia();
  });

  it.skip("_Verificar que el sistema muestra un mensaje de advertencia cuando no se completa los campos requeridos al comprar una membresia Inventor", () => {
    home.click_LogoWonderly();
    home.click_Membresia_Inventor();
    membresiahijos.MensajeAdvertencia();
  });

  it.skip("_Verificar que el sistema muestra un mensaje de advertencia cuando no se completa los campos requeridos al comprar una membresia Genio", () => {
    home.click_LogoWonderly();
    home.click_Membresia_Genio();
    membresiahijos.MensajeAdvertencia();
  });

  it("4_Verificar que en el perfil del hijo se muestre el tipo de membresia que compró", () => {
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    cy.get(
      ":nth-child(1) > :nth-child(3) > .list-group > .list-group-item"
    ).should("be.visible");
  });

  it("5_Verificar que se muestra un mensaje de confirmacion cuando se inscribe a un curso", function () {
    home.clickSalirHijo();
    home.click_IniciaSesion();
    ingresar.type_Correo("marquito@gmail.com"); //Cambiar un nuevo usuario existente
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(3);
    home.clickPestañaCursos();
    var a = [1, 2, 3, 4];
    a.forEach((position) => {
      registrarhijo.verificarExistenciaMultiple(
        ".site-container",
        "div:nth-child(" +
          position +
          ") > div > div > div.course-body.cursos-detail > div > div.w-50.mr-1.text-center > a",
        "verificador11",
        position
      );
    });
    cy.fixture("verificadores/verificador11").then((elementoGuardadoJson) => {
      this.elementoGuardadoJson = elementoGuardadoJson;
      cy.get(
        "div:nth-child(" +
          this.elementoGuardadoJson.position +
          ") > div > div > div.course-body.cursos-detail > div > div.w-50.mr-1.text-center > a"
      ).click();
      // clase.click_botonInscribeteCursos2davez("Inscrito");
      claseshijo.botonInscribeteGratisEntraClase();
    });
  });
});
