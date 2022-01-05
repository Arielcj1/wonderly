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
        cy.wait(3000);
        cy.xpath("/html/body/div[6]/div[2]/button[2]").click();
    }

    click_Regresar(){
        cy.get('.btn-group > .btn').click()
    }

    verificar_Material(){
        cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div[1]/div/table/tbody[2]/tr/td/text()').invoke('text').then((text3) => {
            
            let material = text3.trim()
            cy.log(material)
            if (material == 'No hay'){
                cy.log('No hay Material para Eliminar')
            } else{
                //cy.get('.delete-button').click()
                cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div[1]/div/table/tbody[1]/tr[1]/td[4]/ul/li[2]/button').click()
            }
          })
    }

    click_botonEditarMaterial(){
        cy.get('.edit-button').click()   
    }

    // Agregar 3 materiales a una clase
    agregar3Materiales(){
        for (var i = 1; i <=3; i++ ){
            cy.get('.gpnf-add-entry').click()  //Click en el boton agreagr material
            cy.get('#input_31_1').type("Titulo Material " + i)
            cy.get('#input_31_2').type("Material Extra " + i)
            if (i == 1){
                cy.log('Valor de ' + i)
                cy.get("input[type=file]").attachFile("sample.pdf");
            }else{
                if(i == 2){
                    cy.log('Valor de ' + i)
                    cy.get("input[type=file]").attachFile("SegundoCuento.pdf");
                }else {
                    cy.log('Valor de ' + i)
                    cy.get("input[type=file]").attachFile("sample.pdf");
                     }
            }
            cy.wait(3000);
            cy.xpath("/html/body/div[6]/div[2]/button[2]").click();
            cy.wait(3000);
        }
    }

    //Eliminar materiales de la clase
    eliminarMaterialClase(){
        for (var i = 1; i <= 2; i++ ){
            cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div[1]/div/table/tbody[1]/tr['+i+']/td[4]/ul/li[2]/button').click()
        }
        cy.wait(2000)
    }
}