///<reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { PerfilAdmin } from "../../PaginasAdmin/PerfilAdmin";

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  describe("Administrador - Login", () => {

    const home = new Home()
    const ingresar = new Ingresar()
    const perfiladmin = new PerfilAdmin()

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
        
    })

    it('Comprobar que el Admin pueda ver la lista de profesores ordenada por nombre', () => {
        
    })

    it('Comprobar que el Admin pueda registrar profesor desde el tablero Profesores Registrados.', () => {
        
    })

    it('Comprobar que el sistema muestra un mensaje de advertencia cuando no se completan los datos requeridos en el formulario Registra a un profesor.', () => {
        
    })

    it('', () => {
        
    })

    
  })