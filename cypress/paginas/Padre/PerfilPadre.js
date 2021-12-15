///<reference types="cypress"/>
export class PerfilPadre {
  //submenu del perfil
  click_mostrarSubmenu() {
    cy.get("#navbarDropdown").click({ force: true });
  }
  click_perfil() {
    cy.get("#menu-item-319 > .dropdown-item").click();
  }
  click_perfiles() {
    cy.get("#menu-item-2667 > .dropdown-item").click();
  }
  click_clasesHijo() {
    cy.get("#menu-item-2666 > .dropdown-item").click();
  }
  click_salir() {
    cy.get("#menu-item-143 > .dropdown-item").click({ force: true });
  }
}
