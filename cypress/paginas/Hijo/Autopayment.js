///<reference types='cypress'/>
export class Autopayment {
  verificarAutopayment() {
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
            // cy.log("No se puede habilitar");
            cy.xpath(
              "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[" +
                position +
                "]/td[4]/a"
            ).click();
            cy.get("#choice_43_1_2").click(); //opcion explorador
            cy.get("#gform_submit_button_43").click(); //Boton Enviar
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
          }
          position++;
        });
    }
  }
}
