/// <reference types="cypress" />

export class Login{

    login_padre(email, contrasena){
        cy.get('#menu-item-139 > .nav-link').click()
        cy.get('#input_1').type(email)           //email
        cy.get('#input_2').type(contrasena)           //contrasena
        cy.get('#gform_submit_button_0').click()
    }
}