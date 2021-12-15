/// <reference types="cypress" />

export class RegistrarHijo{
    type_nombreHijo(nombre){
        cy.get('#input_24_14_3').type(nombre)
    }

    type_apellidoHijo(apellido){
        cy.get('#input_24_14_6').type(apellido)
    }

    type_fechaNacimiento(fechaNac){
        cy.get('#input_24_13').type(fechaNac)    //  DD/MM/AAAA
    }

    click_registrar(){
        cy.get('#gform_submit_button_24').click()
    }
}
