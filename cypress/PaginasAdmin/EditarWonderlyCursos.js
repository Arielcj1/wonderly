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

    editarHoraInicio(horaInicio) {
        cy.get('#input_34_10').select(horaInicio);
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
        cy.get('[href="https://developers.learnwonderly.com/tablero/wonderly-clases/editar-clase/?clase_id=4750"] > .svg-inline--fa').click()
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

    buscar_curso(nombreCurso){
        for(var i = 1; i <= 7; i++ ){
            var e = i
            cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[3]/table/tbody/tr['+i+']/td[1]/a').invoke('text')
            .then((text) => {
               
                cy.log(text, nombreCurso)
                if (text == nombreCurso){
                    cy.log(e)
                    cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[3]/table/tbody/tr['+e+']/td[6]/a[1]').click()
                }
                
            })
        }
    }

}