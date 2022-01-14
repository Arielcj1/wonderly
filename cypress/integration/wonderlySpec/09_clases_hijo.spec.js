/// <reference types="cypress" />
// Casos de prueba realizado por Yanina Cardozo

import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Clase } from "../../paginas/Hijo/Clase";
import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";
import { Registro } from "../../paginas/Registro";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";
import { PerfilPadre } from "../../paginas/Padre/PerfilPadre";
import { ClaseOnDemand } from "../../PaginasAdmin/ClaseOnDemand";
import { Autopayment } from "../../paginas/Hijo/Autopayment";
import { MisHijos } from "../../paginas/Hijo/MisHijos";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- clases hijos", () => {
  const perfilhijo = new PerfilHijo();
  const ingresar = new Ingresar();
  const home = new Home();
  const clase = new Clase();
  const claseshijo = new ClasesHijo();
  const registro = new Registro();
  const registrarHijo = new RegistrarHijo();
  const perfilpadre = new PerfilPadre();
  const claseondemand = new ClaseOnDemand();
  const mishijos = new MisHijos();
  const autopayment = new Autopayment();
  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    // ingresar.type_Correo("padre20@gmail.com");
    // ingresar.type_contrasena("12345");
    ingresar.type_Correo("marieschrei@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
  });

  //CLASES
  it.skip("31_Verificar que un hijo puede ingresar al detalle de un curso desde el schedule.", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_seccionEnVivo();
    clase.click_botonEntrarClase();
    claseshijo.aprendizajeProyecto();
    cy.wait(2000);
    claseshijo.botonPreguntaWhatsapp();
  });
  it.skip("32_Verificar que un hijo pueda ingresar al detalle de un curso desde la pestaña Cursos", () => {
    home.click_pestañaCursos();
    claseshijo.botonInscribeteCursos();
    cy.get("h4").should("be.visible");
  });

  it.skip("33_Comprobar que el hijo pueda ver el detalle de una clase desde Clases Hijo", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    cy.get(".actions-header > .class-title").should("be.visible");
  });

  it.skip("34_Verificar que un hijo pueda ingresar 30 minutos antes cuya clase esta por empezar", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    claseshijo.click_botonUnirseClase();
  });

  // it.skip(37_"verificar que las clases esten ordenadas cronologicamente", () => {
  //   perfilhijo.click_seleccionarHijo();
  //   home.click_MenuUsuario();
  //   claseshijo.click_menu_clasesHijo();
  //   clase.VerificarFecha();
  // });

  it.skip("38_Verificar que un hijo pueda descargar el material de una clase", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    clase.click_descargarMaterial();
  });

  it("41_Verificar que el hijo pueda ver el counter de la clase", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    cy.get(".countdown-container").should("be.visible");
  });
  // AUTOPAYMENT: 41,42,43,44,45,46

  it.skip("42_Verificar que pueda Activar el Autopayment desde el tablero Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    perfilhijo.click_usuarioPerfil(); //Cuenta
    mishijos.click_tableroMisHijos();
    autopayment.verificarAutopaymentActivar();
  });

  it.skip("43_Verificar que pueda Cancelar el Autopayment desde el tablero Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    perfilhijo.click_usuarioPerfil(); //Cuenta
    mishijos.click_tableroMisHijos();
    autopayment.verificarAutopaymentCancelar();
  });

  it.skip("44_45_46_Verificar que pueda Actualizar Membresia Genio, Inventor y Explorador desde el tablero Mis hijos", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    perfilhijo.click_usuarioPerfil(); //Cuenta
    mishijos.click_tableroMisHijos();
    autopayment.ActualizarMembresia();
  });
});
