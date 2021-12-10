/// <reference types="cypress" />

import { Clase } from "../../paginas/Clase";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Perfil } from "../../paginas/Perfil";
import { Registro } from "../../paginas/Registro";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Reserva de clase", () => {
  const home = new Home();
  const registrar = new Registro();
  const ingresar = new Ingresar();
  const perfil = new Perfil();
  const clase = new Clase();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  it("Reservar clase Nuevo", () => {
    home.click_DesplazarAbajo();

    home.click_clases_sinRegistro();

    registrar.type_nombre("Julio");
    registrar.type_apellidos("Roca");
    registrar.type_correo("julioroca10@gmail.com");
    registrar.type_contrasenia("control123");
    registrar.type_numero("71191102");
    registrar.click_siguiente(); //Pagina de Bienvenida, despues de 5 seg, redirecciona a Schedule.
    //cy.get("h2").should("be.visible");//Assert de bienvenida
    cy.wait(20000);
    home.click_clase_conRegistro();
    cy.wait(5000);

    //Registro del hijo
    registrar.hijo_nomnre("Julian");
    registrar.hijo_apellido("Roca");
    registrar.hijo_fechaNacimiento("01/12/2015");
    registrar.click_registrar();
    registrar.click_aceptar();
  });

  it.skip("Inicia sesion y Reservar clase", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("josemunoz@gmail.com");
    ingresar.type_contrasena("123456");
    ingresar.click_continuar();
    cy.contains("¿Quién está aprendiendo?").should("be.visible");
    perfil.buscar_hijo("Juan Muñoz");

    home.click_clase2247();
    registrar.click_aceptar();
  });

  it.skip("Cancelar reserva clase", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("josemunoz@gmail.com");
    ingresar.type_contrasena("123456");
    ingresar.click_continuar();

    perfil.buscar_hijo("Juan Muñoz");
    //home.click_clase2247()
    home.click_clase_Cancelar();

    clase.click_CancelarClase();
    cy.get("#confirmationModalLabel").should("be.visible");
    clase.click_AceptarCancelar();
  });
});
