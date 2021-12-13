/// <reference types="cypress" />

import { Home } from "../../paginas/Home"
import { Ingresar } from "../../paginas/Ingresar"
import { Perfil} from "../../paginas/Padre/Perfil"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Perfil Padre',() => {
    const home = new Home()
    const ingresar = new Ingresar()
    const perfil = new Perfil()

    beforeEach(() => {
        cy.visit('https://developers.learnwonderly.com/')
      })

    it('Ir al perfil Padre', () => {
        home.click_IniciaSesion()
        ingresar.type_Correo('josemunoz@gmail.com')
        ingresar.type_contrasena('123456')
        ingresar.click_continuar()
        cy.contains('¿Quién está aprendiendo?').should('be.visible')
        perfil.click_mostrarSubmenu()
        perfil.click_perfil()
        cy.get('.text-dark').should('be.visible')
    })

    it('Completar datos perfil Padre', () => {
        home.click_IniciaSesion()
        ingresar.type_Correo('josemunoz@gmail.com')
        ingresar.type_contrasena('123456')
        ingresar.click_continuar()
        perfil.click_mostrarSubmenu()
        perfil.click_perfil()

        perfil.type_fechaNacimiento('01/01/2000')
        perfil.type_contrasena('control123')
        perfil.type_confirmarContrasena('contrl123')
        perfil.type_numCelular('71092100')
        perfil.type_direccion('Av Ayacucho 1234')
        perfil.type_ciudad('Cochabamba')
        perfil.type_provincia('Cercado')
        perfil.type_pais('Argentina')
        perfil.seleccionar_materias()
        //perfil.click_guardar()
    })

})