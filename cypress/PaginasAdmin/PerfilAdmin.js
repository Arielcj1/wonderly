///<reference types="cypress" />

export class PerfilAdmin{
    type_nombreAdmin(nombre){
        cy.get('#input_2_5').clear().type(nombre)
    }

    type_apellidoAdmin(apellido){
        cy.get('#input_2_6').clear().type(apellido)
    }

    click_botonGuardar(){
        cy.get('#gform_submit_button_2').click()
    }
}