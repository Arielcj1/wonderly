// Autor: Yanina Cardozo
///<reference types="cypress" />

import { testCaseConfig } from "../../helpers/helpers";

export class Clase {
  click_nombreDeLaClase() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/div[2]/div/div[6]/a"
    ).click();
  }
  click_botonEntrarClase() {
    cy.contains(testCaseConfig.nombreDelCursoCreado).click({ force: true });
  }

  clickNombreDelCursoSchedule() {
    cy.contains(testCaseConfig.nombreDelCursoCreado).click({
      force: true,
    });
  }

  diaSchedule() {
    cy.get(".slick-current > div > li > .trigger-schedule-clases").click();
  }

  click_descargarMaterial() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[2]/div/div[1]/div[3]/ul[1]/li[3]/ul/li/a"
    ).click();
  }
  // boton inscribete desde el Schedule
  click_InscribeteSchedule() {
    cy.contains(testCaseConfig.nombreCursoMembresiaFree).click({ force: true }); //Cambio de nombre del curso
  }

  // Desde el detalle del curso
  click_inscribeteGratis() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div[1]/div[2]/div/a"
    ).click();
    cy.wait(3000);
  }
  //funcion boton inscribete Gratis desde el detalle de clase
  click_botonInscribeteCursos2davez(nombre) {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div[1]/div[2]/div/a"
    )
      .invoke("text")
      .then((text) => {
        if (text == nombre) {
          cy.log("El hijo puede inscribirse");
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div[1]/div[2]/div/a"
          ).click();
          cy.get(".modal-body > p").should("be.visible");
        } else {
          cy.log("El hijo ya esta inscrito al curso");
          cy.wait(2000);
        }
      });
  }
}
