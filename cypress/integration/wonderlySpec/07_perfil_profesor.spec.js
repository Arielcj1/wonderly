/// <reference types="cypress" />
// Casos de prueba realizado por Yanina Cardozo

import { Perfil } from "../../paginas/Profesor/Perfil";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { ClasesProfesor } from "../../paginas/Profesor/ClasesProfesor";
import { AlumnosProfesor } from "../../paginas/Profesor/AlumnosProfesor";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Clase } from "../../paginas/Hijo/Clase";

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

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("profesor20@gmail.com");
    ingresar.type_contrasena("12345");
    // ingresar.type_Correo("profeana@gmail.com");
    // ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
  });

  it.skip("1_Verificar que el profesor se encuentre en la pestaña POR QUE WONDERLY?", () => {
    home.click_LogoWonderly();
    home.click_PorqueWonderly();
    cy.get("h2").should("be.visible");
  });

  it.skip("2_Comprobar que el profesor se encuentre en la pestaña de DESTREZAS", () => {
    home.click_LogoWonderly();
    home.click_Destrezas();
    cy.get("h2").should("be.visible");
  });

  it.skip("3_Probar que el profesor se encuentre en la sección ON DEMAND", () => {
    home.click_LogoWonderly();
    home.click_seccionOnDemand();
  });

  it.skip("4_Verificar que el profesor se encuentre en la sección EN VIVO", () => {
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
  });

  it.skip("5_verificar que el profesor pueda dirigirse al tablero de sus Clases-Profesor", () => {
    clasesprofesor.tableroClasesProfesor();
    cy.get("thead > tr > :nth-child(2)").should("be.visible");
  });

  it.skip("6_verificar que el profesor pueda dirigirse al tablero de  Alumnos-Profesor", () => {
    alumnosprofesor.tableroClasesAlumnos();
    //cy.get("thead > tr > :nth-child(2)").should("be.visible");
  });

  it.skip("Comprobar que el profesor pueda completar su perfil", () => {
    perfil.type_nombre("Profesor");
    perfil.type_apellido("Dieciseis");
    perfil.type_telefono("65266222");
    perfil.type_fechaNacimiento("01/12/1988");
    perfil.type_ciudad("Sucre");
    perfil.type_descripcionAcercaDeTi("profesora apasionada por la ensenanza");
    perfil.type_equipoQueUtilizas("Laptop, Celular");
    perfil.select_comoNosconociste("Instagram");
    perfil.check_especialidad();
    perfil.check_ExperienciaRangoEdad();
    perfil.seleccionarArchivo();
    perfil.click_botonGuardar();
    cy.get(".alert").should("be.visible");
  });

  //Implementar que el hijo pueda inscribirse a una clase

  it("Verificar que el hijo pueda inscribirse a una clase desde la seccion en VIVO", () => {
    home.click_MenuUsuario();
    home.click_salir();
    home.click_IniciaSesion();
    ingresar.type_Correo("padre20@gmail.com"); //Cambiar al correo del padre
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfilhijo.click_seleccionarHijo();
    clase.click_botonEntrarClase();
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

  it.skip("10_Demostrar que el profesor pueda editar su clase", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.editarClase();
    clasesprofesor.type_youtubeVideo(
      "https://www.youtube.com/watch?v=8JnfIa84TnU"
    );
    clasesprofesor.click_botonGuardar();
    cy.get(".alert").should("be.visible");
  });

  it.skip("Probar que el profesor pueda agregar material a su clase", () => {
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

  it("12_Verificar que el profesor pueda iniciar una clase", () => {
    perfil.click_tableroClasesProfesor();
    cy.wait(2000);
    perfil.click_iniciarClase();
    //cy.get(".title").should("be.visible");
    cy.wait(4000);
  });

  // Eliminar material
  it.skip("Verificar que el profesor pueda eliminar material de su clase", () => {
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
    cy.get(".text-dark").should("be.visible");

    // clasesprofesor.tableroClasesProfesor();
    // clasesprofesor.iconoAgregarMaterial();
    // clasesprofesor.click_botonAgregarMaterial();
    // clasesprofesor.verificarMaterial("No hay materiales.");
  });
});
