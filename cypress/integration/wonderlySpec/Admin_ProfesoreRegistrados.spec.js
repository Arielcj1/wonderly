///<reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";
import { PerfilAdmin } from "../../PaginasAdmin/PerfilAdmin";
import { RegistroProfesor } from "../../PaginasAdmin/RegistroProfesor";

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  describe("Administrador - Login", () => {

    const home = new Home()
    const ingresar = new Ingresar()
    const perfiladmin = new PerfilAdmin()
    const homeadmin = new HomeAdmin()
    const registroprofesor = new RegistroProfesor()

    beforeEach(() => {
        cy.visit("https://developers.learnwonderly.com/");
        home.click_IniciaSesion();
        ingresar.type_Correo("neida.veizaga@believesol.com");
        ingresar.type_contrasena("abcABC123");
        ingresar.click_continuar();
      });

    it('Verificar que el admin pueda editar su perfil.', () => {
        perfiladmin.type_nombreAdmin('Neida')
        perfiladmin.type_apellidoAdmin('Veizaga')
        perfiladmin.click_botonGuardar()
        cy.get('.alert').should('be.visible')   //Assert  "Su información ha sido guardada con éxito"
    })

    it('Verificar que el administrador pueda ingresar al tablero Profesores Registrados', () => {
        homeadmin.click_tableroProfesoresRegistrados();
        cy.get(".text-dark").should("be.visible");
        cy.wait(1000);
    })

    it('Comprobar que el sistema muestra un mensaje de advertencia cuando no se completan los datos requeridos en el formulario Registra a un profesor.', () => {
        homeadmin.click_tableroProfesoresRegistrados()
        homeadmin.click_botonRegistrarProfesor()
        registroprofesor.click_botonListo()
        cy.get('.title').should('be.visible')
        cy.wait(1000);
    })

    it('Comprobar que el sistema señala cuales son los campos obligatorios para completar en el formulario Registra a un profesor.', () => {
      homeadmin.click_tableroProfesoresRegistrados()
      homeadmin.click_botonRegistrarProfesor()
      registroprofesor.click_botonListo()
      registroprofesor.close_modalMessage()
      //Son los Campos obligatorios que se muestran
      cy.get('#validation_message_5_11').should('be.visible')  //Nombre
      cy.get('#validation_message_5_10').should('be.visible')  //Apellido
      cy.get('#validation_message_5_3').should('be.visible')   //Correo electronico
      cy.get('#validation_message_5_4').should('be.visible')   //Contraseña
    })
    
  })