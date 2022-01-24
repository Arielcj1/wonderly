// Autor: Yanina Cardozo
///<reference types= "cypress" />

export class MembresiasHijo {
  // Verificar membresia
  verificarMembresia(descripcion) {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[2]/div/div/div/div/div/div/div[2]/div/div/div/div/div[3]/a"
    )
      .invoke("text")
      .then((text) => {
        if (text == "Inscríbete") {
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[2]/div/div/div/div/div/div/div[2]/div/div/div/div/div[3]/a"
          ).click(); //Click en el boton Inscribete
          cy.wait(5000);
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/section/div[4]/div/div/div[3]/a[1]"
          ).click();

          cy.xpath("/html/body/div[2]/div[4]/div/div/div[2]/p")
            .invoke("text")
            .then((text) => {
              if (text == descripcion) {
                cy.get(
                  "#modalBooking > .modal-dialog > .modal-content > .modal-header > .close > span"
                ).click();
              }
            });
        } else if (text == "Entrar a la clase") {
          cy.log("El hijo ya esta inscrito a la clase");
        }
      });
  }

  //   Compra de membresias Explorador, Inventor y Genio
  select_MembresiaHijo(hijo) {
    cy.get("#input_25_29").select(hijo);
  }
  botonSubscribirse() {
    cy.get("#gform_submit_button_25").click();
  }

  botonMembresiasCompradas() {
    cy.get(".mt-5 > .btn").click();
  }

  comprarTipoDeMembresia(hijo) {
    cy.get("#input_25_29").select(hijo);
    cy.get("#gform_submit_button_25").click(); //Subscribirse
    cy.get(".mt-5 > .btn").click(); //boton membresias compradas
    cy.get(
      ":nth-child(1) > :nth-child(3) > .list-group > .list-group-item"
    ).should("be.visible");
    cy.get(".custom-logo").click();
  }

  //Inscripcion clase con membresia Explorador 31 dias, Inventor 31 dias, Genio 31 dias

  tipoDeMembresiaParaComprar() {
    for (var i = 1; i <= 7; i++) {
      cy.get(".schedule-date-slider > .slick-next").click(i);
      cy.wait(1000);
    }
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[1]/div/div/div/ul/ul/div/div/div[39]/div/li/a"
    ).click(); //Click en la fecha
    cy.wait(3000);
    cy.contains("Curso 04 de marzo Ingles II").click(); //Cambio de nombre del curso
  }

  //  Mensaje de advertencia de la membresia
  MensajeAdvertencia() {
    cy.get("#gform_submit_button_25").click(); //Subscribir
    cy.get(".title")
      .should("contain.text", "Hubo un problema con tu envío.")
      .should("be.visible");
    cy.get(
      "#validationModal > .modal-dialog > .modal-content > .modal-header > .close > span"
    ).click(); //Salir
    // }
  }

  // Verificar el detalle de la compra de la memebresia Explorador
  verificarDetalleCompraMembresiaExplorador(membresia, precio) {
    cy.get(".card-body > :nth-child(1)")
      .invoke("text")
      .then((MembresiaExplorador) => {
        cy.get(".list-group-item")
          .invoke("text")
          .then((precioExplorador) => {
            if (
              MembresiaExplorador.trim() == membresia.trim() &&
              precioExplorador.trim() &&
              precio.trim()
            ) {
              cy.get(".card-body > :nth-child(1)").should("be.visible");
              cy.get(".list-group-item").should("be.visible");
              cy.wait(2000);
            }
          });
      });
  }

  // Inventor
  verificarDetalleCompraMembresiaInventor(membresia, precio) {
    cy.get(".card-body > :nth-child(1)")
      .invoke("text")
      .then((MembresiaInventor) => {
        cy.get(".list-group-item")
          .invoke("text")
          .then((precioExplorador) => {
            if (
              MembresiaInventor.trim() == membresia.trim() &&
              precioExplorador.trim() &&
              precio.trim()
            ) {
              cy.get(".card-body > :nth-child(1)").should("be.visible");
              cy.get(".list-group-item").should("be.visible");
              cy.wait(2000);
            }
          });
      });
  }

  // // Genio
  verificarDetalleCompraMembresiaGenio(membresia, precio) {
    cy.get(".card-body > :nth-child(1)")
      .invoke("text")
      .then((MembresiaGenio) => {
        cy.get(".list-group-item")
          .invoke("text")
          .then((precioExplorador) => {
            if (
              MembresiaGenio.trim() == membresia.trim() &&
              precioExplorador.trim() &&
              precio.trim()
            ) {
              cy.get(".card-body > :nth-child(1)").should("be.visible");
              cy.get(".list-group-item").should("be.visible");
              cy.wait(2000);
            }
          });
      });
  }
}
