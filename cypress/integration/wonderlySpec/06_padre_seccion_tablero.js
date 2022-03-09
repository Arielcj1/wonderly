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

  it("1_Verificar que el padre pueda Ir al Tablero Mis Hijos", () => {
    perfil.click_perfil();
    mishijos.click_Tablero_MisHijos();
    cy.get("#menu-item-211 > .nav-link")
      .should("contain.text", "Mis Hijos")
      .should("be.visible");
  });

  it("2_Demostrar que un padre puede editar los datos de un hijo.", () => {
    perfil.click_perfil();
    mishijos.click_Tablero_MisHijos();
    mishijos.clickEditar();
    editarhijo.typeEditarNombre("Goku");
    editarhijo.typeEditarApellido("Son");
    editarhijo.typeFechaNacimiento("01/01/2016");
    editarhijo.clickBotonGuardar();
    cy.get(".alert").should("be.visible"); //Assert de datos guardados con exito
  });

  it("3_Verificar que pueda Activar el Autopayment desde el tablero Mis Hijos", () => {
    perfil.click_perfil();
    mishijos.click_Tablero_MisHijos();
    autopaymentpadre.verificarAutopayment(1);
  });

  it("4_Verificar que pueda Cancelar el Autopayment desde el tablero Mis Hijos", () => {
    perfil.click_perfil();
    mishijos.click_Tablero_MisHijos();
    autopaymentpadre.verificarAutopayment(1);
  });

  it.skip('Verificar que pueda Actualizar Membresia "Explorador" desde el tablero Mis hijos', () => {
    perfil.click_perfil();
    mishijos.click_Tablero_MisHijos();
    autopaymentpadre.verificarAutopayment(4);
    autopaymentpadre.click_opcionExplorador();
    autopaymentpadre.click_botonEnviar();
    cy.get(".alert").should("be.visible");
  });

  it.skip('Verificar que pueda Actualizar Membresia "Inventor" desde el tablero Mis hijos', () => {
    perfil.click_perfil();
    mishijos.click_Tablero_MisHijos();
    autopaymentpadre.verificarAutopayment(5);
    autopaymentpadre.click_opcionInventor();
    autopaymentpadre.click_botonEnviar();
    cy.get(".alert").should("be.visible");
  });

  it.skip('Verificar que pueda Actualizar Membresia "Genio" desde el tablero Mis hijos', () => {
    perfil.click_perfil();
    mishijos.click_Tablero_MisHijos();
    autopaymentpadre.verificarAutopayment(6);
    autopaymentpadre.click_opcionGenio();
    autopaymentpadre.click_botonEnviar();
    cy.get(".alert").should("be.visible");
  });

  it("5_Verificar que un padre puede ver todas las clases de sus hijos desde 'Clases'", () => {
    perfil.click_perfil();
    claseshijo.click_Tablero_ClasesHijo();
  });

  it("6_Comprobar que un padre pueda actualizar los datos de la tarjeta de pago desde Método de Pago", () => {
    perfil.click_perfil();
    metodopago.click_tablero_MetodoPago();
    metodopago.click_actualizar(); //Click en el boton Actualizar desde el tablero Metodo de Pago
    // Acutalizar datos de la tarjeta de pago
    metodopago.type_numTarjeta("4242424242424242");
    metodopago.type_mesExp("05");
    metodopago.type_añoExp("2022");
    metodopago.type_cvc("123");
    metodopago.type_nomTitular("Super Julio Roca");
    metodopago.click_enviar();
  });

  it("7_Verificar que un padre pueda actualizar el método de pago cuando compra una membresía", () => {
    home.click_LogoWonderly();
    home.click_Membresia_Explorador();
    comprarpaquete.click_botonAqui();
    // Acutalizar datos de la tarjeta de pago
    metodopago.type_numTarjeta("4242424242424242");
    metodopago.type_mesExp("08");
    metodopago.type_añoExp("2022");
    metodopago.type_cvc("123");
    metodopago.type_nomTitular("Super Julio Roca Sayajin");
    metodopago.click_enviar();
  });

  it.skip("Comprobar que un padre no pueda reservar un clase.", () => {
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    cy.contains(testCaseConfig.nombreCursoNavegacion).click({ force: true }); //Cambiar nombre de curso
    registrarhijo.click_botonInscribeteGratis();
    cy.get(".modal-content > .my-3").should("be.visible"); //Assert es que le muestre los perfiles de los hijos para elija un hijo
  });
});
