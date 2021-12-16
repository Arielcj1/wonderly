///<reference types="cypress" />

export class AsignarProfesor{

    click_asignarProfesorCurso(){
        cy.get('[href="https://developers.learnwonderly.com/tablero/asignar-profesor/?curso_id=4748&referrer_url=https://developers.learnwonderly.com/tablero/wonderly-cursos"] > .svg-inline--fa').click()
    }

    type_seleccionarProfesor(profesor){
        cy.get('#input_29_3').select(profesor)
    }

    click_asignar(){
        cy.get('#gform_submit_button_29').click()
    }

    click_regresar(){
        cy.get('.btn-group > .btn').click()
    }

    click_asignarProfesorClase(){
        cy.get('[href="https://developers.learnwonderly.com/tablero/asignar-profesor/?clase_id=4750"] > .svg-inline--fa').click()
    }
}