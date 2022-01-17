///<reference types="cypress" />
export class RegistroProfesor {
  type_nombre(nombre) {
    cy.get("#input_5_11").type(nombre);
  }

  type_apellido(apellido) {
    cy.get("#input_5_10").type(apellido);
  }

  type_correoElectronico(correoElectronico) {
    cy.get("#input_5_3").type(correoElectronico);
  }
  type_contrasenia(contrasenia) {
    cy.get("#input_5_4").type(contrasenia);
  }

  type_confirmarContrasenia(confirmarContrasenia) {
    cy.get("#input_5_4_2").type(confirmarContrasenia);
  }

  click_botonListo() {
    cy.get("#gform_submit_button_5").click();
  }

  close_modalMessage(){
    cy.get('#validationModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
  }
}
