/// <reference types="cypress" />

export class Home {
  click_IniciaSesion() {
    cy.get("#menu-item-139 > .nav-link").click();
  }

  opcionRegistrateAqui() {
    cy.get(
      '.gf_login_links > [href="https://developers.learnwonderly.com/registrar-padre/"]'
    ).click();
  }
  opcionRegistrateAquiAutomatico() {
    cy.get(
      '.gf_login_links > [href="https://developers.learnwonderly.com/registrar-padre/?referrer_url=https://developers.learnwonderly.com/curso/curso-prueba-i-tester/"]'
    ).click();
  }
  botonWonderlyEnAccion() {
    cy.get(".openVideo").click();
    cy.wait(3000);
  }
  clickCerrarVideoWonderly() {
    cy.get(".mfp-close").click;
  }

  click_PorqueWonderly() {
    cy.get("#menu-item-71 > .nav-link").click();
  }

  //Pagina cursos
  clickOnDemand() {
    cy.get("#ondemand-tab").click();
    cy.wait(2000);
  }
  clickEnVivo() {
    cy.get("#vivo-tab").click();
    cy.wait(2000);
  }

  //Home

  onDemandHome() {
    cy.get("#ondemand-tab").click();
  }

  //Materias Home:
  materiaProgramacionHome() {
    cy.get(":nth-child(1) > .text-center > a > .mb-0").click();
  }
  materiaDesarrolloDeVideoJuegosHome() {
    cy.get(":nth-child(2) > .text-center > a > .mb-0").click({ force: true });
  }
  materiaRoboticaHome() {
    cy.get(":nth-child(3) > .text-center > a > .mb-0").click();
  }
  materiaMatematicasHome() {
    cy.get(":nth-child(4) > .text-center > a > .mb-0").click();
  }
  materiaInglesHome() {
    cy.get(":nth-child(5) > .text-center > a > .mb-0").click();
  }

  click_Flecha_Izq() {
    cy.get(".curos-ondemand-list > .slick-prev").click();
    // cy.get(".slick-prev").click()
    cy.wait(1000);
  }
  click_Flecha_Der() {
    cy.get(".curos-ondemand-list > .slick-next").click();
    // cy.get(".slick-next").click();
    cy.wait(1000);
  }
  click_dia() {
    // obs.
    cy.get(
      '[data-slick-index="1"] > div > li > .trigger-schedule-clases'
    ).click();
  }

  click_diaSchedule() {
    //obs.
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[1]/div/div/div/ul/ul/div/div/div[8]/div/li/a"
    ).click();
  }
  click_Destrezas2() {
    //obs.
    cy.get(".mb-5 > .btn").click(); //boton de Explorar nuestras destrezas!
  }
  click_Membresias() {
    cy.get("#menu-item-724 > .nav-link").click();
  }

  clickDesplazarAbajo() {
    cy.get(".down-link").click();
    cy.wait(2000);
  }

  clickDesplazarArriba() {
    cy.get(".up-link").click();
    cy.wait(2000);
  }

  click_LogoWonderly() {
    cy.get(".custom-logo").click();
  }

  botonComprarMembresia() {
    cy.get(".parent-user > .btn").click();
  }
  click_Membresia_Explorador() {
    cy.get(".parent-user > .btn").click();
  }

  click_Membresia_Inventor() {
    //obs.
    cy.get(
      '[data-slick-index="1"] > :nth-child(1) > .mb-3 > .description > .btn'
    ).click();
  }

  click_Membresia_Genio() {
    //obs.
    cy.get(
      '[data-slick-index="2"] > :nth-child(1) > .mb-3 > .description > .btn'
    ).click();
  }

  click_MenuUsuario() {
    cy.get("#menu-item-6738 > .nav-link").click();
  }

  clickSalir() {
    cy.xpath(
      "/html/body/div[2]/header/div/nav/div[2]/ul/li[5]/ul/li[2]/a"
      // "/html/body/div[2]/header/div/nav/div[2]/ul/li[5]/ul/li[4]/a"
      // "/html/body/div[2]/header/div/nav/div[2]/ul/li[4]/ul/li[4]/a"
    ).click({ force: true });
  }

  clickSalirHijo() {
    cy.xpath(
      "/html/body/div[2]/header/div/nav/div[2]/ul/li[5]/ul/li[4]/a"
    ).click({ force: true });
  }

  clickPestañaCursos() {
    cy.get("#menu-item-5424 > .nav-link").click();
  }

  boton14diasGratis() {
    //Boton menu 14 dias gratis
    cy.get("#menu-item-6020 > .nav-link").click();
  }

  botonConMovimiento14diasGratis() {
    cy.get(".mt-5 > .btn").click();
  }

  impactoSocial() {
    cy.get("#menu-item-6094 > .nav-link").click();
  }
  logoElPitazo() {
    cy.get(":nth-child(1) > .logo").click();
    cy.wait(2000);
    cy.get(":nth-child(1) > .logo").click();
  }
  logoFeYAlegria() {
    cy.get(":nth-child(2) > .logo").click();
    cy.wait(2000);
    cy.get(":nth-child(2) > .logo").click();
  }
  prensa() {
    cy.get("#menu-item-6097 > .nav-link").click();
  }
  membresiasMenuAbajo() {
    cy.get("#menu-item-724 > .nav-link").click();
  }

  verificarExistenciaElemento(contenedor, elemento, fileName) {
    cy.get(contenedor).then((body) => {
      if (body.find(elemento).length > 0) {
        cy.writeFile(`cypress/fixtures/verificadores/${fileName}.json`, {
          verify: "true",
        });
        cy.log("EXISTE EL ELEMENTO");
      } else {
        cy.writeFile(`cypress/fixtures/verificadores/${fileName}.json`, {
          verify: "false",
        });
        cy.log("NO EXISTE EL ELEMENTO");
      }
    });
  }
}
