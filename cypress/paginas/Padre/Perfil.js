/// <reference types="cypress" />

export class Perfil{
    click_Tablero_Perfil(){
        cy.get('#menu-item-144 > .nav-link').click()
    }
    type_nombre(nombre){
        cy.get('#input_1_5').type(nombre)
    }

    type_apellido(apellido){
        cy.get('#input_1_6').type(apellido)
    }

    type_fechaNacimiento(fechaNac){
        cy.get('#input_1_20').type(fechaNac)         //  DD/MM/AAAA
    }

    type_contrasena(contrasena){
        cy.get('#input_1_17').type(contrasena)
    }

    type_confirmarContrasena(contrasena){
        cy.get('#input_1_17_2').type(contrasena)
    }

    type_numCelular(numero){
        cy.get('#input_1_4').clear()
        cy.get('#input_1_4').type(numero)
    }

    type_direccion(direccion){
        cy.get('#input_1_10').type(direccion)
    }

    type_ciudad(ciudad){
        cy.get('#input_1_12').type(ciudad)
    }

    type_provincia(provincia){
        cy.get('#input_1_13').type(provincia)
    }

    type_pais(pais){
        cy.get('#input_1_11').select(pais)
    }

    type_codigoPostal(codigo){
        cy.get('#input_1_14').type(codigo)
    }

    seleccionar_materias(){
        cy.get('#choice_1_21_1').click()
        cy.get('#choice_1_21_2').click()
        cy.get('#choice_1_21_4').click()
    }

    click_guardar(){
        cy.get('#gform_submit_button_1').click()
    }

    //submenu del perfil 
    click_mostrarSubmenu(){
        cy.get('#navbarDropdown').click()
    }
    click_perfil(){
        cy.get('#menu-item-319 > .dropdown-item').click()  //Click en la opcion Cuenta del dropdown menu
    }
    click_perfiles(){
        cy.get('#menu-item-2667 > .dropdown-item').click()
    }
    click_clasesHijo(){
        cy.get('#menu-item-2666 > .dropdown-item').click()
    }
    click_salir(){
        cy.get('#menu-item-143 > .dropdown-item').click()
    }
}