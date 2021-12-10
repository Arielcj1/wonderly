/// <reference types="cypress" />
import{Home} from "../../paginas/Home"
import{Ingresar} from "../../paginas/Ingresar"
import{Perfil} from "../../paginas/Perfil"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Home Page', () => {
    const home = new Home()
    const ingresar = new Ingresar()
    const perfil = new Perfil()

    beforeEach(() => {
      cy.visit('https://developers.learnwonderly.com/')
    })

    it('Iniciar sesion', () => {
        home.click_IniciaSesion()
        ingresar.type_Correo('josemunoz@gmail.com')
        ingresar.type_contrasena('123456')
        ingresar.click_continuar()
        //cy.get('.entry-content > h5.text-center').should('be.visible')
        cy.contains('¿Quién está aprendiendo?').should('be.visible')
        perfil.buscar_hijo('Juan Muñoz')

      })

    it.skip('Ir a Destrezas',()=>{
        home.click_Destrezas()
    })

    it.skip('Ir a Por que Wonderly',()=>{
        home.click_PorqueWonderly()
        cy.wait(4000)
    })

    it('Presionar flechas Derecha y Izquierda en Schedule',()=>{
        home.click_Flecha_Der()
        cy.wait(4000)
        home.click_Flecha_Izq()
        cy.wait(4000)
    })

    it('Seleccionar dia Jueves en Schedule', ()=>{
        home.click_Jueves()
        cy.wait(5000)
    })

    it.skip('Ir a Explorar nuestras destrezas',()=>{
        home.click_Destrezas2()
        cy.wait(5000)
    })

    it.skip('Presioanr botones de desplazamiento',()=>{
        home.click_DesplazarAbajo()
        cy.wait(3000)
        home.click_DesplazarArriba()
        cy.wait(3000)
    })

    it.skip('Iniciar sesion y comprar Membresias', () => {
        home.click_IniciaSesion()
        ingresar.type_Correo('josemunoz@gmail.com')
        ingresar.type_contrasena('123456')
        ingresar.click_continuar()
        cy.wait(3000)
        home.click_LogoWonderly()
        home.click_Membresias()
        home.click_Membresia_Explorador()
        cy.wait(3000)
        cy.get('.my-5').should('be.visible')

      })


    })