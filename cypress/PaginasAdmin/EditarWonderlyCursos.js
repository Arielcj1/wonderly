///<reference types="cypress" />

export class EditarWonderlyCursos{
    type_editarTituloCurso(tituloCurso){
        cy.get('#input_34_2').clear().type(tituloCurso)
    }

    type_editarDescripcionCurso(descripcionCurso) {
        cy.iframe("iframe[id=input_34_3_ifr]").click();
        cy.iframe("iframe[id=input_34_3_ifr]").clear().type(descripcionCurso);
    }

    type_editarProyectoFinal(descripcion){
        cy.iframe("iframe[id=input_34_19_ifr]").click();
        cy.iframe("iframe[id=input_34_19_ifr]").clear().type(descripcion);
    }

    editarMateria(materia) {
        cy.get('#input_34_6').select(materia);
    }

    editarEdades(edades) {
        cy.get('#input_34_7').select(edades);
    }

    editarHoraInicio() {
        var moment = require('moment')
        const hora = moment().add(1,'hours').format('H')
        cy.get("#input_34_10").select(hora + ':00');
      }

    editarDuracionClases(duracionClases) {
        cy.get('#input_34_12').select(duracionClases);
    }

    type_youtubeVideo(url) {
        cy.get('#input_34_4').clear().type(url);
    }

    click_guardar(){
        cy.get('#gform_submit_button_34').click()
      }

    click_editarClase(){
        cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/td[6]/a[1]').click()
    }

    type_editarTituloClase(titulo){
        cy.get('#input_28_1').clear().type(titulo)
    }

    type_editarDescripcionClase(descripcionClase){
        cy.iframe("iframe[id=input_28_6_ifr]").click();
        cy.iframe("iframe[id=input_28_6_ifr]").clear().type(descripcionClase);
    }

    type_youtubeVideoClase(url){
        cy.get('#input_28_4').clear().type(url)
    }

    click_guardarCambiosClase(){
        cy.get('#gform_submit_button_28').click()
    }

    buscar_curso(nombreCurso, accion){
        for(var i = 1; i <= 20; i++ ){
            var aux = 1
            var aux2 = 0
            cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[3]/table/tbody/tr['+i+']/td[1]/a').invoke('text')
            .then((text) => {
                let curso = text.trim()
                if (curso == nombreCurso){
                    aux2 = aux
                    aux++
                }else {
                        if(aux == 20){
                            cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[3]/table/tbody/tr['+aux2+']/td[6]/a['+accion+']').click()
                        }else aux++
                    }                
            })
        }
    }

}