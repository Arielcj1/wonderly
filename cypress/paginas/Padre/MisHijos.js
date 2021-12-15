/// <reference types="cypress" />

export class MisHijos {
    click_Tablero_MisHijos(){
        cy.get('#menu-item-211 > .nav-link').click()
    }

    click_RegistrarHijo(){
        cy.get('.entry-content > .mt-3').click()
    }

    click_conectarDesconectar(texto){
        cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[1]/td[4]/a').invoke('text').then((text)=>{
            if(text == texto){
                cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/table/tbody/tr[1]/td[4]/a').click()
            }
            else{
                cy.get(':nth-child(4) > .btn-danger').click()
            }
        })
    }


}