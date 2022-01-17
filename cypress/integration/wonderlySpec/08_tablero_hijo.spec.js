/// <reference types="cypress" />
// Casos de prueba realizado por Yanina Cardozo

import { MisHijos } from "../../paginas/Hijo/MisHijos";
import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { MetodoPago } from "../../paginas/Hijo/MetodoPago";
import { Clase } from "../../paginas/Hijo/Clase";
import { Autopayment } from "../../paginas/Hijo/Autopayment";
import { Destrezas } from "../../paginas/Destrezas";
import { ClasesHijos } from "../../paginas/Padre/ClasesHijos";
import { ClaseOnDemand } from "../../PaginasAdmin/ClaseOnDemand";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- tablero hijo", () => {
  const perfilhijo = new PerfilHijo();
  const ingresar = new Ingresar();
  const home = new Home();
  const mishijos = new MisHijos();
  const claseshijo = new ClasesHijo();
  const metodopago = new MetodoPago();
  const clase = new Clase();
  const autopayment = new Autopayment();
  const destrezas = new Destrezas();
  const claseshijos = new ClasesHijos();
  const claseondemand = new ClaseOnDemand();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
  });

  // NAVEGACION POR LOS TABLEROS: 1,2,3,4
  it("1_Verificar que el hijo se encuentre en el Tablero de Perfil", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    cy.wait(2000);
    // perfilhijo.click_usuarioPerfil();
    // cy.get(".text-dark").should("be.visible");
  });

  it("2_Verificar que el hijo se encuentre en el tablero de Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    cy.wait(2000);
    perfilhijo.click_usuarioPerfil();
    mishijos.click_tableroMisHijos();
    cy.get(".text-dark").should("be.visible");
  });

  it("3_Verificar que el hijo se encuentre en el tablero de Mis clases", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    claseshijo.click_menu_clasesHijo();
    cy.get(".text-dark").should("be.visible");
  });

  it("4_Verificar que el hijo se encuentre en el tablero de Metodo de Pago", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    perfilhijo.click_usuarioPerfil();
    metodopago.click_tableroMetodoPago();
    cy.get(".card-header").should("be.visible");
  });

  //  BIENVENIDA: 5,6,7,8
  it("5_Verificar que el hijo pueda ver el titulo de Bienvenido al sistema/Nombre del hijo en el Tab de Perfil", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    perfilhijo.click_usuarioPerfil();
    cy.get(".text-dark")
      .should("contain.text", "Bienvenido al sistema, hijo dos")
      .should("be.visible"); //Nombre del hijo
  });

  it("6_Verificar que el hijo pueda ver el titulo de Bienvenido al sistema/Nombre del hijo en el Tab de Mis hijos", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    perfilhijo.click_usuarioPerfil();
    mishijos.click_tableroMisHijos();
    cy.get(".text-dark")
      .should("contain.text", "Bienvenido al sistema, hijo dos")
      .should("be.visible"); //Nombre del hijo
  });

  it("7_Comprobar que el hijo pueda ver el titulo de Bienvenido al sistema/Nombre del hijo en el Tab de Clases hijo", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    perfilhijo.click_usuarioPerfil();
    claseshijos.click_Tablero_ClasesHijo();
    cy.get(".text-dark")
      .should("contain.text", "Bienvenido al sistema, hijo dos")
      .should("be.visible"); //Nombre del hijo
  });

  it('8_Demostrar que un hijo pueda ver el titulo de Bienvenido a tu perfil/nombre del padre en el Tab de "Método de Pago', () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    perfilhijo.click_usuarioPerfil();
    metodopago.click_tableroMetodoPago();
    cy.get(".text-dark")
      .should("contain.text", "Bienvenido a tu perfil, Julio")
      .should("be.visible"); //Nombre del hijo
  });

  // SECCION: 9
  it("9_Probar que el hijo se encuentre en la sección ON DEMAND", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_seccionOnDemand();
  });

  it("10_Demostrar que el hijo pueda entrar a un curso desde la seccion ON DEMAND", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_seccionOnDemand();
    cy.wait(2000);
    claseondemand.verificarCursoOnDemand("Miercoles 05 de Ingles 11:00");
  });

  it("10_1_Comprobar que el hijo pueda ingresar a la clase Ondemand creada", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_seccionOnDemand();
    claseondemand.verificarCursoOnDemand("Viernes 07 de Ingles 12:00");
  });

  // INSCRIPCION: 10
  it("11_Comprobar que un hijo pueda inscribirse a una clase entrando al detalle de la clase desde el Schedule", () => {
    perfilhijo.click_seleccionarHijo();
    cy.wait(3000);
    clase.verificarClaseInscrita();
  });

  it("16_Verificar que se muestra un mensaje de confirmacion cuando se inscribe a un curso", () => {
    home.click_MenuUsuario();
    home.click_salir();
    home.click_IniciaSesion();
    ingresar.type_Correo("marquito@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    clase.click_botonInscribeteCursos1eravez();
    clase.click_botonInscribeteCursos2davez();
    cy.get(".modal-body > p").should("be.visible");
  });
});
