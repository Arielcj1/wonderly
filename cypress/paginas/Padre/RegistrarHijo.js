/// <reference types="cypress" />

export class RegistrarHijo {
  type_nombreHijo(nombre) {
    cy.get("#input_24_14_3").type(nombre);
  }

  type_apellidoHijo(apellido) {
    cy.get("#input_24_14_6").type(apellido);
  }

  type_fechaNacimiento(fechaNac) {
    cy.get("#input_24_13").type(fechaNac); //  DD/MM/AAAA
  }

  click_registrar() {
    cy.get("#gform_submit_button_24").click();
  }

  type_nombreHijoPV(nombre) {
    cy.get("#name_1").type(nombre);
  }

  type_apellidoHijoPV(apellido) {
    cy.get("#surname_1").type(apellido);
  }

  type_fechaNacimientoPV(fechaNac) {
    cy.get("#birthday_1").type(fechaNac);
    cy.get("#name_1").click();
  }
  click_botonRegistraTuHijo() {
    cy.get(".welcome_parent > .btn").click();
  }
  click_botonExploraCursos() {
    cy.get(".form_footer > .btn").click();
  }

  //Boton inscribete de un curso desde el home de Wonderly
  click_botonInscribete() {
    cy.get(
      ".clases-vivo-list > .slick-list > .slick-track > .slick-current > :nth-child(1) > .col > :nth-child(1) > .course-block > .course-actions > .btn"
    ).click();
  }

  click_botonInscribeteGratis() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div[1]/div[2]/div/a"
    ).click();
  }
  //despues que se hace click en la pestaña Cursos
  click_inscribeteCurso() {
    cy.get(
      ":nth-child(6) > .px-0 > .course-block > .course-body > .d-flex > .mr-1 > .btn"
    ).click();
  }
}
