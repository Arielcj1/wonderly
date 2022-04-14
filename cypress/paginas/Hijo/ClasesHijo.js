// Autor: Yanina Cardozo
///<reference types="cypress" />

import { testCaseConfig } from "../../helpers/helpers";

export class ClasesHijo {
  verificarInscrito() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section/div[3]/div[1]/div/div/div[1]/div[2]/div/div/div[3]/a"
    )
      .invoke("text")
      .then((text) => {
        if (text == "Inscrito") {
          cy.log("El estudiante se encuentra inscrito al curso");
        } else {
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/main/article/div/section/div[3]/div[1]/div/div/div[1]/div[2]/div/div/div[3]/a"
          ).click({ force: true });
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div/div[2]/div/a"
          ).click(); //Segundo boton Inscribete
          cy.wait(6000);
          cy.get(".alert").should("be.visible");
        }
      });
  }

  //Links
  clickLinks() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[2]/div[1]/div[2]/div/div[2]/div/div[1]/a"
    ).click();
    // cy.get('[data-date="2022-04-15 13:00:00"] > a').click();
  }

  //boton Inscribete al curso

  verificarBotonInscribeteCurso(nombre) {
    cy.wait(3000);
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[2]/div/div[2]/div[2]/div[2]/div[1]/button"
    )
      .invoke("text")
      .then((text) => {
        cy.log("ESTE ES EL TEXTO", text);
        if (text.trim() === nombre.trim()) {
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/section/div[2]/div/div[2]/div[2]/div[2]/div[1]/button"
          ).click({ force: true }); //inscribete
          cy.wait(4000);
        } else {
          cy.log("Estudiante inscrito al curso");
          cy.wait(4000);
        }
      });
  }

  buscarNombreClase() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/div/section[3]/div/div/div/div/div[5]/div/div/div/div/div[2]/p"
    )
      .invoke("text")
      .then((text) => {
        if (text == testCaseConfig.nombreCursoNavegacion) {
          cy.xpath(
            "/html/body/div[2]/div[3]/div/div/div/main/article/div/div/section[3]/div/div/div/div/div[5]/div/div/div/div/div[2]/div/div[1]/a"
          ).click(); //botonComienza
        }
      });
  }
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
    cy.wait(2000);
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
          cy.log("El hijo no esta inscrito al curso");
          cy.wait(3000);
        }
      });
  }

  clickBotonReservaMiClase() {
    cy.contains("Reservar mi clase").click();
  }
  botonInscribeteGratisEntraClase() {
    cy.wait(4000);
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[2]/div[1]/div[1]/div[2]/div/div/a"
    )
      .invoke("text")
      .then((text) => {
        cy.log("***********", text);
        if (text === "Inscrito") {
          cy.log("El hijo ya se encuentra inscrito a esta clase");
        } else {
          cy.log("El hijo puede inscribirse");
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/section/div[2]/div[1]/div[1]/div[2]/div/div/a"
          ).click();
          cy.get(".modal-body > p").should("be.visible");
          cy.wait(3000);
        }
      });
  }

  botonInscribeteGratis() {
    cy.wait(4000);
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div/div[2]/div/a"
    )
      .invoke("text")
      .then((text) => {
        cy.log("***********", text);
        if (text === "Inscrito") {
          cy.log("El hijo ya se encuentra inscrito a esta clase");
        } else {
          cy.log("El hijo puede inscribirse");
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div/div[2]/div/a"
          ).click();
          cy.get(".modal-body > p").should("be.visible");
          cy.wait(3000);
        }
      });
  }

  // botonComienzaOnDemand() {}
  inscribirCurso(verify) {
    cy.log("******" + verify);
    if (verify == "true") {
      cy.xpath(
        "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div[1]/div[2]/div/a"
      ).click(); //boton Inscribete
      cy.wait(3000);
      cy.get(
        "#modalBooking > .modal-dialog > .modal-content > .modal-header > .close > span"
      ).click({ force: true }); //cerrar modal
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
  verificarCounter() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[2]/div/div[2]/div[1]/div/div[6]/div[1]"
    )
      .invoke("text")
      .then((text) => {
        var num2 = parseInt(text);
        if (num2 < 1) {
          cy.log("La clase ya empezó");
        } else {
          cy.log("Se muestra el contador");
          cy.get(".countdown-container").should("be.visible");
        }
      });
  }
  verificarBotonComenzar() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/div/section[3]/div/div/div/div/div[4]/div/div/div/div/div[2]/div/div[2]/a"
    )
      .invoke("text")
      .then((text) => {
        cy.log("TEXTTTTTTT", text);
        if (text != "Próximamente") {
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/main/article/div/div/section[3]/div/div/div/div/div[4]/div/div/div/div/div[2]/div/div[2]/a"
          ).click({ force: true });
          cy.wait(3000);
          cy.get(".parent-user > .title").should("be.visible");
          //click
        } else {
          cy.log("El boton se encuentra deshabilitado");
          // UNA FUNCTION RECURSIVA PARA LLAMAR A LA FUNCION NUEVAMENT HASTA QUE PASE ALGO.
        }
      });
  }
}
