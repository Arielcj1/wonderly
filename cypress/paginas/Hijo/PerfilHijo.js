// Autor: Yanina Cardozo
///<reference types="cypress" />

export class PerfilHijo {
  click_usuarioPerfil() {
    cy.get("#menu-item-319 > .dropdown-item").click();
  }
  click_seleccionarHijo() {
    cy.get(":nth-child(2) > .wonderly-login-hijo-trigger").click();
  }

  seleccionarHijoPosicion(position) {
    cy.wait(2000);
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/div[1]/div[" +
        position +
        "]/button/div"
    ).click();
    cy.wait(2000);
  }
  seleccionar2daPosicionHijo(position) {
    cy.xpath(
      "html/body/div[2]/div[6]/div/div/div[2]/div[" + position + "]/button"
    ).click();
    cy.wait(2000);
  }

  click_cuenta() {
    cy.xpath(
      "/html/body/div[2]/header/div/nav/div[2]/ul/li[5]/ul/li[3]/a"
    ).click({ force: true });
  }
  clickCerrarSesionHijo() {
    cy.xpath(
      "/html/body/div[2]/header/div/nav/div[2]/ul/li[5]/ul/li[4]/a"
    ).click({ force: true });
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
