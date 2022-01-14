/// <reference types="cypress" />

import { Clase } from "../../paginas/Hijo/Clase";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { AutopaymentPadre } from "../../paginas/Padre/AutopaymentPadre";
import { ClasesHijos } from "../../paginas/Padre/ClasesHijos";
import { ComprarPaquete } from "../../paginas/Padre/ComprarPaquete";
import { MetodoPago } from "../../paginas/Padre/MetodoPago";
import { MisHijos } from "../../paginas/Padre/MisHijos";
import { Perfil } from "../../paginas/Padre/Perfil";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

describe("Wonderly- tablero hijo", () => {
    const home = new Home()
    const ingresar = new Ingresar()
    const mishijos =new MisHijos()
    const perfil = new Perfil()
    const autopaymentpadre = new AutopaymentPadre()
    const claseshijo = new ClasesHijos()
    const metodopago = new MetodoPago()
    const comprarpaquete = new ComprarPaquete()
    const registrarhijo = new RegistrarHijo()

    beforeEach(() => {
        cy.visit("https://developers.learnwonderly.com/");
        home.click_IniciaSesion();
        ingresar.type_Correo("padre20@gmail.com");
        ingresar.type_contrasena("12345");
        ingresar.click_continuar();
      });

    it('Verificar que pueda Activar el Autopayment desde el tablero Mis Hijos', () => {
        perfil.click_mostrarSubmenu();
        perfil.click_perfil();
        mishijos.click_Tablero_MisHijos()
        autopaymentpadre.verificarAutopayment()

    })

    it('Verificar que pueda Cancelar el Autopayment desde el tablero Mis Hijos', ()=> {
        perfil.click_mostrarSubmenu();
        perfil.click_perfil();
        mishijos.click_Tablero_MisHijos()
        autopaymentpadre.verificarAutopayment()
    })

    it('Verificar que pueda Actualizar Membresia "Explorador" desde el tablero Mis hijos', ()=> {
        perfil.click_mostrarSubmenu();
        perfil.click_perfil();
        mishijos.click_Tablero_MisHijos()
        autopaymentpadre.verificarAutopayment()
        autopaymentpadre.click_opcionExplorador()
        autopaymentpadre.click_botonEnviar()
        cy.get('.alert').should('be.visible')
    })

    it('Verificar que pueda Actualizar Membresia "Inventor" desde el tablero Mis hijos', ()=> {
        perfil.click_mostrarSubmenu();
        perfil.click_perfil();
        mishijos.click_Tablero_MisHijos()
        autopaymentpadre.verificarAutopayment()
        autopaymentpadre.click_opcionInventor()
        autopaymentpadre.click_botonEnviar()
        cy.get('.alert').should('be.visible')
    })

    it('Verificar que pueda Actualizar Membresia "Genio" desde el tablero Mis hijos', ()=> {
        perfil.click_mostrarSubmenu();
        perfil.click_perfil();
        mishijos.click_Tablero_MisHijos()
        autopaymentpadre.verificarAutopayment()
        autopaymentpadre.click_opcionGenio()
        autopaymentpadre.click_botonEnviar()
        cy.get('.alert').should('be.visible')
    })

    it('Verificar que un padre puede ver sus hijos registrados desde Mis Hijos', () => {
        perfil.click_mostrarSubmenu()
        perfil.click_perfil();
        mishijos.click_Tablero_MisHijos()
    })

    it('Verificar que un padre puede ver todas las clases de sus hijos desde Clases Hijo.', () => {
        perfil.click_mostrarSubmenu()
        perfil.click_perfil();
        claseshijo.click_Tablero_ClasesHijo()
    })

    it('Comprobar que un padre pueda actualizar los datos de la tarjeta de pago desde Método de Pago', () => {
        perfil.click_mostrarSubmenu()
        perfil.click_perfil();
        metodopago.click_tablero_MetodoPago()
        metodopago.click_actualizar()  //Click en el boton Actualizar desde el tablero Metodo de Pago
        // Acutalizar datos de la tarjeta de pago
        metodopago.type_numTarjeta("4242424242424242");
        metodopago.type_mesExp("05");
        metodopago.type_añoExp("2022");
        metodopago.type_cvc("123");
        metodopago.type_nomTitular("Super Julio Roca");
        metodopago.click_enviar();
        cy.get('#gform_confirmation_message_37').should('be.visible')
    })

    it('Verificar que un padre pueda actualizar el método de pago cuando compra una membresía', () => {
        home.click_LogoWonderly()
        home.click_Membresia_Explorador()
        comprarpaquete.click_botonAqui()
         // Acutalizar datos de la tarjeta de pago
         metodopago.type_numTarjeta("4242424242424242");
         metodopago.type_mesExp("08");
         metodopago.type_añoExp("2022");
         metodopago.type_cvc("123");
         metodopago.type_nomTitular("Super Julio Roca Sayajin");
         metodopago.click_enviar();
         cy.get('#gform_confirmation_message_37').should('be.visible')
    })

    it('Comprobar que un padre no puede reservar un clase.', () => {
        home.click_LogoWonderly()
        cy.contains('Matematicas Niños').click()
        registrarhijo.click_botonInscribeteGratis()
        cy.get('.modal-content > .my-3').should('be.visible')  //Assert es que le muestre los perfiles de los hijos para elija un hijo
    })

})