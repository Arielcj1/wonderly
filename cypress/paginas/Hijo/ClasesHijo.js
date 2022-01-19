///<reference types="cypress" />
export class ClasesHijo {
  click_menu_clasesHijo() {
    cy.get("#menu-item-704 > .nav-link").click();
    // cy.get("#menu-item-2666 > .dropdown-item").click();
  }

  click_botonUnirseClase(advertencia) {
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
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/div/div[1]/div/div/div[2]/div/div[1]/a"
    ).click();
  }
}
