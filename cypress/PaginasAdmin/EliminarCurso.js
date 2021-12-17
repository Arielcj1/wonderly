///<reference types="cypress" />

export class EliminarCurso{
    click_aceptarEliminarCurso(){
        cy.get("#confirmationModalButton").click(); //Aceptar Eliminar Curso
    }

    click_cancelarEliminarCurso(){
        cy.get(".btn-danger").click(); //Cancelar eliminar curso
    }
}