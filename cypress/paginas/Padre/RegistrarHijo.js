/// <reference types="cypress" />
export class RegistrarHijo {
  type_nombre(nombre) {
    cy.get("#name_1").type(nombre);
  }
  type_apellido(apellido) {
    cy.get("#surname_1").type(apellido);
  }
  type_fechaDeNacimiento(fechaDeNacimiento) {
    cy.get("#birthday_1").type(fechaDeNacimiento);
    cy.wait(1500);
    cy.get("body").click(0, 0);
  }
  click_botonExploraCursos() {
    cy.get(".form_footer > .btn").click();
  }
}
