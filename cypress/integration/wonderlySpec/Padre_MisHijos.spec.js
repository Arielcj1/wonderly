/// <reference types="cypress" />

import { Login } from "../../paginas/login";
import { MisHijos } from "../../paginas/Padre/MisHijos";
import { Home } from "../../paginas/Home";
import { Perfil } from "../../paginas/Padre/Perfil";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Tablero Mis Hijos', () =>{

    const login = new Login()
    const mishijos = new MisHijos()
    const home = new Home()
    const perfil = new Perfil()
    const registrarhijo = new RegistrarHijo()

    beforeEach(() => {
        cy.visit('https://developers.learnwonderly.com/')
        login.login_padre('julioroca14@gmail.com','12345')
        perfil.click_mostrarSubmenu()
        perfil.click_perfil()
      })

    it('Ir al Tablero Mis Hijos', () => {
        
        mishijos.click_Tablero_MisHijos()
    })

    it('Click en Conectar hijo', () => {

        mishijos.click_Tablero_MisHijos()
        mishijos.click_conectarDesconectar('Conectar')
        mishijos.click_conectarDesconectar('Conectar')
    })

    it('Registrar hijo', () => {
        mishijos.click_Tablero_MisHijos()
        mishijos.click_RegistrarHijo()
        registrarhijo.type_nombreHijo('Victor')
        registrarhijo.type_apellidoHijo('Roca')
        registrarhijo.type_fechaNacimiento('02/02/2014')
        registrarhijo.click_registrar()
        cy.get('.alert').should('be.visible')
    })

})