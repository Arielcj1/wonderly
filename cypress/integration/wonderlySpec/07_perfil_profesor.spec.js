/// <reference types="cypress" />
// Casos de prueba realizado por Yanina Cardozo

import { Perfil } from "../../paginas/Profesor/Perfil";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { ClasesProfesor } from "../../paginas/Profesor/ClasesProfesor";
import { AlumnosProfesor } from "../../paginas/Profesor/AlumnosProfesor";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Clase } from "../../paginas/Hijo/Clase";
import { Destrezas } from "../../paginas/Destrezas";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- PROFESOR", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const perfil = new Perfil();
  const clasesprofesor = new ClasesProfesor();
  const alumnosprofesor = new AlumnosProfesor();
  const clase = new Clase();
  const perfilhijo = new PerfilHijo();
  const destrezas = new Destrezas();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    // ingresar.type_Correo("profesor20@gmail.com");
    // ingresar.type_contrasena("12345");
    ingresar.type_Correo("profeana@gmail.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
  });

  // TABLEROS PROFESOR:
  it.skip("7_Verificar que el profesor pueda dirigirse al tablero de sus Clases-Profesor", () => {
    clasesprofesor.tableroClasesProfesor();
    cy.get("thead > tr > :nth-child(2)").should("be.visible");
  });

  it.skip("8_Verificar que un profesor puede ver todos los alumnos que se registraron a sus clases desde tablero Alumnos Profesor", () => {
    alumnosprofesor.tableroClasesAlumnos();
    cy.get("#menu-item-456 > .nav-link")
      .should("contain.text", "Clases Profesor")
      .should("be.visible");
  });

  it("9_Comprobar que se muestra un mensaje de advertencia cuando no completa todos los campos requeridos.", () => {
    perfil.type_nombre("Ana");
    perfil.type_apellido("Gunn");
    perfil.type_telefono("65266222");
    perfil.type_fechaNacimiento("01/12/1988");
    perfil.type_ciudad("Sucre");
    perfil.type_descripcionAcercaDeTi("profesora apasionada por la ensenanza");
    perfil.type_equipoQueUtilizas("Laptop, Celular");
    perfil.select_comoNosconociste("Instagram");
    perfil.check_especialidad();
    perfil.check_ExperienciaRangoEdad();
    perfil.seleccionarArchivo();
    perfil.click_botonGuardar("Su información ha sido guardada con éxito");
  });

  it.skip("10_Verificar que el archivo subido del CV sea en formato PDF", () => {
    perfil.subirArchivo();
    perfil.click_botonGuardar(
      "El tipo de archivo subido no está permitido. Debe ser uno de los siguientes: pdf."
    );
    cy.get(".title").should("be.visible");
  });

  //Implementar que el hijo pueda inscribirse a una clase

  it.skip("1_Comprobar que un hijo pueda inscribirse a una clase entrando al detalle de la clase", () => {
    home.click_MenuUsuario();
    home.click_salir();
    home.click_IniciaSesion();
    ingresar.type_Correo("padre20@gmail.com"); //Cambiar al correo del padre
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    cy.wait(3000);
    clase.verificarClaseInscrita();
  });

  it.skip("8_Verificar que el profesor pueda ver el detalle de una clase seleccionada", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.click_nombreClase();
    cy.get("h4").should("be.visible");
  });

  it.skip("9_Verificar que el profesor pueda ver los alumnos inscritos de su clase", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.click_numeroDeInscritos();
    cy.get("thead > tr > :nth-child(2)").should("be.visible");
  });

  it.skip("13_erificar que un profesor puede editar su clase.", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.editarClase();
    clasesprofesor.type_youtubeVideo(
      "https://www.youtube.com/watch?v=8JnfIa84TnU"
    );
    clasesprofesor.click_botonGuardar();
    cy.get(".alert").should("be.visible");
  });

  it.skip("14_Verificar que un profesor puede agregar material a su clase", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.click_botonAgregarMaterial();
    clasesprofesor.type_tituloFormAgregarMaterial("Lectura, Cuentos");
    clasesprofesor.type_descripcionFormAgregarMaterial(
      "Cuentos cortos para practicar la lectura"
    );
    clasesprofesor.subirArchivoFormAgregarMaterial();
    clasesprofesor.botonAgregarMaterialForm();
    clasesprofesor.click_botonRegresar();
  });

  it.skip("12_Verificar que el profesor pueda iniciar una clase", () => {
    perfil.click_tableroClasesProfesor();
    cy.wait(2000);
    perfil.click_iniciarClase();
    //cy.get(".title").should("be.visible");
    cy.wait(4000);
  });

  // Agregar para Eliminar y editar material
  it.skip("15_16_Verificar que un profesor puede eliminar material y editar material a su clase", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.AgregarMaterial2davez(
      "Titulo ",
      "Esto es una descripción ",
      "sample.pdf"
    );
    clasesprofesor.click_botonRegresar();
    cy.wait(2000);
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.EliminarMaterialAgregado();
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.EditarMaterialAgregado(
      "Prueba para editar el titulo",
      "SegundoCuento.pdf"
    );
  });

  it.skip("Verificar que las clases esten ordenadas cronologicamente", () => {
    cy.wait(2000);
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.VerificarFecha();
  });
});
