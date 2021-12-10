/// <reference types="cypress" />

export class Clase{
    click_UnirseClase(){
        cy.get('#2247').click()
    }

    click_CancelarClase(){
        cy.get('.mt-2').click()
    }

    click_Regresar(){
        cy.get('.container-fluid > :nth-child(2) > div > .btn').click()
    }

    click_AceptarCancelar(){
        cy.get('#deleteClassButton').click()
    }
}