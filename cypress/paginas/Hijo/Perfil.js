///<reference types="cypress" />

export class Perfil {
  click_usuarioPerfil() {
    cy.get("#menu-item-319 > .dropdown-item").click();
  }
  click_seleccionarHijo() {
    cy.get(":nth-child(2) > .wonderly-login-hijo-trigger").click();
  }
}
