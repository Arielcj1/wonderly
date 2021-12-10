/// <reference types="cypress" />

export class Perfil{
    buscar_hijo(nombre){
        var aux = 2
        cy.get(':nth-child('+aux+') > .wonderly-login-hijo-trigger > .mb-0').invoke('text').then((text)=>{
            if(text == nombre){
                cy.get(':nth-child('+aux+') > .wonderly-login-hijo-trigger > .mb-0').click()
            }
            else{
                aux++
                cy.get(':nth-child('+aux+') > .wonderly-login-hijo-trigger > .mb-0').invoke('text').then((text)=>{
                    if(text == nombre){
                        cy.get(':nth-child('+aux+') > .wonderly-login-hijo-trigger > .mb-0').click()
                    }
                    else{
                        aux ++
                        cy.get(':nth-child('+aux+') > .wonderly-login-hijo-trigger > .mb-0').invoke('text').then((text)=>{
                            if(text == nombre){
                                cy.get(':nth-child('+aux+') > .wonderly-login-hijo-trigger > .mb-0').click()
                            }
                            else{
                                aux++
                                cy.get(':nth-child('+aux+') > .wonderly-login-hijo-trigger > .mb-0').click()
                            }
                        })
                    }
                })    
            }
        })
    }

    click_Registrar_Hijo(){
        cy.get('.entry-content > :nth-child(3) > .btn').click()
    }
}