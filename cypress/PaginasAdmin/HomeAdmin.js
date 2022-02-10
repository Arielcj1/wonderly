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

  click_tableroWonderlyOnDemand(){
    cy.get('#menu-item-7272 > .nav-link').click()
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

  click_tableroReporteMembresias(){
    cy.get('#menu-item-13388 > .nav-link').click()   
  }

  click_tableroReporteReservas(){
    cy.get('#menu-item-13597 > .nav-link').click()
  }
}
