// Casos de prueba realizado por:
// Autor: Yanina Cardozo
///<reference types="cypress" />

import { testCaseConfig } from "../../helpers/helpers";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Perfil } from "../../paginas/Profesor/Perfil";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";
import { RegistroProfesor } from "../../PaginasAdmin/RegistroProfesor";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Creacion de un profesor", () => {
  const ingresar = new Ingresar();
  const home = new Home();
  const homeadmin = new HomeAdmin();
  const registroprofesor = new RegistroProfesor();
  const perfil = new Perfil();

  beforeEach(function () {
    cy.visit("https://developers.learnwonderly.com/");
    cy.fixture("variables/variablesUsuario").then((variables) => {
      this.variables = variables;
      home.click_IniciaSesion();
      ingresar.type_Correo("neida.veizaga@believesol.com");
      ingresar.type_contrasena("abcABC123");
      ingresar.click_continuar();
    });
  });

  it("1_Comprobar que el Admin pueda registrar profesor desde el tablero Profesores Registrados.", function () {
    homeadmin.click_tableroProfesoresRegistrados();
    homeadmin.click_botonRegistrarProfesor();
    registroprofesor.type_nombre("Profe");
    registroprofesor.type_apellido("teacher6"); //Cambiar apellido
    cy.get("#input_5_3").type(this.variables.correoTeacher); //Correo de otro profesor nuevo
    registroprofesor.type_contrasenia("12345");
    registroprofesor.type_confirmarContrasenia("12345");
    registroprofesor.click_botonListo();
    cy.get(".alert").should("be.visible");
  });

  it("2_Comprobar que el sistema muestra un mensaje de advertencia cuando no se completan los datos requeridos en el formulario Registra a un profesor.", () => {
    homeadmin.click_tableroProfesoresRegistrados();
    homeadmin.click_botonRegistrarProfesor();
    registroprofesor.click_botonListo();
    cy.get(".title").should("be.visible");
    cy.wait(1000);
  });

  it("3_Comprobar que el sistema señala cuales son los campos obligatorios para completar en el formulario Registra a un profesor.", () => {
    homeadmin.click_tableroProfesoresRegistrados();
    homeadmin.click_botonRegistrarProfesor();
    registroprofesor.click_botonListo();
    registroprofesor.close_modalMessage();
    //Son los Campos obligatorios que se muestran
    cy.get("#validation_message_5_11").should("be.visible"); //Nombre
    cy.get("#validation_message_5_10").should("be.visible"); //Apellido
    cy.get("#validation_message_5_3").should("be.visible"); //Correo electronico
    cy.get("#validation_message_5_4").should("be.visible"); //Contraseña
  });
  it("4_Comprobar que el Admin pueda registrar profesor desde el tablero Profesores Registrados.", function () {
    homeadmin.click_tableroProfesoresRegistrados();
    homeadmin.click_botonRegistrarProfesor();
    registroprofesor.type_nombre("Profe"); //Nombre del profesor
    registroprofesor.type_apellido(testCaseConfig.apellidoProfesor); // Apellido del profesor
    cy.get("#input_5_3").type(this.variables.correoProfesor); //Crear un nuevo profesor, correo electronico
    registroprofesor.type_contrasenia("12345");
    registroprofesor.type_confirmarContrasenia("12345");
    registroprofesor.click_botonListo();
    cy.get(".alert").should("be.visible");
  });

  it("5_Demostrar que un profesor no pueda ingresar con email y contraseña incorrecta", () => {
    home.clickSalir();
    home.click_IniciaSesion();
    ingresar.type_Correo("profesorceroxxx@testtraining.com"); //Correo incorrecto del profesor nuevo
    ingresar.type_contrasena("123456789");
    ingresar.click_continuar();
    cy.wait(2000);
    cy.get(".message-error > .title").should("be.visible");
  });

  it("6_Probar que se muestra un mensaje de advertencia cuando no ingresa todos los datos requeridos para iniciar sesion", () => {
    home.clickSalir();
    home.click_IniciaSesion();
    ingresar.type_Correo("profesorceroxxx@testtraining.com"); //Correo incorrecto del profesor nuevo
    ingresar.type_contrasena(" "); //Contrasenia vacia
    ingresar.click_continuar();
    cy.wait(2000);
    cy.get(".message-error > .title").should("be.visible");
  });

  it("7_Comprobar que un profesor puede iniciar sesion en wonderly", function () {
    home.clickSalir();
    home.click_IniciaSesion();
    cy.get("#input_1").type(this.variables.correoProfesor);
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
  });

  it("8_Verificar que pueda completar informacion cuando entra por primera vez", function () {
    home.clickSalir();
    home.click_IniciaSesion();
    cy.get("#input_1").type(this.variables.correoProfesor);
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    cy.wait(2000);
    perfil.type_telefono_PrimeraVez("79846521");
    perfil.type_fechaNac_primeraVez("12/12/1985");
    perfil.select_pais_primeraVez("Bolivia");
    perfil.select_comoNosConociste_primeraVez("Facebook");
    perfil.click_siguiente_PV();
    cy.get(".alert").should("be.visible");
    perfil.type_descripcion_PV("hola mundo");
    perfil.type_equipo_PV("Laptop");
    perfil.check_especialidad_PV();
    perfil.check_experiencia_PV();
    perfil.subir_doc_PV();
    perfil.listo_PV();
    cy.get("#menu-item-144 > .nav-link")
      .should("contain.text", "Perfil")
      .should("be.visible");
  });

  it("9_Comprobar que un profesor pueda editar sus datos personales", function () {
    home.clickSalir();
    home.click_IniciaSesion();
    cy.get("#input_1").type(this.variables.correoProfesor);
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    cy.wait(2000);
    perfil.type_ciudad("Sucre");
    perfil.type_descripcionAcercaDeTi("Profesor apasionado en la enseñanza");
    perfil.click_botonGuardar();
    cy.get(".alert").should("be.visible");
    cy.wait(2000);
  });
});
