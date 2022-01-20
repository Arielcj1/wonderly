/// <reference types="cypress" />
// Casos de prueba realizado por Yanina Cardozo

import { MisHijos } from "../../paginas/Hijo/MisHijos";
import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Clase } from "../../paginas/Hijo/Clase";
import { MembresiasHijo } from "../../paginas/Hijo/MembresiasHijo";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- tablero hijo", () => {
  const perfilhijo = new PerfilHijo();
  const ingresar = new Ingresar();
  const home = new Home();
  const clase = new Clase();
  const membresiahijos = new MembresiasHijo();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("nuevopadre07@gmail.com"); //Cambiar usuario Padre
    ingresar.type_contrasena("12345"); //Cambiar contraseña
    ingresar.click_continuar();
  });

  // INSCRIPCION:
  it("7_Comprobar que un hijo pueda inscribirse a una clase entrando al detalle de la clase desde el Schedule", () => {
    perfilhijo.click_seleccionarHijo();
    cy.wait(3000);
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    clase.verificarClaseInscrita();
  });

  //MEMBRESIAS RESERVAS:
  it("9_Comprobar que un hijo con membresia Explorador pueda inscribirse a una clase desde el schedule", () => {
    home.click_salir();
    home.click_IniciaSesion();
    ingresar.type_Correo("marieschrei@gmail.com"); //Cambiar usuario Padre
    ingresar.type_contrasena("123"); //Cambiar contraseña
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_Membresia_Explorador();
    membresiahijos.select_MembresiaHijo("July Schrei"); //Se debe Crear un hijo
    membresiahijos.botonSubscribirse();
    membresiahijos.botonMembresiasCompradas();
    home.click_LogoWonderly();
    clase.verificarClaseInscrita();
  });

  it("10_Comprobar que un hijo con membresia INVENTOR pueda inscribirse a una clase desde el schedule", () => {
    home.click_salir();
    home.click_IniciaSesion();
    ingresar.type_Correo("marieschrei@gmail.com"); //Cambiar usuario Padre
    ingresar.type_contrasena("123"); //Cambiar contraseña
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_Membresia_Inventor();
    membresiahijos.select_MembresiaHijo("Lucia Schrei"); //Se debe Crear un hijo
    membresiahijos.botonSubscribirse();
    membresiahijos.botonMembresiasCompradas();
    home.click_LogoWonderly();
    clase.verificarClaseInscrita();
  });

  it("11_Comprobar que un hijo con membresia GENIO pueda inscribirse a una clase desde el schedule", () => {
    home.click_salir();
    home.click_IniciaSesion();
    ingresar.type_Correo("marieschrei@gmail.com"); //Cambiar usuario Padre
    ingresar.type_contrasena("123"); //Cambiar contraseña
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    cy.wait(2000);
    home.click_Membresia_Genio();
    cy.wait(2000);
    membresiahijos.select_MembresiaHijo("Anita Schrei"); //Se debe Crear un hijo
    membresiahijos.botonSubscribirse();
    membresiahijos.botonMembresiasCompradas();
    home.click_LogoWonderly();
    clase.verificarClaseInscrita();
  });

  it("12_Verificar que se muestra un mensaje de confirmacion cuando se inscribe a un curso", () => {
    home.click_salir();
    home.click_IniciaSesion();
    ingresar.type_Correo("marquito@gmail.com"); //Cambiar un nuevo usuario existente
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo(); //Se debe  Crear un hijo
    clase.click_botonInscribeteCursos1eravez();
    clase.click_botonInscribeteCursos2davez();
    cy.get(".modal-body > p").should("be.visible");
  });

  it("13_Verificar que un hijo con membresia free no pueda Inscribirse a una clase que exceda sus 7 dias gratis.", () => {
    home.click_salir();
    home.click_IniciaSesion();
    ingresar.type_Correo("yenny@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    home.click_Flecha_Der();
    home.click_diaSchedule();
    cy.wait(3000);
    clase.click_InscribeteSchedule();
    clase.click_inscribeteGratis();
    cy.get(".container > .mb-5").should(
      "contain.text",
      "Escoge el camino hacia la genialidad"
    );
  });

  it("14_Verificar que un hijo con membresia Explorador no pueda inscribirse a  una clase que exceda sus 31 dias", () => {
    home.click_salir();
    home.click_IniciaSesion();
    ingresar.type_Correo("fernanda@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    cy.wait(3000);
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    membresiahijos.verificarInscripcionExplorador();
    clase.click_inscribeteGratis();
    cy.get(".container > .mb-5").should(
      "contain.text",
      "Escoge el camino hacia la genialidad"
    );
  });

  it("15_Verificar que un hijo con membresia Inventor no pueda inscribirse a  una clase que exceda sus 31 dias", () => {
    home.click_salir();
    home.click_IniciaSesion();
    ingresar.type_Correo("angel@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    cy.wait(3000);
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    membresiahijos.verificarInscripcionInventor();
    clase.click_inscribeteGratis();
    cy.get(".container > .mb-5").should(
      "contain.text",
      "Escoge el camino hacia la genialidad"
    );
  });

  it("16_Verificar que un hijo con membresia Genio no pueda inscribirse a  una clase que exceda sus 31 dias", () => {
    home.click_salir();
    home.click_IniciaSesion();
    ingresar.type_Correo("amalia@gmail.com");
    ingresar.type_contrasena("123");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    cy.wait(3000);
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    membresiahijos.verificarInscripcionGenio();
    clase.click_inscribeteGratis();
    cy.get(".container > .mb-5").should(
      "contain.text",
      "Escoge el camino hacia la genialidad"
    );
  });
});
