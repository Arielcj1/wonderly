///<reference types="cypress" />

export class EliminarCurso{
    click_aceptarEliminarCurso(){
        cy.xpath("/html/body/div[2]/div[5]/div/div/div[3]/button[1]").click()
    }

    click_cancelarEliminarCurso(){
        cy.get(".btn-danger").click(); //Cancelar eliminar curso
    }
}