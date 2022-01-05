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

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("padre20@gmail.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
  });

  it.skip("Comprobar que el hijo pueda ver el detalle de una clase desde Clases Hijo", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    cy.get(".actions-header > .class-title").should("be.visible");
  });

  // // implementado tambien en el spec del profesor
  // it("Verificar que el hijo pueda inscribirse a una clase desde la seccion en VIVO", () => {
  //   perfilhijo.click_seleccionarHijo();
  //   // clase.click_botonEntrarClase();
  //   clase.click_botonNombreClase();
  //   cy.wait(3000);
  //   clase.verificarClaseInscrita();
  // });

  it.skip("Demostrar que el hijo pueda entrar a un curso desde la seccion ON DEMAND", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_seccionOnDemand();
    cy.wait(2000);
    claseondemand.verificarCursoOnDemand("Miercoles 05 de Ingles 11:00");
  });

  it("Verificar que el hijo pueda entrar a la clase mediante Zoom", () => {
    perfilhijo.click_seleccionarHijo();
    home.click_MenuUsuario();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    claseshijo.click_botonUnirseClase();
  });

  it.skip("Comprobar que un nuevo hijo registrado se inscriba a una clase en Wonderly", () => {
    perfilpadre.click_mostrarSubmenu();
    perfilpadre.click_salir();
    home.click_pruebaGratis();
    registro.type_nombre("Ana");
    registro.type_apellidos("Baptista");
    registro.type_correo("17padre@gmail.com");
    registro.type_contrasenia("12345");
    registro.type_numero("65266222");
    registro.click_siguiente();
    cy.wait(3000);
    registrarHijo.click_botonRegistraTuHijo();
    registrarHijo.type_nombreHijoPV("Camila");
    registrarHijo.type_apellidoHijoPV("Baptista");
    registrarHijo.type_fechaNacimientoPV("09/12/2015");
    cy.wait(2000);
    registrarHijo.click_botonExploraCursos();
    cy.wait(2000);
    perfilhijo.click_seleccionarHijo();
    clase.click_botonEntrarClase();
    clase.verificarClaseInscrita();
    cy.wait(2000);
    cy.get("h4").should("be.visible");
  });

  it("Comprobar que el hijo pueda ingresar a la clase Ondemand creada", () => {
    home.click_MenuUsuario();
    home.click_salir();
    home.click_IniciaSesion();
    ingresar.type_Correo("padre20@gmail.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_seccionOnDemand();
    claseondemand.verificarCursoOnDemand("Viernes 07 de Ingles 12:00");
  });
});
