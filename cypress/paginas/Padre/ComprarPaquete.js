/// <reference types="cypress" />

export class ComprarPaquete{

    type_seleccionarHijo(nombre){
        cy.get('#input_25_29').select(nombre)
    }

    click_Aqui_nuevoHijo(){
        cy.get('#field_25_30 > p > a').click()
    }

    click_botonAqui(){
        cy.get('#field_25_46 > p > a').click()
    }

    click_suscribirse(){
        cy.get('#gform_submit_button_25').click()
    }

    verificarTipoMembresia(membresia){
        cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div[1]/div/div/p[1]/text()').invoke('text').then((text) => {
            if(text == membresia){
                cy.log('Tipo de Membresia correcto: ' + text)
            }else{
                cy.log("No coincide el tipo de Membresia")
            }
        })
    }

    verificarPrecioTotal(precio){
        cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div[1]/div/div/p[6]/text()').invoke('text').then((text) => {
            if(text == precio){
                cy.log('Precio Total correcto: ' + text)
            }else{
                cy.log("No coincide el Precio Total")
            }     
        })
    }
}