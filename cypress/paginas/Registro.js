/// <reference types="cypress" />

export class Registro {
  type_nombre(nombre) {
    cy.get("#input_21_19_3").type(nombre);
  }

  type_apellidos(apellidos) {
    cy.get("#input_21_19_6").type(apellidos);
  }

  type_correo(correo) {
    cy.get("#input_21_2").type(correo);
  }

  type_contrasenia(contrasenia) {
    cy.get("#input_21_20").type(contrasenia);
  }
  type_numero(numero) {
    cy.get("#input_21_12").type(numero);
  }
  click_siguiente() {
    cy.get("#gform_submit_button_21").click();
  }

  hijo_nomnre(nombreHijo) {
    cy.get("#nombre").type(nombreHijo);
  }

  hijo_apellido(apellidoHijo) {
    cy.get("#apellido").type(apellidoHijo);
  }

  hijo_fechaNacimiento(fechaNacimiento) {
    cy.get("#fecha_nacimiento").type(fechaNacimiento);
  }

  click_registrar() {
    cy.get("#registrar-hijo-submit").click();
  }

  click_aceptar() {
    cy.get(
      "#modalBooking > .modal-dialog > .modal-content > .modal-footer > .btn"
    ).click({ force: true });
  }

  click_Modal() {
    cy.get("#validationModal").click();
  }

  click_ModalClose() {
    cy.get(".modal-body > .close > span").click();
  }
  //en la pagina de welcome despues de registrar un nuevo padre
  click_botonRegistarHijos() {
    cy.get(".welcome_parent > .btn").click();
  }
}
