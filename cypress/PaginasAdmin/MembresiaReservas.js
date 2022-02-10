/// <reference types="cypress" />

export class MembresiasReservas{
    clickMembresiasActivas(){
        cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div[1]/a[2]').click()
    }

    clickMembresiasExpiradas(){
        cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div[1]/a[1]').click()
    }

    clickReservasActivas(){
        cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div[1]/a[2]').click()
    }

    clickReservasPasadas(){
        cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div[1]/a[1]').click()
    }
}