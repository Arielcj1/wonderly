///<reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";
import { PerfilAdmin } from "../../PaginasAdmin/PerfilAdmin";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Administrador - Login", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfiladmin = new PerfilAdmin();
  const homeadmin = new HomeAdmin();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  it("1_Verificar que el Admin puede ingresar con Correo electronico valido y Contraseña valido.", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
  });

  it("2_Verificar que el Admin no puede ingresar con Correo electronico invalido y Contraseña invalido.", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("neida.xxx@believesol.com");
    ingresar.type_contrasena("abcABCxxx");
    ingresar.click_continuar();
    cy.get(".message-error > .title").should("be.visible");
  });

  it("3_Verificar que el sistema muestra un mensaje de advertencia cuando no se completan los datos requeridos.", () => {
    home.click_IniciaSesion();
    ingresar.click_continuar();
    cy.get(".message-error > .title").should("be.visible");
  });

  it("4_Verificar que el sistema señala cuales son los campos obligatorios para completar.", () => {
    home.click_IniciaSesion();
    ingresar.click_continuar();
    cy.get(".message-error > .title").should("be.visible");
    ingresar.close_modalMessage();
    // Assert de mensajes 'Este campo es obligatorio.'
    cy.get("#validation_message_0_1").should("be.visible"); //Correo electronico
    cy.get("#validation_message_0_2").should("be.visible"); //Contraseña
  });
  it("5_Verificar que el admin pueda editar su perfil.", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();

    perfiladmin.type_nombreAdmin("Neida");
    perfiladmin.type_apellidoAdmin("Veizaga");
    perfiladmin.click_botonGuardar();
    cy.get(".alert").should("be.visible"); //Assert  "Su información ha sido guardada con éxito"
  });
  it("6_Verificar que el administrador pueda ingresar al tablero Profesores Registrados", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    homeadmin.click_tableroProfesoresRegistrados();
    cy.wait(1000);
    cy.get("#menu-item-170 > .nav-link")
      .should("contain.text", "Profesores Registrados")
      .should("be.visible");
  });
});
