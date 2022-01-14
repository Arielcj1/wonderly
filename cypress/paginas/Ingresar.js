/// <reference types="cypress" />

export class Ingresar {
    type_Correo(correo){
        cy.get('#input_1').type(correo)
    }

    type_contrasena(contrasena){
        cy.get('#input_2').type(contrasena)
        //cy.get('#input_2').type(contrasena + '{enter}') ingresa el pass y luego presiona Enter.
    }

    click_continuar(){
        cy.get('#gform_submit_button_0').click()
    }

    close_modalMessage(){
        cy.get('.modal-body > .close > span').click()
    }
}