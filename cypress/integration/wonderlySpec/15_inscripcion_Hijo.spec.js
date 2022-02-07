// Casos de prueba realizado por:
// Autor: Yanina Cardozo
/// <reference types="cypress" />

import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Clase } from "../../paginas/Hijo/Clase";
import { MembresiasHijo } from "../../paginas/Hijo/MembresiasHijo";
import { testCaseConfig } from "../../helpers/helpers";
import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- Inscripcion a curso con Membresias", () => {
  const perfilhijo = new PerfilHijo();
  const ingresar = new Ingresar();
  const home = new Home();
  const clase = new Clase();
  const membresiahijos = new MembresiasHijo();
  const claseshijo = new ClasesHijo();
  const registrarhijo = new RegistrarHijo();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  // //MEMBRESIAS RESERVAS:
  it.skip("2_Comprobar que un hijo con membresia Explorador pueda inscribirse a una clase desde el schedule", function () {
    home.click_IniciaSesion();
    ingresar.type_Correo("alfredo@gmail.com"); //Cambiar usuario Padre
    ingresar.type_contrasena("123"); //Cambiar contraseña
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(1);
    home.click_LogoWonderly();
    home.click_Membresia_Explorador();
    membresiahijos.select_MembresiaHijo("Belen Teran"); //Se debe Crear un hijo
    membresiahijos.botonSubscribirse();
    membresiahijos.botonMembresiasCompradas();
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    cy.contains(testCaseConfig.nombreCursoNavegacion).click({ force: true }); //Cambiar nombre de curso
    home.verificarExistenciaElemento(
      ".site-container",
      "#pills-calendario",
      "verificador4"
    );
    cy.fixture("verificadores/verificador4").then((verifica) => {
      cy.log("VERIFICADOR 4", verifica);
      this.verifica = verifica;
      home.inscribirCurso(this.verifica.verify);
    });
    // clase.click_botonInscribeteCursos2davez("Inscríbete gratis");
  });

  it.skip("3_Comprobar que un hijo con membresia INVENTOR pueda inscribirse a una clase desde el schedule", function () {
    home.click_IniciaSesion();
    ingresar.type_Correo("alfredo@gmail.com"); //Cambiar usuario Padre
    ingresar.type_contrasena("123"); //Cambiar contraseña
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(3);
    home.click_LogoWonderly();
    home.click_Membresia_Inventor();
    membresiahijos.select_MembresiaHijo("Alejandra Teran"); //Se debe Crear un hijo
    membresiahijos.botonSubscribirse();
    membresiahijos.botonMembresiasCompradas();
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    cy.contains(testCaseConfig.nombreCursoNavegacion).click({ force: true }); //Cambiar nombre de curso
    home.verificarExistenciaElemento(
      ".site-container",
      "#pills-calendario",
      "verificador5"
    );
    cy.fixture("verificadores/verificador5").then((verifica) => {
      cy.log("VERIFICADOR 5", verifica);
      this.verifica = verifica;
      home.inscribirCurso(this.verifica.verify);
    });
  });

  it.skip("4_Comprobar que un hijo con membresia GENIO pueda inscribirse a una clase desde el schedule", function () {
    home.click_IniciaSesion();
    ingresar.type_Correo("alfredo@gmail.com"); //Cambiar usuario Padre
    ingresar.type_contrasena("123"); //Cambiar contraseña
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(2);
    home.click_LogoWonderly();
    home.click_Membresia_Genio();
    cy.wait(2000);
    membresiahijos.select_MembresiaHijo("Alfredito Teran"); //Se debe Crear un hijo
    membresiahijos.botonSubscribirse();
    membresiahijos.botonMembresiasCompradas();
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    cy.contains(testCaseConfig.nombreCursoNavegacion).click({ force: true }); //Cambiar nombre de curso
    home.verificarExistenciaElemento(
      ".site-container",
      "#pills-calendario",
      "verificador6"
    );
    cy.fixture("verificadores/verificador6").then((verifica) => {
      cy.log("VERIFICADOR 6", verifica);
      this.verifica = verifica;
      home.inscribirCurso(this.verifica.verify);
    });
  });

  it.skip("5_Verificar que se muestra un mensaje de confirmacion cuando se inscribe a un curso", function () {
    home.click_IniciaSesion();
    ingresar.type_Correo("marquito@gmail.com"); //Cambiar un nuevo usuario existente
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(2);
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
      clase.click_botonInscribeteCursos2davez("Inscrito");
    });
  });

  it.skip("6_Demostrar que un hijo con membresia free no pueda Inscribirse a una clase que exceda sus 7 dias gratis.", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yenny@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    home.click_Flecha_Der();
    home.click_diaSchedule();
    cy.wait(3000);
    clase.click_InscribeteSchedule(); //Cambio de nombre del curso js
    clase.click_inscribeteGratis();
    cy.get(".container > .mb-5").should(
      "contain.text",
      "Escoge el camino hacia la genialidad"
    );
  });

  it("7_Verificar que un hijo con membresia Explorador no pueda inscribirse a  una clase que exceda sus 31 dias", function () {
    home.click_IniciaSesion();
    ingresar.type_Correo("angel@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_Membresia_Explorador();
    membresiahijos.comprarTipoDeMembresia("Mabel Diaz");
    home.click_LogoWonderly();
    cy.wait(3000);
    home.click_seccionEnVivo();
    membresiahijos.tipoDeMembresiaParaInscribir(); //Cambio de nombre del curso js
    home.verificarExistenciaElemento(
      ".site-container",
      ".alert-warning",
      "verificador7"
    );
    cy.fixture("verificadores/verificador7").then((verifica) => {
      cy.log("VERIFICADOR 7", verifica);
      this.verifica = verifica;
      claseshijo.verificarCursosExistentesSchedule(this.verifica.verify);
    });
  });

  it("8_Probar que un hijo con membresia Inventor no pueda inscribirse a  una clase que exceda sus 31 dias", function () {
    home.click_IniciaSesion();
    ingresar.type_Correo("fernanda@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_Membresia_Inventor();
    membresiahijos.comprarTipoDeMembresia("Fer Gutierrez");
    home.click_LogoWonderly();
    cy.wait(3000);
    home.click_seccionEnVivo();
    membresiahijos.tipoDeMembresiaParaInscribir(); //Cambio de nombre del curso js
    home.verificarExistenciaElemento(
      ".site-container",
      ".alert-warning",
      "verificador8"
    );
    cy.fixture("verificadores/verificador8").then((verifica) => {
      cy.log("VERIFICADOR 8", verifica);
      this.verifica = verifica;
      claseshijo.verificarCursosExistentesSchedule(this.verifica.verify);
    });
  });

  it("9_Comprobar que un hijo con membresia Genio no pueda inscribirse a  una clase que exceda sus 31 dias", function () {
    home.click_IniciaSesion();
    ingresar.type_Correo("amalia@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_Membresia_Genio();
    membresiahijos.comprarTipoDeMembresia("Cecilia Vargas");
    home.click_LogoWonderly();
    cy.wait(3000);
    home.click_seccionEnVivo();
    membresiahijos.tipoDeMembresiaParaInscribir(); //Cambio de nombre del curso js
    home.verificarExistenciaElemento(
      ".site-container",
      ".alert-warning",
      "verificador9"
    );
    cy.fixture("verificadores/verificador9").then((verifica) => {
      cy.log("VERIFICADOR 9", verifica);
      this.verifica = verifica;
      claseshijo.verificarCursosExistentesSchedule(this.verifica.verify);
    });
  });
});
