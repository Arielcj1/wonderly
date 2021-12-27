///<reference types="cypress" />
export class Clase {
  click_nombreDeLaClase() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/td[1]/a"
    ).click();
  }
  click_botonEntrarClase() {
    cy.get(
      ".clases-vivo-list > .slick-list > .slick-track > .slick-current > :nth-child(1) > .col > :nth-child(1) > .course-block > .course-actions > .btn"
    ).click();
  }

  verificarClaseInscrita() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[3]/a[1]"
    )
      .invoke("text")
      .then((text) => {
        if (text == "Inscríbete gratis") {
          cy.log("El hijo puede inscribirse a la clase");
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[3]/a[1]"
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

  // Verificar el nombre de la clase
  click_botonNombreClase() {
    cy.xpath(
      "/html/body/div[2]/div[3]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[2]/div/div/div/div/div/div/div[6]/div/div/div/div/div[1]/div[2]/div/a"
    ).click();
  }
}
