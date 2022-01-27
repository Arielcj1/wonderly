///<reference types="cypress" />

export class AsignarProfesor {
  type_seleccionarProfesor(profesor) {
    cy.get("#input_29_3").select(profesor);
  }

  click_asignar() {
    cy.get("#gform_submit_button_29").click();
  }

  click_regresar() {
    cy.get(".btn-group > .btn").click();
  }

  click_asignarProfesorClase() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/td[6]/a[2]"
    ).click();
  }
}
