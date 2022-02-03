// Autor: Yanina Cardozo
/// <reference types="cypress" />
export class AlumnosProfesor {
  tableroClasesAlumnos() {
    cy.get("#menu-item-2194 > .nav-link").click();
  }
  mensajeAlumnosInscritos(verify) {
    if (verify == "true") {
      cy.log("Los alumnos estan inscritos a la clase");
      cy.get("tbody > tr > th").should("have.length", 1); //cambiar el numero de inscritos para verificar el assert
    } else {
      cy.log("No Existen alumnos inscritos a la clase");
      cy.get(".message").should("be.visible");
    }
  }
}
