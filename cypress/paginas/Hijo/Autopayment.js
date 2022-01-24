// Autor: Yanina Cardozo
///<reference types='cypress'/>
export class Autopayment {
  //PARA ACTIVAR:
  verificarAutopaymentActivar() {
    var position = 1;
    for (var i = 1; i <= 1; i++) {
      //de cuatro hijos a 1 hijo
      cy.xpath(
        "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[" +
          i +
          "]/td[4]/button[2]"
      )
        .invoke("text")
        .then((text) => {
          if (text == "Activar") {
            cy.xpath(
              "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[" +
                position +
                "]/td[4]/button[2]"
            ).click(); //Boton Activar
            cy.wait(3000);
            cy.get(
              "#modalSubscription > .modal-dialog > .modal-content > .modal-footer > .btn"
            ).click(); //Modal boton aceptar
            cy.wait(4000);
          } else {
            cy.log("Ya se ha presionado Activar anteriormente");
            cy.xpath(
              "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[" +
                position +
                "]/td[4]/button[2]"
            ).click();
          }
          position++;
        });
    }
  }

  //PARA CANCELAR:
  verificarAutopaymentCancelar() {
    var position = 1;
    for (var i = 1; i <= 1; i++) {
      cy.xpath(
        "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[" +
          i +
          "]/td[4]/button[2]"
      )
        .invoke("text")
        .then((text) => {
          if (text == "Cancelar") {
            cy.xpath(
              "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[" +
                position +
                "]/td[4]/button[2]"
            ).click();
          } else {
            cy.log("Ya se ha presionado Cancelar anteriormente");
            cy.xpath(
              "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[" +
                position +
                "]/td[4]/button[2]"
            ).click();
          }
          position++;
        });
    }
  }

  //PARA COMPRAR LA MEMBRESIA GENIO INVENTOR Y EXPLORADOR
  ActualizarMembresia() {
    var position = 1;
    for (var i = 1; i <= 1; i++) {
      //de cuatro hijos a 1 hijo
      cy.xpath(
        "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[" +
          i +
          "]/td[4]/button[2]"
      )
        .invoke("text")
        .then((text) => {
          if (text == "Cancelar") {
            cy.xpath(
              "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[" +
                position +
                "]/td[4]/a"
            ).click();

            for (var j = 1; j <= 3; j++) {
              cy.xpath(
                "/html/body/div[2]/div[2]/div/div/div/main/article/div[3]/div/form/div[1]/div/fieldset/div/div/div[" +
                  j +
                  "]/input"
              ).click(); //opcion genio, inventor y explorador
              cy.get("#gform_submit_button_43").click(); //Boton Enviar
              cy.xpath(
                "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[" +
                  position +
                  "]/td[4]/a"
              ).click();
            }
          } else {
            cy.xpath(
              "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[" +
                position +
                "]/td[4]/button[2]"
            ).click(); //Boton Activar
            cy.wait(3000);
            cy.get(
              "#modalSubscription > .modal-dialog > .modal-content > .modal-footer > .btn"
            ).click(); //Modal boton aceptar
            cy.wait(4000);
            cy.xpath(
              "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[" +
                position +
                "]/td[4]/a"
            ).click();

            for (var j = 1; j <= 3; j++) {
              cy.xpath(
                "/html/body/div[2]/div[2]/div/div/div/main/article/div[3]/div/form/div[1]/div/fieldset/div/div/div[" +
                  j +
                  "]/input"
              ).click(); //opcion genio, inventor y explorador
              cy.get("#gform_submit_button_43").click(); //Boton Enviar
              cy.xpath(
                "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[" +
                  position +
                  "]/td[4]/a"
              ).click();
              cy.wait(3000);
            }
          }
          position++;
        });
    }
  }
}
