/// <reference types="cypress" />

export class AgregarNuevoHijo{
    
    type_NombreHijo(nombre){
        cy.get('#name_1').type(nombre)
    }

    type_ApellidoHijo(apellido){
        cy.get('#surname_1').type(apellido)
    }

    type_Birthday(fecha){
        cy.get('#birthday_1').type(fecha)
    }

    click_AgregarHijo(){
        cy.get(':nth-child(4) > .btn').click()
    }

    type_NombreHijo2(nombre){
        cy.get('#name_2').type(nombre)
    }

    type_ApellidoHijo2(apellido){
        cy.get('#surname_2').type(apellido)
    }
    type_Birthday2(fecha){
        cy.get('#birthday_2').type(fecha)
    }

    // eliminarHijo2(){
    //     cy.get('#\32  > .text-right > .btn_round > .svg-inline--fa').click()
    // }

    botonExploraCursos(){
        cy.get('.form_footer > .btn').click()
    }

}