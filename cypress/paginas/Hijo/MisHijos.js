///<reference types="cypress" />
export class MisHijos {
  click_tableroMisHijos() {
    cy.get("#menu-item-211 > .nav-link").click();
  }
  click_conectarHijo() {
    cy.get(":nth-child(5) > :nth-child(4) > .btn").click();
  }
  // Registrar Hijo

  botonRegistrarHijo() {
    //presionar el boton para entrar al registro
    cy.get(".btn-full-width").click();
  }

  type_nombreHijo(nombre) {
    cy.get("#input_24_14_3").type(nombre);
  }
  type_apellidoHijo(apellido) {
    cy.get("#input_24_14_6").type(apellido);
  }
  type_fechaNac(fecha) {
    cy.get("#input_24_13").type(fecha);
  }
  click_botonRegistrar() {
    cy.get("#gform_submit_button_24").click(); //Presionar el boton para registrar
  }
}
