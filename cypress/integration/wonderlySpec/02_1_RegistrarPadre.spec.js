/// <reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Registro } from "../../paginas/Registro";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Perfil Padre',() => {
    const home = new Home()
    const registro = new Registro()

    beforeEach(() => {
        cy.visit('https://developers.learnwonderly.com/')
    })

    it('Registrar Padre', () => {
        home.click_pruebaGratis()
        registro.type_nombre("Julio");
        registro.type_apellidos("Roca");
        registro.type_correo("padre5@gmail.com");
        registro.type_contrasenia("12345");
        registro.type_numero("65266222");
        registro.click_siguiente();
        cy.get('h2').should('be.visible')
        
    })

})