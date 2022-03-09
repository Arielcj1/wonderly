/// <reference types="cypress" />

export class MisHijos {
  click_Tablero_MisHijos() {
    cy.get("#menu-item-211 > .nav-link").click();
  }
  click_RegistrarHijo() {
    cy.get(".btn-full-width").click();
    //cy.get('.entry-content > .mt-3').click()
  }

  clickEditar() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[1]/td[5]/a"
    ).click();
  }
}
