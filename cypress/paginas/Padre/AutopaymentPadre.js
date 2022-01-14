///<reference types='cypress'/>

export class AutopaymentPadre { 
    verificarAutopayment(){
        cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[1]/td[4]/button[2]').invoke('text').then((text) => {
            if (text == 'Activar'){
                cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[1]/td[4]/button[2]').click()  //Boton Activar
                cy.get('#modalSubscription > .modal-dialog > .modal-content > .modal-footer > .btn').click()  // Boton aceptar para confirmar
                cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[1]/td[4]/a').click()   //Boton Actualizar Membresia
            }else{
                cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[1]/td[4]/button[2]').click()  //Boton cancelar
                cy.get('#modalSubscription > .modal-dialog > .modal-content > .modal-footer > .btn').click()   //Boton Aceptar
            }
        })
    }

    click_opcionGenio(){
        cy.get('#choice_43_1_0').click()      //Genio
    }

    click_opcionInventor(){
        cy.get('#choice_43_1_1').click()      //inventor
    }

    click_opcionExplorador(){
        cy.get('#choice_43_1_2').click()      //Explorador
    }

    click_botonEnviar(){
        cy.get('#gform_submit_button_43').click()   //Enviar
    }

}