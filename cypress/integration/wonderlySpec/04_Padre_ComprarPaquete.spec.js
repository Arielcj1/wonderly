/// <reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { ComprarPaquete } from "../../paginas/Padre/ComprarPaquete";
import { MetodoPago } from "../../paginas/Padre/MetodoPago";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Comprar Membresias', () =>{

    const home = new Home()
    const ingresar = new Ingresar()
    const paquete = new ComprarPaquete()
    const pago = new MetodoPago()
    const registrarhijo = new RegistrarHijo()

    beforeEach(() => {
        cy.visit('https://developers.learnwonderly.com/')
        home.click_IniciaSesion()
        ingresar.type_Correo('padre14@gmail.com')
        ingresar.type_contrasena('12345')
        ingresar.click_continuar()
      })

    it('Comprar membresia Explorador', () => {
        
        home.click_LogoWonderly()
        home.click_Membresias()
        home.click_Membresia_Explorador()
        paquete.click_botonAqui()

        //Completar o Actualizar datos de Tarjeta de Credito o Debito
        pago.type_numTarjeta('4242424242424242')
        pago.type_mesExp('05')
        pago.type_añoExp('2022')
        pago.type_cvc('123')
        pago.type_nomTitular('Julio Roca')
        pago.click_enviar()

        //compra de Membresia Explorador
        paquete.type_seleccionarHijo('Hijo Uno')
        cy.wait(2000)
        paquete.click_suscribirse()
        cy.get('.text-primary').should('be.visible')

    })

    it( 'Comprar membresia Inventor', () => {

        home.click_LogoWonderly()
        home.click_Membresias()
        home.click_Membresia_Inventor()
        //Registrar nuevo Hijo
        paquete.click_Aqui_nuevoHijo()
        registrarhijo.type_nombreHijo('Hijo')
        registrarhijo.type_apellidoHijo('Cuatro')
        registrarhijo.type_fechaNacimiento('01/01/2011')
        registrarhijo.click_registrar()
        paquete.type_seleccionarHijo('Hijo Cuatro')
        paquete.click_suscribirse()
        cy.get('.text-primary').should('be.visible')
    })

    it('Comprar membresia Genio', () => {

        home.click_LogoWonderly()
        home.click_Membresias()
        home.click_Membresia_Genio()

        paquete.type_seleccionarHijo('Hijo Dos')
        paquete.click_suscribirse()
        cy.get('.text-primary').should('be.visible')
    })
})