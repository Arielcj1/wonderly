/// <reference types="cypress" />

export class MetodoPago{
    click_tablero_MetodoPago(){
        cy.get('#menu-item-1391 > .nav-link').click()
    }

    click_actualizarDatos(){
        cy.get('.entry-content > .btn').click()    //Te lleva al perfil del padre
    }

    click_actualizar(){
        cy.get('.card-footer > .btn').click()
    }

    //Actualiza datos de Tarjeta
    type_numTarjeta(numero){
        cy.get('#input_37_12_1').type(numero)
    }

    type_mesExp(mes){
        cy.get('#input_37_12_2_month').select(mes)
    }

    type_añoExp(anio){
        cy.get('#input_37_12_2_year').select(anio)    
    }

    type_cvc(cvc){
        cy.get('#input_37_12_3').type(cvc)
    }

    type_nomTitular(nombre){
        cy.get('#input_37_12_5').type(nombre)
    }

    click_enviar(){
        cy.get('#gform_submit_button_37').click()
    }
}