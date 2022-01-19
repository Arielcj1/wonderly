/// <reference types="cypress" />

export class MisHijos {
    click_Tablero_MisHijos(){
        cy.get('#menu-item-211 > .nav-link').click()
    }

    click_RegistrarHijo(){
        cy.get('.entry-content > .mt-3').click()
    }


}