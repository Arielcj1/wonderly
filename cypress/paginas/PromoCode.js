/// <reference types="cypress" />

export class PromoCode {
  tabPromoCodes() {
    cy.get("#menu-item-14819 > .nav-link").click();
  }
  botonAgregarPromoCode() {
    cy.get(
      ".container-fluid > :nth-child(1) > .content-sidebar-wrap > #genesis-content > .post-14815 > .btn-group > .btn"
    ).click();
  }
  typeNombre(nombre) {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div[1]/div/input"
    ).type(nombre);
  }
  typeCodigo(codigo) {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div[2]/div/input"
    ).type(codigo);
  }
  typePorcentaje(porcentaje) {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div[3]/div/input"
    ).type(porcentaje);
  }
  typeFecha(date) {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div[4]/div/input"
    ).type(date);
  }
  typeAlcance(alcance) {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div[5]/div/input"
    ).type(alcance);
  }
  typeCantidad(cantidad) {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div[6]/div/input"
    ).type(cantidad);
  }

  botonGuardar() {
    cy.get(
      ".container-fluid > :nth-child(1) > .content-sidebar-wrap > #genesis-content > .post-14817 > .entry-content > #gform_wrapper_49 > #gform_49 > .gform_footer > #gform_submit_button_49"
    ).click();
  }

  //Seccion Compra de Mmembresia

  ingresarPromoCode(codigo) {
    cy.get("#input_25_48").type(codigo);
  }
  botonAplicar() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/div[1]/div/form/div[1]/div/div[22]/a"
    ).click();
    cy.wait(3000);
  }
}
