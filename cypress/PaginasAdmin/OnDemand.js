/// <reference types="cypress" />

export class OnDemand {
    click_wonderlyClasesTablero(){
        cy.get('#menu-item-3885 > .nav-link').click()
    }

    // click_clasesOnDemand(){
    //     cy.get('[href="https://developers.learnwonderly.com/tablero/wonderly-clases/?filtrar_por=ondemand"]').click()
    //     //cy.contains('Clases on demand').click()
    // }

    click_agregarClaseOnDemand(){
        cy.get('.post-7266 > .btn').click()
    }

    type_tituloClase(titulo){
        cy.get('#input_41_1').clear().type(titulo)
    }

    type_descripcionClase(descripcion){
        cy.iframe("iframe[id=input_41_2_ifr]").click();
        cy.iframe("iframe[id=input_41_2_ifr]").clear().type(descripcion);
    }

    select_materia(materia){
        cy.get('#input_41_4').select(materia)
    }

    select_edades(){
        cy.get('#choice_41_8_3').click()   //edad entre 7-8
    }

    type_youtubeVideo(url){
        cy.get('#input_41_6').clear().type(url)
    }

    select_herramienta(herramienta){
        cy.get('#input_41_7').select(herramienta)
    }

    click_confirmarAgregarOnDemand(){
        cy.get('#gform_submit_button_41').click()
    }

    type_editarTituloClase(titulo){
        cy.get('#input_42_1').clear().type(titulo)
    }

    type_editardescripcionClase(descripcion){
        cy.iframe("iframe[id=input_42_6_ifr]").click();
        cy.iframe("iframe[id=input_42_6_ifr]").clear().type(descripcion);
    }

    select_editarmateria(materia){
        cy.get('#input_42_7').select(materia)
    }

    select_editaredades(){
        //cy.get('#input_42_8').select(edad)
        cy.get('#button_10_select_all').click()
        cy.wait(2000)
        cy.get('#button_10_select_all').click()
        cy.get('#choice_42_10_2').click()
    }

    type_editaryoutubeVideo(url){
        cy.get('#input_42_4').clear().type(url)
    }

    select_editarherramienta(herramienta){
        cy.get('#input_42_9').select(herramienta)
    }

    click_guardar(){
        cy.get('#gform_submit_button_42').click()
    }

    click_nombreClaseOnDemand(){
        cy.get(':nth-child(6) > :nth-child(2) > a').click()    //Click en la 6 clase de la lista
    }
}