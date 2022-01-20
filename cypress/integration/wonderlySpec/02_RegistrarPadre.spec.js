/// <reference types="cypress" />
// Casos de prueba realizado por Patrik Delgadillo

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Registro } from "../../paginas/Registro";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Padre - Registrar padre", () => {
  const home = new Home();
  const registro = new Registro();
  const ingresar = new Ingresar()

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  it("01_Verificar que un padre pueda registrarse desde el boton con efecto de movimiento 'Registro Gratis' ", () => {
    home.boton_RegistroGratis();
    registro.type_nombre("Diego");
    registro.type_apellidos("Roca");
    registro.type_correo("nuevopadre07@gmail.com");
    registro.type_contrasenia("12345");
    registro.type_numero("65266222");
    registro.click_siguiente();
    cy.get("h2").should("be.visible");
  });

  it("02_Verificar que un padre pueda registrarse desde el boton con efecto de movimiento 'Prueba por 7 dias' ", () => {
    home.boton_conMovimiento7diasGratis()
    registro.type_nombre("Pedro");
    registro.type_apellidos("Perez");
    registro.type_correo("nuevopadre08@gmail.com");
    registro.type_contrasenia("12345");
    registro.type_numero("65266222");
    registro.click_siguiente();
    cy.get("h2").should("be.visible");
  })

  it("03_Verificar que un padre pueda registrarse desde el boton Menú '7 dias gratis' ", () => {
    home.boton_7diasGratis()
    registro.type_nombre("Juan");
    registro.type_apellidos("Perez");
    registro.type_correo("nuevopadre09@gmail.com");
    registro.type_contrasenia("12345");
    registro.type_numero("65266222");
    registro.click_siguiente();
    cy.get("h2").should("be.visible");

  })

  it("04_Verificar que un padre puede hacer login en wonderly con email y contraseña validos", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("nuevopadre07@gmail.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
  })

  it('05_Comprobar que un padre no pueda ingresar con email y contraseña invalidos', () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("padreXX@gmail.com");
    ingresar.type_contrasena("54321");
    ingresar.click_continuar();
    cy.get('.message-error > .title').should('be.visible')
  })

  it('06_Probar que un padre no pueda registrarse con un correo ya usado en Wonderly', ()=> {
    home.boton_RegistroGratis();
    registro.type_nombre("Carlos");
    registro.type_apellidos("Roca");
    registro.type_correo("nuevopadre07@gmail.com");
    registro.type_contrasenia("12345");
    registro.type_numero("65266222");
    registro.click_siguiente();
    registro.click_Modal()
    cy.get('#validation_message_21_2').should('be.visible')
  })

  
});
