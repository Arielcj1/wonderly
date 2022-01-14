/// <reference types="cypress" />

export class Home {
  boton_RegistroGratis() {
    cy.get("#free-trial-home > .btn").click();
  }

  click_IniciaSesion() {
    cy.get("#menu-item-139 > .nav-link").click();
  }
  click_Destrezas() {
    cy.get("#menu-item-17 > .nav-link").click();
  }

  click_PorqueWonderly() {
    // cy.get("#menu-item-14 > .nav-link").click();
    cy.get("#menu-item-71 > .nav-link").click();
  }
  click_Flecha_Izq() {
    cy.get(".schedule-date-slider > .slick-prev").click();
  }
  click_Flecha_Der() {
    cy.get(".schedule-date-slider > .slick-next").click();
  }
  click_dia() {
    cy.get(
      '[data-slick-index="1"] > div > li > .trigger-schedule-clases'
    ).click();
  }

  click_diaSchedule() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[1]/div/div/div/ul/ul/div/div/div[8]/div/li/a"
    ).click();
  }
  click_Destrezas2() {
    cy.get(".mb-5 > .btn").click(); //boton de Explorar nuestras destrezas!
  }
  click_Membresias() {
    cy.get("#menu-item-724 > .nav-link").click();
  }

  click_DesplazarAbajo() {
    cy.get(".down-link").click();
  }

  click_DesplazarArriba() {
    cy.get(".up-link").click();
  }

  click_LogoWonderly() {
    cy.get(".custom-logo").click();
  }

  click_Membresia_Explorador() {
    cy.get(
      ".slick-current > :nth-child(1) > .mb-3 > .description > .btn"
    ).click();
  }

  click_Membresia_Inventor() {
    cy.get(
      '[data-slick-index="1"] > :nth-child(1) > .mb-3 > .description > .btn'
    ).click();
  }

  click_Membresia_Genio() {
    cy.get(
      '[data-slick-index="2"] > :nth-child(1) > .mb-3 > .description > .btn'
    ).click();
  }

  click_MenuUsuario() {
    // cy.get("#navbarDropdown").click();
    cy.get("#menu-item-142 > #navbarDropdown").click();
  }

  click_salir() {
    cy.get("#menu-item-143 > .dropdown-item").click();
  }

  click_seccionOnDemand() {
    cy.get("#ondemand-tab").click();
    // cy.xpath("/html/body/div[4]/div[4]").click();
  }

  click_seccionEnVivo() {
    cy.get("#vivo-tab").click();
  }

  click_pestañaCursos() {
    cy.get("#menu-item-5424 > .nav-link").click();
  }

  boton_7diasGratis() {
    //Boton menu 7 dias gratis
    cy.get("#menu-item-6020 > .nav-link").click();
  }

  boton_conMovimiento7diasGratis() {
    cy.get(".mb-0 > .btn").click();
  }

  //  Menu de Destrezas

  menu_Robotica() {
    cy.get("#menu-item-6026 > .nav-link").click();
  }
  menu_Programacion() {
    cy.get("#menu-item-6027 > .nav-link").click();
  }
  menu_DesarrolloVideoJuegos() {
    cy.get("#menu-item-6028 > .nav-link").click();
  }
  menu_Matematicas() {
    cy.get("#menu-item-6029 > .nav-link").click();
  }
  menu_Ingles() {
    cy.get("#menu-item-6030 > .nav-link").click();
  }

  impactoSocial() {
    cy.get("#menu-item-6094 > .nav-link").click();
  }
  prensa() {
    cy.get("#menu-item-6097 > .nav-link").click();
  }
}
