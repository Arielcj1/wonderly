// Autor: Yanina Cardozo
///<reference types="cypress" />

import { testCaseConfig } from "../../helpers/helpers";

export class ClasesHijo {
  click_menu_clasesHijo() {
    cy.get("#menu-item-704 > .nav-link").click();
    // cy.get("#menu-item-2666 > .dropdown-item").click();
  }

  click_botonUnirseClase() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[2]/div/div[2]/div[2]/div[2]/div[1]/button[1]"
    ).click();
  }
  click_tableroClasesHijos() {
    cy.get("#menu-item-704 > .nav-link").click();
  }

  // Navegacion entrando al detalle del curso
  aprendizajeProyecto() {
    cy.get("#pills-proyecto-tab > :nth-child(1)").click();
  }
  botonPreguntaWhatsapp() {
    cy.get("#pills-tab > .btn").click();
    cy.wait(2000);
  }

  botonInscribeteCursos() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/div[1]/div[6]/div/div/div[2]/div/div[1]/a"
    ).click();
  }

  clickBotonUnirmeClase(nombre) {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[2]/div/div[2]/div[2]/div[2]/div[1]/button"
    )
      .invoke("text")
      .then((text) => {
        if (text.trim() == nombre.trim()) {
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/section/div[2]/div/div[2]/div[2]/div[2]/div[1]/button"
          ).click();
          cy.wait(2000);
        } else {
          cy.contains("Reservar mi clase").click();
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/section/div[2]/div/div[2]/div[2]/div[2]/div[1]/button"
          ).click();
          cy.wait(2000);
        }
      });
  }

  clickBotonReservaMiClase() {
    cy.contains("Reservar mi clase").click();
  }

  inscribirCurso(verify) {
    cy.log("******" + verify);
    if (verify == "true") {
      cy.xpath(
        "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div[1]/div[2]/div/a"
      ).click(); //boton Inscribete
      cy.get(
        "#modalBooking > .modal-dialog > .modal-content > .modal-header > .close > span"
      ).click(); //cerrar modal
    }
  }

  verificarCursosExistentesSchedule(verify) {
    if (verify == "true") {
      cy.log("No existen clases en esta fecha");
    } else {
      cy.log("Entrando al curso");
      cy.wait(3000);
      cy.contains(testCaseConfig.nombreCursoMembresiaExpirada).click(); //Cambio de nombre del curso
      cy.xpath(
        "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div[1]/div[2]/div/a"
      ).click(); // boton inscribete gratis
      cy.wait(3000);
      cy.get(".parent-user > p").should("be.visible");
    }
  }
  verificaCounterClase(verify) {
    cy.wait(2000);
    if (verify == "true") {
      cy.log("se muestra el contador");
      cy.get(".countdown-container").should("be.visible");
      cy.wait(3000);
    } else {
      cy.log("La clase ya empezó");
    }
  }
}
