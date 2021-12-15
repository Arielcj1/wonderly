/// <reference types="cypress" />

export class Home {
  click_IniciaSesion() {
    cy.get("#menu-item-139 > .nav-link").click();
  }
  click_Destrezas() {
    cy.get("#menu-item-17 > .nav-link").click();
  }
  click_clases_sinRegistro() {
    //cy.get('#3630').click()
    //cy.contains('Reservar mi clase').click()
    cy.xpath(
      "/html/body/div[2]/div[3]/div/div/div/main/article/div/section[2]/div[3]/div/div/div/div/div[1]/div/div/div[3]/button"
    ).click();
  }

  click_clase_conRegistro() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div/div/div/div/div[1]/div/div/div[3]/button"
    ).click();
  }

  click_clase2247() {
    //cy.get('#2247').click()
    cy.get("#2247")
      .invoke("text")
      .then((text) => {
        if (text == "Reservar mi clase") {
          cy.get("#2247").click();
        } else {
          cy.log("Esta clase ya esta reservada");
        }
      });
  }

  click_clase_Cancelar() {
    //cy.get('#2247').click()
    cy.get("#2247")
      .invoke("text")
      .then((text) => {
        if (text != "Reservar mi clase") {
          cy.get("#2247").click();
        } else {
          cy.log("Esta clase no esta reservada");
        }
      });
  }

  click_PorqueWonderly() {
    cy.get("#menu-item-14 > .nav-link").click();
  }
  click_Flecha_Izq() {
    cy.get(".slick-prev").click();
  }
  click_Flecha_Der() {
    cy.get(".slick-next").click();
  }
  click_Jueves() {
    cy.get(
      '[data-slick-index="1"] > div > li > .trigger-schedule-clases'
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
    cy.get("#navbarDropdown").click();
  }

  click_OnDemandSeccion() {
    cy.get("#ondemand-tab").click();
  }
  click_pruebaGratis() {
    cy.get("#free-trial-home > .btn").click();
  }
  // El boton es Registra a tu hijo(a) desde la bienvenida "Wooho"
  click_botonRegistraTuHijo() {
    cy.get(".welcome_parent > .btn").click();
  }
}
