///<reference types= "cypress" />
// Casos de prueba realizado por Yanina Cardozo

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
    cy.get(".mb-5 > .btn").click();
  }

  Membresia(hijo) {
    for (var i = 1; i <= 3; i++) {
      cy.xpath(
        "/html/body/div[2]/div[2]/div/div/div/main/article/div/div/section[3]/div/div/div[1]/div/div/div[" +
          i +
          "]/div/div/div[2]/a"
      ).click();
      cy.get("#input_25_29").select(hijo);
      cy.get("#gform_submit_button_25").click(); //Subscribirse
      cy.get(".mx-2 > :nth-child(1)").should("be.visible");
      cy.get(".mb-5 > .btn").click(); //boton membresias compradas
      cy.get(
        ":nth-child(1) > :nth-child(3) > .list-group > .list-group-item"
      ).should("be.visible");
      cy.get(".custom-logo").click();
    }
  }

  //  Mensaje de advertencia de la membresia
  MensajeAdvertencia() {
    for (var i = 1; i <= 3; i++) {
      cy.xpath(
        "/html/body/div[2]/div[2]/div/div/div/main/article/div/div/section[3]/div/div/div[1]/div/div/div[" +
          i +
          "]/div/div/div[2]/a"
      ).click();
      cy.get("#gform_submit_button_25").click();
      cy.get(".title")
        .should("contain.text", "Hubo un problema con tu envío.")
        .should("be.visible");
      cy.get(".modal-body > .close > span").click(); //Salir
      cy.get(".custom-logo").click();
    }
  }

  // Verificar el detalle de la compra de la memebresia Explorador
  verificarDetalleCompraMembresia(membresia, precio) {
    cy.get(".card-body > :nth-child(1)")
      .invoke("text")
      .then((text) => {
        if (text.trim() == membresia.trim()) {
          cy.get(".list-group-item")
            .invoke("text")
            .then((text) => {
              cy.log("precio ", text);
              if (text.trim() == precio.trim()) {
                cy.get(".card-body > :nth-child(1)").should("be.visible");
                cy.get(".list-group-item").should("be.visible");
              }
            });
        }
      });
  }

  // Inventor
  verificarDetalleCompraMembresia(membresia, precio) {
    cy.get(".card-body > :nth-child(1)")
      .invoke("text")
      .then((tipoMembresiaInventor) => {
        cy.get(".list-group-item")
          .invoke("text")
          .then((precioInventor) => {
            if (
              tipoMembresiaInventor.trim() === membresia.trim() &&
              precioInventor.trim() == precio.trim()
            ) {
              cy.get(".card-body > :nth-child(1)").should("be.visible");
              cy.get(".list-group-item").should("be.visible");
            }
          });
      });
  }

  // Genio
  verificarDetalleCompraMembresia(membresia, precio) {
    cy.get(".card-body > :nth-child(1)")
      .invoke("text")
      .then((tipoMembresiaGenio) => {
        cy.get(".list-group-item")
          .invoke("text")
          .then((precioInventor) => {
            if (
              tipoMembresiaGenio.trim() === membresia.trim() &&
              precioInventor.trim() == precio.trim()
            ) {
              cy.get(".card-body > :nth-child(1)").should("be.visible");
              cy.get(".list-group-item").should("be.visible");
            }
          });
      });
  }

  //Inscripcion clase con membresia Explorador 31 dias
  verificarInscripcionExplorador() {
    for (var i = 1; i <= 7; i++) {
      cy.get(".schedule-date-slider > .slick-next").click(i);
      cy.wait(1000);
    }
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[1]/div/div/div/ul/ul/div/div/div[39]/div/li/a"
    ).click();
    cy.wait(3000);
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[2]/div/div/div/div/div/div/div[1]/div/div/div/div/div[3]/a"
    ).click(); //click boton Inscribete
  }

  verificarInscripcionInventor() {
    for (var i = 1; i <= 7; i++) {
      cy.get(".schedule-date-slider > .slick-next").click(i);
      cy.wait(1000);
    }
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[1]/div/div/div/ul/ul/div/div/div[39]/div/li/a"
    ).click();
    cy.wait(3000);
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[2]/div/div/div/div/div/div/div[1]/div/div/div/div/div[3]/a"
    ).click(); //click boton Inscribete
  }

  verificarInscripcionGenio() {
    for (var i = 1; i <= 7; i++) {
      cy.get(".schedule-date-slider > .slick-next").click(i);
      cy.wait(1000);
    }
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[1]/div/div/div/ul/ul/div/div/div[39]/div/li/a"
    ).click();
    cy.wait(3000);
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[2]/div/div/div/div/div/div/div[1]/div/div/div/div/div[3]/a"
    ).click(); //click boton Inscribete
  }
}
