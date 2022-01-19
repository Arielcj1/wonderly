/// <reference types="cypress" />

export class ClasesHijos {
  click_Tablero_ClasesHijo() {
    cy.get("#menu-item-704 > .nav-link").click();
  }

  click_NombreClase() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/th/a"
    ).click();
  }

  // Navegacion entrando al detalle del curso
  aprendizajeProyecto() {
    cy.get("#pills-proyecto-tab > :nth-child(1)").click();
  }
  botonPreguntaWhatsapp() {
    cy.get("#pills-tab > .btn").click();
  }

  botonInscribeteCursos() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/div[1]/div[8]/div/div/div[2]/div/div[1]/a"
    ).click();
  }
}
