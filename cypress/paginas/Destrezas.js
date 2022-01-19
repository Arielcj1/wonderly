/// <reference types="cypress" />

export class Destrezas {
  // Boton mirar cursos
  botonMirarcursoProgramacion() {
    cy.get(".pt-3 > .container > .row > .col-md-7 > .btn").click();
  }
  botonMirarCursoRobotica() {
    cy.get(":nth-child(2) > .container > .row > .col-md-7 > .btn").click();
  }
  botonMirarCursoIngles() {
    cy.get(":nth-child(4) > .container > .row > .col-md-7 > .btn").click();
  }
  botonMirarCursoMatematicas() {
    cy.get(".pb-md-0 > .container > .row > .col-md-7 > .btn").click();
  }
  botonMirarCursoDesarrolloVideoJuego() {
    cy.get(":nth-child(3) > .container > .row > .col-md-7 > .btn").click();
  }

  botonInscribeteGratisHoy() {
    cy.get(".col-lg-7 > .btn").click();
  }

  botonComenzarAhora() {
    cy.get(".col-lg-5 > .btn").click();
  }
  BotonInscribeteGratisHoy2() {
    cy.get(".py-5 > .text-lg-left > .btn").click();
  }
}
