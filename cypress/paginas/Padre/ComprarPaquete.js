/// <reference types="cypress" />

export class ComprarPaquete{

    type_seleccionarHijo(nombre){
        cy.get('#input_25_29').select(nombre)
    }

    click_Aqui_nuevoHijo(){
        cy.get('#field_25_30 > p > a').click()
    }

    click_botonAqui(){
        cy.get('#field_25_46 > p > a').click()
    }

    click_suscribirse(){
        cy.get('#gform_submit_button_25').click()
    }
}