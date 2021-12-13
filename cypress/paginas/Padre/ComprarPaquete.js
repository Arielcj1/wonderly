/// <reference types="cypress" />

export class ComprarPaquete{

    type_seleccionarHijo(nombre){
        cy.get('#input_25_29').select(nombre)
    }

    type_numTarjeta(numero){
        //cy.get('#input_25_33').type()
        //cy.xpath('/html/body/div/form/div/div[2]/span[1]/span[2]/div/div[2]/span/input').click()
        //cy.xpath('/html/body/div/form/div/div[2]/span[1]/span[2]/div/div[2]/span/input').type(numero)
        cy.iframe('.__PrivateStripeElement > iframe').contains('Card number').type(numero)
    }

    type_mesAnio(mesAnio){
        cy.xpath('/html/body/div/form/div/div[2]/span[2]/span/span/input').type(mesAnio)
        
    }

    type_cvc(cvc){
        cy.xpath('/html/body/div/form/div/div[2]/span[3]/span/span/input').type(cvc)
    }

    type_mesExp(){
        cy.get('#input_25_34').type()
    }

    type_añoExp(){
        cy.get('#input_25_35').type()
        
    }

    type_nomTitular(nombre){
        //cy.get('#input_25_36').type()
        cy.get('#input_25_1_5').type(nombre)
    }

    click_suscribirse(){
        cy.get('#gform_submit_button_25').click()
    }
}