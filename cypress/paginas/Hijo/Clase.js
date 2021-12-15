///<reference types="cypress" />
export class Clase {
  click_nombreDeLaClase() {
    cy.get(":nth-child(1) > th > a").click();
  }
  click_botonEntrarClase() {
    // cy.xpath(
    //   "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[2]/div/div/div/div/div/div/div[10]/div/div/div/div/div[3]/a"
    // ).click();

    cy.get(
      ".clases-vivo-list > .slick-list > .slick-track > .slick-current > :nth-child(1) > .col > :nth-child(1) > .course-block > .course-actions > .btn"
    ).click();
  }

  verificarClaseInscrita() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[3]/a"
    )
      .invoke("text")
      .then((text) => {
        if (text == "Inscríbete gratis") {
          cy.log("El hijo puede inscribirse a la clase");
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[3]/a"
          ).click();
          cy.wait(2000);
          cy.get(
            "#modalBooking > .modal-dialog > .modal-content > .modal-footer > .btn"
          ).click();
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

  // click_botonUnirseClase() {
  //   cy.xpath('/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[3]/a').click()
  // }
}
