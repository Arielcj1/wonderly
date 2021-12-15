/// <reference types="cypress" />

export class Perfiles{
    buscar_hijo(){
        var aux = 3
        cy.get(':nth-child('+aux+') > .seleccionar-hijo-modal > .mb-0').invoke('text').then((text)=>{
            if(text == nombre){
                cy.get(':nth-child('+aux+') > .seleccionar-hijo-modal > .mb-0').click()
            }
            else{
                aux++
                cy.get(':nth-child('+aux+') > .seleccionar-hijo-modal > .mb-0').invoke('text').then((text)=>{
                    if(text == nombre){
                        cy.get(':nth-child('+aux+') > .seleccionar-hijo-modal > .mb-0').click()
                    }
                    else{
                        aux ++
                        cy.get(':nth-child('+aux+') > .seleccionar-hijo-modal > .mb-0').invoke('text').then((text)=>{
                            if(text == nombre){
                                cy.get(':nth-child('+aux+') > .seleccionar-hijo-modal > .mb-0').click()
                            }
                            else{
                                aux++
                                cy.get(':nth-child('+aux+') > .seleccionar-hijo-modal > .mb-0').click()
                            }
                        })
                    }
                })    
            }
        })
    }

    click_registrarHijo(){
        cy.get('.mt-3 > .btn').click()
    }
    
}