/// <reference types="cypress" />

export class Perfil {
  click_tableroClasesProfesor() {
    cy.get("#menu-item-456 > .nav-link").click();
  }
  click_iniciarClase() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/td[4]/button[2]"
    ).click();
  }
}
