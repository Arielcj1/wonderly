///<reference types="cypress" />

export class RepetirCurso{

    type_fechaInicio(fecha){
        cy.get('#input_36_20').type(fecha)
    }

    horaInicio(hora){
        cy.get('#input_36_22').select(hora)
    }

    duracionClase(duracion){
        cy.get('#input_36_30').select(duracion)
    }

    recurreciaClases(){
        cy.get('#choice_36_35_3').click()     //Jueves
    }

    click_repetirCurso(){
        cy.get('#gform_submit_button_36').click()
    }
}