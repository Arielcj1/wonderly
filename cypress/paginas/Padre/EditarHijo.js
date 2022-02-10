/// <reference types="cypress" />

export class EditarHijo{

    typeEditarNombre(nombre){
        cy.get('#input_46_4').clear().type(nombre)
    }

    typeEditarApellido(apellido){
        cy.get('#input_46_5').clear().type(apellido)
    }

    typeFechaNacimiento(fecha){
        cy.get('#input_46_2').clear().type(fecha)
    }

    clickBotonGuardar(){
        cy.get('#gform_submit_button_46').click()
    }
}