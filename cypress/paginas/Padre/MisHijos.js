/// <reference types="cypress" />

export class MisHijos {
  click_Tablero_MisHijos() {
    cy.get("#menu-item-211 > .nav-link").click();
  }
  click_RegistrarHijo() {
    cy.get(".btn-full-width").click();
    //cy.get('.entry-content > .mt-3').click()
  }

  clickEditar(){
    cy.get(':nth-child(1) > :nth-child(5) > .btn').click()
  }
}
