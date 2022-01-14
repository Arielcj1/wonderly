///<reference types="cypress" />

export class PerfilHijo {
  click_usuarioPerfil() {
    cy.get("#menu-item-319 > .dropdown-item").click();
  }
  click_seleccionarHijo() {
    cy.get(":nth-child(2) > .wonderly-login-hijo-trigger").click();
  }
  click_cuenta() {
    cy.get("#menu-item-142 > #navbarDropdown").click();
    cy.get("#menu-item-319 > .dropdown-item").click();
  }
  click_perfiles() {
    cy.get("#menu-item-2667 > .dropdown-item").click();
  }
  seleccionarHijoPerfiles() {
    cy.xpath("/html/body/div[2]/div[6]/div/div/div[2]/div[5]/button").click();
    cy.get(
      "#registrar-hijo-modal > .modal-dialog > .modal-content > :nth-child(1) > .close > span"
    ).click(); //cerrar modal
  }
}
