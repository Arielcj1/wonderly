/// <reference types="cypress" />

import { Home } from "../../paginas/Home"
import { Ingresar } from "../../paginas/Ingresar"
import { MisHijos } from "../../paginas/Padre/MisHijos";
import { Perfil} from "../../paginas/Padre/Perfil"
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";
import { Registro } from "../../paginas/Registro"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Perfil Padre',() => {
    const home = new Home()
    const ingresar = new Ingresar()
    const perfil = new Perfil()
    const registro = new Registro() 
    const registrarhijo = new RegistrarHijo()
    const mishijos = new MisHijos()

    beforeEach(() => {
        cy.visit('https://developers.learnwonderly.com/')
      })

    it('Registrar Padre', () => {
        home.click_pruebaGratis()
        registro.type_nombre("Julio");
        registro.type_apellidos("Roca");
        registro.type_correo("julioroca14@gmail.com");
        registro.type_contrasenia("12345");
        registro.type_numero("65266222");
        registro.click_siguiente();
        cy.get('h2').should('be.visible')
        
    })

    it('Registrar hijos', () => {
      home.click_IniciaSesion()
      ingresar.type_Correo('julioroca14@gmail.com')
      ingresar.type_contrasena('12345')
      ingresar.click_continuar()

      cy.get('.text-center > .btn').click()
      registrarhijo.type_nombreHijo('Juan')
      registrarhijo.type_apellidoHijo('Roca')
      registrarhijo.type_fechaNacimiento('01/01/2010')
      registrarhijo.click_registrar()
      cy.get('.alert').should('be.visible')
    })

    it('Registrar nuevo hijo desde Mis hijos', () => {
      home.click_IniciaSesion()
      ingresar.type_Correo('julioroca14@gmail.com')
      ingresar.type_contrasena('12345')
      ingresar.click_continuar()
      perfil.click_mostrarSubmenu()
      perfil.click_perfil()
      //Registrar nuevo hijo
      mishijos.click_Tablero_MisHijos()
      mishijos.click_RegistrarHijo()
      registrarhijo.type_nombreHijo('Carlos')
      registrarhijo.type_apellidoHijo('Roca')
      registrarhijo.type_fechaNacimiento('01/01/2012')
      registrarhijo.click_registrar()
      cy.get('.alert').should('be.visible')
    })

    it('Ir al perfil Padre', () => {
        home.click_IniciaSesion()
        ingresar.type_Correo('julioroca14@gmail.com')
        ingresar.type_contrasena('12345')
        ingresar.click_continuar()
        cy.contains('¿Quién está aprendiendo?').should('be.visible')
        perfil.click_mostrarSubmenu()
        perfil.click_perfil()
        cy.get('.text-dark').should('be.visible')
    })

    it('Completar datos perfil Padre', () => {
        
      //Ir al Perfil del padre
        home.click_IniciaSesion()
        ingresar.type_Correo('julioroca14@gmail.com')
        ingresar.type_contrasena('12345')
        ingresar.click_continuar()
        perfil.click_mostrarSubmenu()
        perfil.click_perfil()

        //Completar datos necesarios del Padre
        perfil.type_fechaNacimiento('01/01/2000')
        //perfil.type_contrasena('control123')
        //perfil.type_confirmarContrasena('contrl123')
        perfil.type_numCelular('71092100')
        perfil.type_direccion('Av Ayacucho 1234')
        perfil.type_ciudad('Cochabamba')
        perfil.type_provincia('Cercado')
        perfil.type_codigoPostal('00122')
        perfil.type_pais('Argentina')
        perfil.seleccionar_materias()
        perfil.click_guardar()
        cy.get('.alert').should('be.visible')
    })

})