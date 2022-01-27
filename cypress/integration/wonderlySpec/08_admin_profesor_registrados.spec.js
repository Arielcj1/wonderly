///<reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";
import { PerfilAdmin } from "../../PaginasAdmin/PerfilAdmin";
import { RegistroProfesor } from "../../PaginasAdmin/RegistroProfesor";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe.skip("Administrador - Profesores Registrados", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfiladmin = new PerfilAdmin();
  const homeadmin = new HomeAdmin();
  const registroprofesor = new RegistroProfesor();

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

  it("01_Verificar que el admin pueda editar su perfil.", () => {
    perfiladmin.type_nombreAdmin("Neida");
    perfiladmin.type_apellidoAdmin("Veizaga");
    perfiladmin.click_botonGuardar();
    cy.get(".alert").should("be.visible"); //Assert  "Su información ha sido guardada con éxito"
  });

  it("02_Verificar que el administrador pueda ingresar al tablero Profesores Registrados", () => {
    homeadmin.click_tableroProfesoresRegistrados();
    cy.wait(1000);
  });

  it("03_Comprobar que el Admin pueda registrar profesor desde el tablero Profesores Registrados.", function () {
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

  it("04_Comprobar que el sistema muestra un mensaje de advertencia cuando no se completan los datos requeridos en el formulario Registra a un profesor.", () => {
    homeadmin.click_tableroProfesoresRegistrados();
    homeadmin.click_botonRegistrarProfesor();
    registroprofesor.click_botonListo();
    cy.get(".title").should("be.visible");
    cy.wait(1000);
  });

  it("05_Comprobar que el sistema señala cuales son los campos obligatorios para completar en el formulario Registra a un profesor.", () => {
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
});
