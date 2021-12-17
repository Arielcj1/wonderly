///<reference types="cypress" />

export class WonderlyClases {
    click_iconoAgregarMaterial(){
        cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/td[6]/a[3]').click()
    }

    click_agregarMaterial(){
        cy.get('.gpnf-add-entry').click()
    }

    type_tituloMaterial(titulo){
        cy.get('#input_31_1').type(titulo)
    }

    type_descripcionMaterial(descripcion){
        cy.get('#input_31_2').type(descripcion)
    }

    subirArchivoFormAgregarMaterial() {
        cy.get("input[type=file]").attachFile("sample.pdf");
    }

    click_confirmarAgregarMaterial(){
        cy.get('.tingle-btn--primary').click()
    }

    click_botonRegresar(){
        cy.get('.tingle-btn--primary').click()
    }
}