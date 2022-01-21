/// <reference types="cypress" />
// Casos de prueba realizado por Yanina Cardozo

import { Perfil } from "../../paginas/Profesor/Perfil";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { ClasesProfesor } from "../../paginas/Profesor/ClasesProfesor";
import { AlumnosProfesor } from "../../paginas/Profesor/AlumnosProfesor";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- PROFESOR", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfil = new Perfil();
  const clasesprofesor = new ClasesProfesor();
  const alumnosprofesor = new AlumnosProfesor();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("profesoruno@gmail.com"); //Cambiar el correo del profesor nuevo
    ingresar.type_contrasena("12345"); //Cambiar la contraseña que le corresponde
    ingresar.click_continuar();
  });

  // TABLEROS PROFESOR:
  it("8_Verificar que el profesor pueda dirigirse al tablero de sus Clases-Profesor", () => {
    clasesprofesor.tableroClasesProfesor();
    cy.get("thead > tr > :nth-child(2)").should("be.visible");
  });

  it("9_Verificar que un profesor puede ver todos los alumnos que se registraron a sus clases desde tablero Alumnos Profesor", () => {
    alumnosprofesor.tableroClasesAlumnos();
    cy.get("#menu-item-456 > .nav-link")
      .should("contain.text", "Clases Profesor")
      .should("be.visible");
  });

  it("10_Comprobar que se muestra un mensaje de advertencia cuando no completa todos los campos requeridos de su perfil", () => {
    perfil.type_nombre("Profesor"); //Nombre del profesor nuevo
    perfil.type_apellido("Uno"); //Apellido del profesor nuevo
    perfil.type_telefono("65266222");
    perfil.type_fechaNacimiento("01/12/1988");
    perfil.type_ciudadClear("Sucre");
    perfil.type_descripcionAcercaDeTi("profesora apasionada por la ensenanza");
    perfil.type_equipoQueUtilizas("Laptop, Celular");
    perfil.select_comoNosconociste("Instagram");
    perfil.check_especialidad();
    perfil.check_ExperienciaRangoEdad();
    perfil.seleccionarArchivo();
    perfil.click_botonGuardar();
    cy.wait(3000);
    cy.get(".title").should("be.visible");
  });

  it("11_Verificar que el archivo subido del CV sea en formato PDF", () => {
    perfil.subirArchivo();
    perfil.click_botonGuardar("¡Oops! Hubo un problema con tu envío.");
    cy.get(".title").should("be.visible");
  });
});
