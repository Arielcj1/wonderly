/// <reference types="cypress" />
import { Perfil } from "../../paginas/Hijo/Perfil";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Clase } from "../../paginas/Hijo/Clase";
import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";
import { Registro } from "../../paginas/Registro";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";
import { PerfilPadre } from "../../paginas/Padre/PerfilPadre";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- Home Page", () => {
  const perfil = new Perfil();
  const ingresar = new Ingresar();
  const home = new Home();
  const clase = new Clase();
  const claseshijo = new ClasesHijo();
  const registro = new Registro();
  const registrarHijo = new RegistrarHijo();
  const perfilpadre = new PerfilPadre();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
  });

  it.skip("Comprobar que el hijo pueda ver el detalle de una clase desde Clases Hijo", () => {
    perfil.click_seleccionarHijo();
    home.click_MenuUusuario();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    cy.get(".actions-header > .class-title").should("be.visible");
  });

  it.skip("Verificar que el hijo pueda inscribirse a una clase desde la seccion en VIVO", () => {
    perfil.click_seleccionarHijo();
    clase.click_botonEntrarClase();
    cy.wait(3000);
    clase.verificarClaseInscrita();
  });

  it.skip("Demostrar que el hijo pueda entrar a un curso desde la seccion ON DEMAND", () => {
    perfil.click_seleccionarHijo();
    home.click_OnDemandSeccion();
    cy.wait(2000);
    clase.click_botonEntrarCurso();
    cy.get(":nth-child(1) > .title-modulo").should("be.visible");
  });

  it("Verificar que el hijo pueda entrar a la clase mediante Zoom", () => {
    perfil.click_seleccionarHijo();
    home.click_MenuUsuario();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    claseshijo.click_botonUnirseClase();
  });

  it.skip("Comprobar que un nuevo hijo registrado incie una clase, cuando el padre se registre en Wonderly", () => {
    perfilpadre.click_mostrarSubmenu();
    perfilpadre.click_salir();
    home.click_pruebaGratis();
    registro.type_nombre("Ana");
    registro.type_apellidos("Baptista");
    registro.type_correo("anabaptista28@gmail.com");
    registro.type_contrasenia("123");
    registro.type_numero("65266222");
    registro.click_siguiente();
    cy.wait(3000);
    home.click_botonRegistraTuHijo();
    registrarHijo.type_nombre("Camila");
    registrarHijo.type_apellido("Baptista");
    registrarHijo.type_fechaDeNacimiento("09/12/2015");
    cy.wait(2000);
    registrarHijo.click_botonExploraCursos();
    cy.wait(2000);
    perfil.click_seleccionarHijo();
    clase.click_botonEntrarClase();
    clase.verificarClaseInscrita();
    cy.wait(2000);
    cy.get("h4").should("be.visible");
  });
});
