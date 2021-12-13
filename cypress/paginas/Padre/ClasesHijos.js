/// <reference types="cypress" />

export class ClasesHijos{
    click_Tablero_ClasesHijo(){
        cy.get('#menu-item-704 > .nav-link').click()
    }

    click_NombreClase(){
        //cy.get('[data-date="2021-12-13 13:00:00"] > th > a').click()
        cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/th/a').click()
    }

}