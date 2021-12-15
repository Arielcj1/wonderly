///<reference types="cypress" />
export class HomeAdmin {
  click_tableroProfesoresRegistrados() {
    cy.get("#menu-item-170 > .nav-link").click();
  }
  click_tableroWonderlyCursos() {
    cy.get("#menu-item-238 > .nav-link").click();
  }
  click_tableroWonderlyClases() {
    cy.get("#menu-item-3885 > .nav-link").click();
  }
  click_botonRegistrarProfesor() {
    // cy.get(".post-168 > .btn").click();
    cy.xpath("/html/body/div[2]/div[2]/div/div/div/main/article/a").click();
  }
  click_botonAgregarCurso() {
    cy.get(".post-232 > .btn-primary").click();
  }
  click_paginacionSiguiente() {
    cy.get(".next").click();
  }
}
