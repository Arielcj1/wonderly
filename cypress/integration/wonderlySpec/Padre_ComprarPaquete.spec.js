/// <reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { ComprarPaquete } from "../../paginas/Padre/ComprarPaquete";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Comprar Membresias', () =>{

    const home = new Home()
    const ingresar = new Ingresar()
    const paquete = new ComprarPaquete()

    beforeEach(() => {
        cy.visit('https://developers.learnwonderly.com/')
      })

    it ('Comprar membresia Explorador', () => {
        home.click_IniciaSesion()
        ingresar.type_Correo('julioroca10@gmail.com')
        ingresar.type_contrasena('12345')
        ingresar.click_continuar()
        home.click_LogoWonderly()
        home.click_Membresias()
        home.click_Membresia_Explorador()

        paquete.type_seleccionarHijo('Julian Roca')
        //paquete.type_nomTitular('Julio Roca')
        cy.wait(2000)
        paquete.type_numTarjeta('4242424242424242')
       //paquete.type_mesAnio('1022')
       // paquete.type_cvc('123')
        

        //paquete.click_suscribirse()

    })
})