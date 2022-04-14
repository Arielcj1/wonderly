///<reference types="cypress" />
// Casos de prueba realizado por Patrik Delgadillo

import { testCaseConfig } from "../../helpers/helpers";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";
import { ModulosOnDemand } from "../../PaginasAdmin/ModulosOnDemand";
import { OnDemand } from "../../PaginasAdmin/OnDemand";
import { WonderlyClases } from "../../PaginasAdmin/WonderlyClases";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe.skip("Administrador - Wonderly Clases", () => {
  const ingresar = new Ingresar();
  const home = new Home();
  const homeadmin = new HomeAdmin();
  const wonderlyclase = new WonderlyClases();
  const ondemand = new OnDemand();
  const modulosonDemand = new ModulosOnDemand();

  beforeEach(function () {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
  });

  it("1_Verificar que el administrador pueda ingresar al tablero Wonderly Clases", () => {
    homeadmin.click_tableroWonderlyClases();
    cy.get("thead > tr > :nth-child(3)").should("be.visible");
    cy.wait(1000);
  });

  it("2_Verificar que al seleccionar una curso lo redirecciona al detalle del curso desde el tablero Wonderly Clases.", () => {
    homeadmin.click_tableroWonderlyClases();
    wonderlyclase.click_nombreCurso(); //Click en el 1er curso de la lista
    cy.get("#pills-proyecto-tab > :nth-child(1)").should("be.visible"); //Assert "Aprendizaje y proyecto final"
  });

  it("3_Verificar que al seleccionar una clase lo redirecciona al detalle de la clase desde el tablero Wonderly Clases.", () => {
    homeadmin.click_tableroWonderlyClases();
    wonderlyclase.click_nombreClase(); //Click en la 1ra clase de la lista
    cy.get(".class-details > h5").should("be.visible"); //Assert "Detalle de la clase"
  });

  it('4_Verificar que el Admin pueda ingresar a "Clases on demand".', () => {
    homeadmin.click_tableroWonderlyOnDemand();
    cy.contains("Agregar On Demand").should("be.visible");
  });

  it("5_Comprobar que al seleccionar un clase on demand lo redirecciona al detalle de la clase on demand.", () => {
    homeadmin.click_tableroWonderlyOnDemand();
    ondemand.click_nombreClaseOnDemand(); //Click en la 6 clase de la lista
    cy.contains("Este es el contenido que verás. ¡Feliz aprendizaje!").should(
      "be.visible"
    );
  });

  it("6_Comprobar que el admin puede Agregar clase on demand.", () => {
    homeadmin.click_tableroWonderlyOnDemand();
    ondemand.click_agregarClaseOnDemand();
    ondemand.type_tituloClase(testCaseConfig.nombreClaseOnDemand); //Cambiar clase on demand
    ondemand.type_descripcionClase("Detalle de la clase ondemand para niños");
    ondemand.select_materia("Inglés");
    ondemand.select_edades(); //Checkbox de edad 7-8
    ondemand.type_youtubeVideo("https://www.youtube.com/watch?v=zIWjYSfy0PQ");
    ondemand.select_herramienta("Eduten");
    ondemand.click_confirmarAgregarOnDemand();
  });

  it("7_Verificar que el Admin puede editar una clase on demand", () => {
    homeadmin.click_tableroWonderlyOnDemand();
    modulosonDemand.buscar_cursoOnDemand(testCaseConfig.nombreClaseOnDemand, 1); //busca la clase on demand para editar
    //Realizar cambios para editar
    ondemand.type_editarTituloClase(testCaseConfig.nombreClaseOnDemandEditado);
    ondemand.type_editardescripcionClase(
      "Hay que pagar para ver este contenido, nada es gratis"
    );
    ondemand.select_editarmateria("Inglés");
    ondemand.select_editaredades(); //Checkbox de edad 7-8
    ondemand.type_editaryoutubeVideo(
      "https://www.youtube.com/watch?v=zIWjYSfy0PQ"
    );
    ondemand.select_editarherramienta("Eduten");
    //Guardar cambios
    ondemand.click_guardar();
    cy.wait(3000);
  });

  it("8_Verificar que el Admin puede agregar Modulos y clases a una clase On Demand", () => {
    homeadmin.click_tableroWonderlyOnDemand();
    modulosonDemand.buscar_cursoOnDemand(
      testCaseConfig.nombreClaseOnDemandEditado,
      2
    ); //Cambiar clase on demand
    modulosonDemand.agregar_Modulos_Clases(
      "Modulo ",
      "Clase ",
      "https://youtu.be/k_U5LFvzyL4"
    );
    modulosonDemand.click_guardarModulo();
    cy.wait(3000);
  });
});
