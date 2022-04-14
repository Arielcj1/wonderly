/// <reference types="cypress" />

export class Cursos {
  //CLICK EN EL HOME//////////////////////////////////////////////////////////

  tabOnDemand() {
    cy.get("#ondemand-tab").click();
  }
  tabEnVivo() {
    cy.get("#vivo-tab").click();
  }

  botonComienzaOndemandUsuario() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/div/section[1]/div[3]/div[2]/div/div/div/div/div[27]/div/div/div/div/div[3]/a"
    ).click();
  }

  botonComienzaOnDemandGuest() {
    cy.xpath(
      "/html/body/div[2]/div[3]/div/div/div/main/article/div/div/section[1]/div[3]/div[2]/div/div/div/div/div[10]/div/div/div/div/div[3]/a"
    ).click();
  }

  botonComienzaEnVivoUsuario() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/div/section[1]/div[3]/div[1]/div/div/div/div/div/div[16]/div/div/div/div/div[3]/a"
    ).click();
  }

  botonVerificarNombreEnVivoUsuario(nombreCurso) {
    cy.log("El nombre de la clase es", nombreCurso);
    cy.wait(2000);
    var position = 1;
    for (let i = 1; i <= 25; i++) {
      var encontrado = 0;
      cy.xpath(
        "/html/body/div[2]/div[2]/div/div/div/main/article/div/div/section[1]/div[3]/div[1]/div/div/div/div/div/div[" +
          i +
          "]/div/div/div/div/div[2]/p"
      )
        .invoke("text")
        .then((text) => {
          cy.log("El nombre del curso es: " + i + "", text);
          if (text.trim() == nombreCurso.trim()) {
            encontrado = position;
          } else {
            cy.log("No se ha encontrado el curso");
          }
          if (position == 25) {
            cy.xpath(
              "/html/body/div[2]/div[2]/div/div/div/main/article/div/div/section[1]/div[3]/div[1]/div/div/div/div/div/div[" +
                encontrado +
                "]/div/div/div/div/div[3]/a"
            ).click();
            cy.get("h4").should("be.visible");
          }
          position++;
        });
    }
  }

  verificarNombreOnDemandHome(nombreOndemand) {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/div/section[1]/div[3]/div[2]/div/div/div/div/div[8]/div/div/div/div/div[2]/p"
    )
      .invoke("text")
      .then((text) => {
        cy.log("//////////////////////", text);
        if (text == nombreOndemand) {
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/main/article/div/div/section[1]/div[3]/div[2]/div/div/div/div/div[13]/div/div/div/div/div[3]/a"
          ).click();
        } else {
          cy.log("Curso On demand no se encuentra");
        }
      });
  }

  botonComienzaHomeEnVivoGuest() {
    cy.xpath(
      "/html/body/div[2]/div[3]/div/div/div/main/article/div/div/section[1]/div[3]/div[1]/div/div/div/div/div/div[5]/div/div/div/div/div[3]/a"
    ).click();
    cy.wait(2000);
  }

  botonEntraPrimeraClase() {
    cy.get(".course-video > .btn").click();
    // cy.get(".col-lg-3 > .btn").click();
    cy.wait(2000);
    cy.log("****************");
  }

  linkClaseContenido() {
    cy.xpath(
      " /html/body/div[2]/div[2]/div/div/div/section/div[3]/div[1]/p[3]/a"
    ).click();
    cy.wait(3000);
  }

  //CLICK EN PESTANAS CURSOS//////////////////////////////////////////////////////////

  clickOnDemand() {
    cy.get("#ondemand-tab").click();
    cy.wait(2000);
  }
  clickEnVivo() {
    cy.get("#vivo-tab").click();
    cy.wait(2000);
  }
  botonComienzaCursosOnDemand() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section/div[3]/div[2]/div/div/div[1]/div[2]/div/div/div[3]/a"
    ).click();
  }

  botonComienzaCursosGuest() {
    cy.xpath(
      "/html/body/div[2]/div[3]/div/div/div/main/article/div/section/div[3]/div[1]/div/div/div[1]/div[6]/div/div/div[3]/a"
    ).click({ force: true });
    cy.wait(3000);
  }
  botonComienzaCursos() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section/div[3]/div[1]/div/div/div[1]/div[3]/div/div/div[3]/a"
      // "/html/body/div[2]/div[2]/div/div/div/main/article/div/div/section[1]/div[3]/div[1]/div/div/div/div/div/div[7]/div/div/div/div/div[3]/a"
    ).click({ force: true });
    cy.wait(3000);
  }

  segundoBotonInscribeteGuest() {
    cy.xpath(
      "/html/body/div[2]/div[3]/div/div/div/section/div[4]/div/div/div[1]/div/div[1]/div[2]/div/a"
    ).click(); //Segundo boton Inscribete
    cy.wait(2000);
  }

  segundoBotonInscribete() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[1]/div/div/div[2]/div/a"
    ).click(); //Segundo boton Inscribete
    cy.wait(2000);
  }
}
