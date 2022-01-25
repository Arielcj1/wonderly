// Autor: Yanina Cardozo
///<reference types="cypress" />

import { testCaseConfig } from "../../helpers/helpers";

export class Clase {
  click_nombreDeLaClase() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/td[1]/a"
    ).click();
  }
  click_botonEntrarClase() {
    cy.contains(testCaseConfig.nombreDelCursoCreado).click({ force: true });
  }

  verificarClaseInscrita() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[2]/div/div/div/div/div/div/div[1]/div/div/div/div/div[3]/a"
    )
      .invoke("text")
      .then((text) => {
        cy.log(text);
        if (text == "Inscríbete") {
          cy.log("El hijo puede inscribirse a la clase");
          cy.wait(2000);
          cy.contains(testCaseConfig.nombreDelCursoCreado).click({
            force: true,
          });

          cy.wait(5000);
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div[1]/div[2]/div/a"
          ).click(); //boton Inscribete
          cy.get(".modal-body > p").should("be.visible");
          cy.get(
            "#modalBooking > .modal-dialog > .modal-content > .modal-header > .close > span"
          ).click(); //cerrar modal
        } else {
          cy.log("El hijo ya esta inscrito a la clase");
        }
      });
  }

  click_descargarMaterial() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[2]/div/div[1]/div[3]/ul[1]/li[3]/ul/li/a"
    ).click();
  }
  // boton inscribete desde el Schedule
  click_InscribeteSchedule() {
    cy.contains(testCaseConfig.nombreCursoMembresiaFree).click(); //Cambio de nombre del curso
  }

  // Desde el detalle del curso
  click_inscribeteGratis() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div[1]/div[2]/div/a"
    ).click();
    cy.wait(3000);
  }

  verificarSiSeInscribio(nombre) {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div[1]/div[2]/div/a"
    )
      .invoke("text")
      .then((text) => {
        if (text == nombre) {
          cy.log("*/*/********", nombre);
          cy.log("El hijo puede inscribirse");
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div[1]/div[2]/div/a"
          ).click(); //boton inscribir clase desde adento
        } else {
          cy.log("Hijo inscrito");
          cy.wait(2000);
        }
      });
  }

  // boton inscribete Desde pestania Cursos
  click_botonInscribeteCursos1eravez() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/div[1]/div[6]/div/div/div[2]/div/div[1]/a"
    ).click();
    cy.wait(2000);
  }
  click_botonInscribeteCursos2davez() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div[1]/div[2]/div/a"
    ).click();
  }
}
