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

  botonRobotica() {
    cy.xpath(
      "/html/body/div[2]/header/div/nav/div[2]/ul/li[3]/ul/li[1]/a"
    ).click({ force: true });
  }
  botonProgramacion() {
    cy.xpath(
      "/html/body/div[2]/header/div/nav/div[2]/ul/li[3]/ul/li[2]/a"
    ).click({ force: true });
  }
  botonMatematicas() {
    cy.xpath(
      "/html/body/div[2]/header/div/nav/div[2]/ul/li[3]/ul/li[4]/a"
    ).click({ force: true });
  }
  botonDesarrolloVideoJuegos() {
    cy.xpath(
      "/html/body/div[2]/header/div/nav/div[2]/ul/li[3]/ul/li[3]/a"
    ).click({ force: true });
  }
  botonIngles() {
    cy.xpath(
      "/html/body/div[2]/header/div/nav/div[2]/ul/li[3]/ul/li[5]/a"
    ).click({ force: true });
  }
}
