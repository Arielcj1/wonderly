/// <reference types="cypress" />

export class Perfiles {
  buscar_hijo() {
    var aux = 3;
    cy.get(":nth-child(" + aux + ") > .seleccionar-hijo-modal > .mb-0")
      .invoke("text")
      .then((text) => {
        if (text == nombre) {
          cy.get(
            ":nth-child(" + aux + ") > .seleccionar-hijo-modal > .mb-0"
          ).click();
        } else {
          aux++;
          cy.get(":nth-child(" + aux + ") > .seleccionar-hijo-modal > .mb-0")
            .invoke("text")
            .then((text) => {
              if (text == nombre) {
                cy.get(
                  ":nth-child(" + aux + ") > .seleccionar-hijo-modal > .mb-0"
                ).click();
              } else {
                aux++;
                cy.get(
                  ":nth-child(" + aux + ") > .seleccionar-hijo-modal > .mb-0"
                )
                  .invoke("text")
                  .then((text) => {
                    if (text == nombre) {
                      cy.get(
                        ":nth-child(" +
                          aux +
                          ") > .seleccionar-hijo-modal > .mb-0"
                      ).click();
                    } else {
                      aux++;
                      cy.get(
                        ":nth-child(" +
                          aux +
                          ") > .seleccionar-hijo-modal > .mb-0"
                      ).click();
                    }
                  });
              }
            });
        }
      });
  }

  click_registrarHijo() {
    cy.get(".mt-3 > .btn").click();
  }

  botonAñadirOtroHijo() {
    cy.get(".entry-content > :nth-child(3) > .btn").click();
  }
  cambiarHijo() {
    cy.xpath(
      "/html/body/div[2]/header/div/nav/div[2]/ul/li[5]/ul/li[1]/a"
    ).click({ force: true });
    cy.wait(2000);
  }

  botonAñadirhijoPV() {
    cy.get(".text-center > .btn").click();
  }
}
