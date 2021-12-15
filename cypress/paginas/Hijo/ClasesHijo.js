///<reference types="cypress" />
export class ClasesHijo {
  click_menu_clasesHijo() {
    cy.get("#menu-item-2666 > .dropdown-item").click();
  }

  click_botonUnirseClase() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[2]/div/div[2]/div[2]/div[2]/div[1]/button[1]"
    ).click();
  }
}
