/// <reference types="cypress" />
// Casos de prueba realizado por Patrik Delgadillo
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { AgregarNuevoHijo } from "../../paginas/Padre/AgregarNuevoHijo";
import { AutopaymentPadre } from "../../paginas/Padre/AutopaymentPadre";
import { ClasesHijos } from "../../paginas/Padre/ClasesHijos";
import { ComprarPaquete } from "../../paginas/Padre/ComprarPaquete";
import { EditarHijo } from "../../paginas/Padre/EditarHijo";
import { MetodoPago } from "../../paginas/Padre/MetodoPago";
import { MisHijos } from "../../paginas/Padre/MisHijos";
import { Perfil } from "../../paginas/Padre/Perfil";
import { Perfiles } from "../../paginas/Padre/Perfiles";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Perfil Padre y Registro de hijos", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfil = new Perfil();
  const perfiles = new Perfiles();
  const registrarhijo = new RegistrarHijo();
  const mishijos = new MisHijos();
  const agregarnuevohijo = new AgregarNuevoHijo();
  const editarhijo = new EditarHijo();
  const autopaymentpadre = new AutopaymentPadre();
  const metodopago = new MetodoPago();
  const claseshijo = new ClasesHijos();
  const comprarpaquete = new ComprarPaquete();

  beforeEach(function () {
    cy.visit("https://developers.learnwonderly.com/");

    cy.fixture("variables/variablesUsuario").then((variables) => {
      this.variables = variables;
      home.click_IniciaSesion();
      cy.get("#input_1").type(this.variables.correoPadre1);
      ingresar.type_contrasena("12345");
      ingresar.click_continuar();
    });
  });

  it("1_Verificar que un padre pueda Ir a su Perfil", function () {
    perfil.click_perfil(); //Click en la opcion Cuenta del dropdown menu
  });

  it("2_Verificar que se muestra un mensaje de advertencia cuando no se completa todos los campos requeridos en su Perfil.", () => {
    perfil.click_perfil(); //Click en la opcion Cuenta del dropdown menu
    perfil.click_guardar();
    cy.get(".title").should("be.visible");
  });

  it("3_Verificar que un padre puede editar y completar su Perfil.", () => {
    //Ir al Perfil del padre
    perfil.click_perfil();
    //Completar datos necesarios del Padre
    perfil.type_fechaNacimiento("01/01/2000");
    perfil.type_numCelular("71092100");
    perfil.type_direccion("Av Ayacucho 1234");
    perfil.type_ciudad("Cochabamba");
    perfil.type_provincia("Cercado");
    perfil.type_codigoPostal("00122");
    perfil.type_pais("Argentina");
    perfil.seleccionar_materias();
    perfil.click_guardar();
    cy.get(".alert").should("be.visible");
  });
});
