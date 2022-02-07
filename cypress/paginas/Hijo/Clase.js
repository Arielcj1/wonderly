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
    cy.wait(3000);
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div[1]/div[2]/div/a"
    )
      .invoke("text")
      .then((text) => {
        cy.log("*", text);
        if (text == nombre) {
          cy.log("El hijo ya ha reservado la clase anteriormente");
          // cy.get(".modal-body > p").should("be.visible");
          cy.wait(2000);
        } else {
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div[1]/div[2]/div/a"
          ).click();
          cy.log("El hijo se inscribió con exito a la clase");
          cy.get(".modal-body > p").should("be.visible");
          cy.wait(2000);
        }
      });
  }
}
