/// <reference types="cypress" />

export class MetodoPago{
    click_actualizarDatos(){
        cy.get('.entry-content > .btn').click()    //Te lleva al perfil del padre
    }

    click_actualizar(){
        cy.get('.card-footer > .btn').click()
    }
}