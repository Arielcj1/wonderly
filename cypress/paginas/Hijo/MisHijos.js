///<reference types="cypress" />
export class MisHijos {
  click_tableroMisHijos() {
    cy.get("#menu-item-211 > .nav-link").click();
  }
  click_conectarHijo() {
    cy.get(":nth-child(5) > :nth-child(4) > .btn").click();
  }
}
