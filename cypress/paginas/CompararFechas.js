///<reference types="cypress" />

export class Fechas {

    compararFechas(){
        cy.get('tbody > :nth-child(1) > :nth-child(3)').invoke("text").then((fecha) => {
            cy.log(fecha)
        })

        // var fecha2 = cy.get('tbody > :nth-child(1) > :nth-child(3)').invoke("text")

        // cy.log("La fecha es: " + fecha2)
        
    }
}