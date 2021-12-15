/// <reference types="cypress" />
<<<<<<< HEAD

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
=======
export class RegistrarHijo {
  type_nombre(nombre) {
    cy.get("#name_1").type(nombre);
  }
  type_apellido(apellido) {
    cy.get("#surname_1").type(apellido);
  }
  type_fechaDeNacimiento(fechaDeNacimiento) {
    cy.get("#birthday_1").type(fechaDeNacimiento);
    cy.wait(1500);
    cy.get("body").click(0, 0);
  }
  click_botonExploraCursos() {
    cy.get(".form_footer > .btn").click();
  }
}
>>>>>>> WorkinginProgressYani
