/// <reference types="cypress" />

export class AgregarNuevoHijo {
  type_NombreHijo(nombre) {
    cy.get("#name_1").type(nombre);
  }

  type_ApellidoHijo(apellido) {
    cy.get("#surname_1").type(apellido);
  }

  type_Birthday(fecha) {
    cy.get("#birthday_1").type(fecha);
  }

  click_AgregarHijo() {
    cy.get(".form_body > :nth-child(4) > .btn").click();
  }

  type_NombreHijo2(nombre) {
    cy.get("#name_2").type(nombre);
  }

  type_ApellidoHijo2(apellido) {
    cy.get("#surname_2").type(apellido);
  }
  type_Birthday2(fecha) {
    cy.get("#birthday_2").type(fecha);
  }

  eliminarHijo2() {
    var pos = 3;
    for (var i = 1; i <= 3; i++) {
      cy.xpath(
        "/html/body/div[2]/div[2]/div/div/div/main/article/div/div[2]/div/div/div[1]/div[1]/div[" +
          pos +
          "]/form/div[3]/a"
      ).click({ force: true });

      pos--;
    }
  }

  botonExploraCursos() {
    cy.get(".form_footer > .btn").click();
  }
}
