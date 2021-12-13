///<reference types="cypress" />
export class Clase {
  click_nombreDeLaClase() {
    cy.get(":nth-child(1) > th > a").click();
  }
  click_botonEntrarClase() {
    cy.get(
      '.clases-vivo-list > .slick-list > .slick-track > [data-slick-index="0"] > :nth-child(1) > .col > :nth-child(1) > .course-block > .course-actions > .btn'
    ).click();
  }

  verificarClaseInscrita() {
    cy.get("#pills-tabContent > .text-center")
      .invoke("text")
      .then((text) => {
        if (text == "Inscríbete gratis") {
          cy.log("El hijo puede inscribirse a la clase");
          cy.get("/html/body/div[3]/div[4]").click();
        } else {
          cy.log("El hijo ya esta inscrito a la clase");
        }
      });
  }

  click_botonEntrarCurso() {
    cy.get(
      ".slick-current > :nth-child(1) > .col > .px-0 > .course-block > .course-actions > .btn"
    ).click();
  }
}
