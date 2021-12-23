/// <reference types="cypress" />

export class ModulosOnDemand{
    buscar_cursoOnDemand(nombreCurso, accion){
        for(var i = 1; i <= 20; i++ ){
            var aux = 1
            var aux2 = 0
            //cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[3]/table/tbody/tr['+i+']/td[1]/a').invoke('text')
            cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr['+i+']/td[1]/a').invoke('text')
            .then((text) => {
                let curso = text.trim()
                if (curso == nombreCurso){
                    aux2 = aux
                    aux++
                }else {
                        if(aux == 20){
                            //cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[3]/table/tbody/tr['+aux2+']/td[6]/a['+accion+']').click()
                            cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr['+aux2+']/td[5]/a['+accion+']').click()
                        }else aux++
                    }                
            })
        }
    }

    agregar_Modulos_Clases(nombreModulo, nombreClase, url){
        for(var i = 1; i <= 3; i++){

            if(i == 1){
                cy.get('.form-fields > .btn').click()   //Click en el boton Agregar Modulo
                cy.get('.form-control').type(nombreModulo + i)
            }else{
                cy.get('.py-3').click()
                cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div/div/div['+i+']/div/div/input').type(nombreModulo + i)
            }
            

            // for(var j = 2; j <= 4; j++){
            //     if(i == 1){
            //         var aux = 1
            //         var aux2 = 2
            //         if(j == 2){
            //              cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div/div/div/div/div/div[1]/button[1]').click()  //Click en el boton Agregar Clase
            //         }
            //         else{
            //              cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div/div/div[2]/div/div/div[1]/button[1]').click()
            //              aux2++
            //          }
            //     }
            //     else{
            //         cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div/div/div[2]/div/div/div[1]/button[1]').click()
            //     }
               
                                         

            //     cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div/div/div/div['+j+']/div/div/div[1]/input').type(nombreClase + aux)
            //     cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div/div/div/div['+j+']/div/div/div[2]/input').type(url)
            //     aux++
                     
            // }
        }

        for (var j = 1; j <= 3; j++){

            // if(j == 1){
            //     //cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div/div/div[1]/div/div/div[1]/button[1]').click()  //Click en el boton Agregar Clase
            //     cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div/div/div['+j+']/div/div/div[1]/button[1]').click()
            //  }
            //  else{
            //     //cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div/div/div[1]/div[1]/div/div[1]/button[1]').click()
            //     cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div/div/div['+j+']/div[1]/div/div[1]/button[1]').click()
            //  }
            for(var x = 2; x <= 3; x++){
                
                cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div/div/div['+j+']/div[1]/div/div[1]/button[1]').click()
            
                cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div/div/div['+j+']/div['+x+']/div/div/div[1]/input').type(nombreClase + (x-1))
                cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div/div/div['+j+']/div['+x+']/div/div/div[2]/input').type(url)
                
            }
            
        }
    }

}