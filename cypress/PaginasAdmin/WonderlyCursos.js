///<reference types="cypress" />
export class WonderlyCursos {
  type_tituloCurso(tituloCurso) {
    cy.get("#input_35_27").type(tituloCurso);
  }

  type_descripcionCurso(descripcionCurso) {
    cy.iframe("iframe[id=input_35_28_ifr]").click();
    cy.iframe("iframe[id=input_35_28_ifr]").type(descripcionCurso);
  }

  click_añadirImagen() {
    cy.get("#insert-media-button").click();
  }

  click_seleccionarArchivos() {
    cy.get("input[type=file]").attachFile("imagen1.jpg");
  }

  click_insertaralaPagina() {
    cy.get(".media-toolbar-primary > .button").click();
  }

  type_descripionProyectoFinal(descripcionProyectoFinal) {
    cy.iframe("iframe[id=input_35_37_ifr]").click();
    cy.iframe("iframe[id=input_35_37_ifr]").type(descripcionProyectoFinal);
  }

  materia(materia) {
    cy.get("#input_35_15").select(materia);
  }

  edades() {
    cy.get('#button_38_select_all').click()
    cy.wait(2000)
    cy.get('#button_38_select_all').click()
    cy.get('#choice_35_38_2').click()   //Edades entre 7-8
  }

  type_fechaInicio() {
    var moment = require('moment')
    const today = moment().format('DD/MMM/YYYY')
    cy.get("#input_35_20").type(today);
  }
  type_fechaFinal() {
    var moment = require('moment')
    const lastday = moment().add(7,'days').format('DD/MMM/YYYY')
    cy.get("#input_35_21").type(lastday);
  }
  horaInicio() {
    var moment = require('moment')
    const hora = moment().add(1,'hours').format('H')
    cy.get("#input_35_22").select(hora + ':00');
  }
  duracionClases(duracionClases) {
    cy.get("#input_35_30").select(duracionClases);
  }

  recuerrenciaClases() {
    var moment = require('moment')
    const day = moment().format('dddd')
    cy.log(day)
    if(day == 'Monday'){
      cy.get("#choice_35_36_0").click();
    }
    if (day == 'Tuesday'){
        cy.get("#choice_35_36_1").click();
      }
    if(day == 'Wednesday'){
        cy.get("#choice_35_36_2").click();
      }
    if(day == 'Thursday'){
      cy.get("#choice_35_36_3").click();
    }
    if(day == 'Friday'){
      cy.get("#choice_35_36_4").click();
    }
    if(day == 'Saturday'){
      cy.get('#choice_35_36_5').click()
    }
         //0 Lunes, 1 Martes, 2 Miercoles
   
  }
  zonaHoraria(zonaHoraria) {
    cy.get("#field_35_29 > div").select(zonaHoraria, { force: true });
  }
  type_youtubeVideo(url) {
    cy.get("#input_35_26").type(url);
  }

  click_botonAgregarCurso() {
    cy.get("#gform_submit_button_35").click();
  }

  click_cursosPasados(){
    cy.xpath("/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/a[1]").click()
  }

  click_todosLosCursos(){
    cy.xpath("/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/a[2]").click()
  }

  click_cursosFuturos() {
    cy.xpath("/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/a[3]").click();
  }

  VerificarCurso() {
    cy.get("tbody > :nth-child(1) > th")
      .invoke("text")
      .then((text) => {
        if (text == "2053") {
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/main/article/div[3]/table/tbody/tr[1]/td[6]/a[2]"
          ).click();
        } else {
          cy.log("Id no encontrado");
        }
      });
  }

  select_seleccionarProfesor(profesor) {
    cy.get("#input_29_3").select(profesor);
  }
  click_botonAsignarProfesor() {
    cy.get("#gform_submit_button_29").click();
  }

  seleccionarCurso(){
    cy.xpath("/html/body/div[2]/div[2]/div/div/div/main/article/div[3]/table/tbody/tr[1]/td[1]/a").click()   //click en el 1er curso de la lista
  }

  close_modalMessage(){
    cy.get('#validationModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
  }

  type_FechaIncioFuturo(fechainicio){
    cy.get('#input_35_20').type(fechainicio)
  }

  type_FechaFinalFuturo(fechafinal){
    cy.get('#input_35_21').type(fechafinal)
  }

  buscar_CursoFuturo(nombrecurso){
    for(var i = 1; i <= 20; i++ ){
      var aux = 1
      var aux2 = 0
      cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[3]/table/tbody/tr['+i+']/td[1]/a').invoke('text').then((text) => {
        let curso = text.trim()
        if (curso == nombrecurso){
          aux2 = aux
          aux++
          cy.log("CURSO ENCONTRADO")
        }else{
          if(aux == 20){
            cy.xpath('/html/body/div[2]/div[2]/div/div/div/main/article/div[3]/table/tbody/tr['+aux2+']/td[1]/a').click()
          }else{aux++}
          cy.log("Curso no encontrado")
        }
      })
    }
  }
}
