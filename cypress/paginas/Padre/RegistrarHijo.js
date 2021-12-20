/// <reference types="cypress" />

export class RegistrarHijo {
  type_nombreHijo(nombre) {
    cy.get("#input_24_14_3").type(nombre);
  }

  type_apellidoHijo(apellido) {
    cy.get("#input_24_14_6").type(apellido);
  }

  type_fechaNacimiento(fechaNac) {
    cy.get("#input_24_13").type(fechaNac); //  DD/MM/AAAA
  }

  click_registrar() {
    cy.get("#gform_submit_button_24").click();
  }

  type_nombreHijoPV(nombre) {
    cy.get("#name_1").type(nombre);
  }

  type_apellidoHijoPV(apellido) {
    cy.get("#surname_1").type(apellido);
  }

  type_fechaNacimientoPV(fechaNac) {
    cy.get("#birthday_1").type(fechaNac);
    cy.get("#name_1").click();
  }
  click_botonRegistraTuHijo() {
    cy.get(".welcome_parent > .btn").click();
  }
  click_botonExploraCursos() {
    cy.get(".form_footer > .btn").click();
  }
}
