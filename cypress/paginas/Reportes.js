/// <reference types="cypress" />
export class Reportes {
  tabReporteOnDemand() {
    cy.get("#menu-item-13766 > .nav-link").click();
  }
  clickExcelReporte() {
    cy.get(".dt-button > span")
      .should("contain.text", "Excel")
      .should("be.visible");
    cy.get(".dt-button > span").click();
    cy.wait(2000);
  }
  tabReporteReservas() {
    cy.get("#menu-item-13597 > .nav-link").click();
  }
  reservasPasadas() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div[1]/a[1]"
    ).click();
  }
  reservasActivas() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div[1]/a[2]"
    ).click();
  }
  tabReporteMembresias() {
    cy.get("#menu-item-13388 > .nav-link").click();
    cy.wait(60000);
  }
  membresiasExpiradas() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div[1]/a[1]"
    ).click();
  }

  membresiasActivas() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div[1]/a[2]"
    ).click();
  }
  //Buscador

  clickSearch() {
    cy.get("label > input").click();
  }
  typeNombre(nombre) {
    cy.get("label > input").type(nombre);
  }
}
