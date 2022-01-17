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

  it.skip("9_Comprobar que se muestra un mensaje de advertencia cuando no completa todos los campos requeridos.", () => {
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
    cy.get(".title").should("be.visible");
  });

  // Revisar:
  it.skip("10_Verificar que el archivo subido del CV sea en formato PDF", () => {
    perfil.subirArchivo();
    perfil.click_botonGuardar("¡Oops! Hubo un problema con tu envío.");
    cy.get(".title").should("be.visible");
  });

  //HIJO SE INSCRIBE A UNA CLASE:
  it.skip("10_1_Comprobar que un hijo pueda inscribirse a una clase entrando al detalle de la clase", () => {
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

  it.skip("11_Verificar que un profesor puede iniciar una clase desde el detalle de la clase", () => {
    perfil.click_tableroClasesProfesor();
    cy.wait(2000);
    clasesprofesor.click_nombreClase();
    clasesprofesor.boton_iniciarClase();
  });

  it.skip("12_Verificar que un profesor puede Iniciar clase desde el tablero Clases profesor", () => {
    perfil.click_tableroClasesProfesor();
    cy.wait(2000);
    perfil.click_iniciarClase();
    cy.wait(4000);
  });

  it.skip("13_Verificar que un profesor puede Iniciar clase desde el Schedule", () => {
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    clasesprofesor.boton_iniciarClaseSchedule("Iniciar Clase");
  });

  it.skip("14_Verificar que un profesor puede ver sus clases asignadas desde el schedule", () => {
    home.click_LogoWonderly();
    home.click_seccionEnVivo();
    clasesprofesor.verificarClaseAsignadaSchedule("Iniciar Clase");
  });

  it.skip("15_Verificar que un profesor puede editar su clase.", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.editarClase();
    clasesprofesor.type_youtubeVideo(
      "https://www.youtube.com/watch?v=8JnfIa84TnU"
    );
    clasesprofesor.click_botonGuardar();
    cy.get(".alert").should("be.visible");
  });

  it.skip("16_Verificar que un profesor puede agregar material a su clase", () => {
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

  // Agregar material para Eliminar
  it.skip("17_Verificar que un profesor puede eliminar material de su clase", () => {
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
  });

  //Agregar Material para Editar
  it.skip("18_Verificar que un profesor puede editar material a su clase", () => {
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
    clasesprofesor.EditarMaterialAgregado(
      "Prueba para editar el titulo",
      "SegundoCuento.pdf"
    );
  });

  //Completar
  it.skip("19_Verificar que el material agregado por el profesor respeta los formatos permitidos y el tamaño maximo de archivo", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.iconoAgregarMaterial();
    clasesprofesor.click_botonAgregarMaterial();
    clasesprofesor.type_tituloFormAgregarMaterial("       ,        ");
    clasesprofesor.type_descripcionFormAgregarMaterial("                 ");
    clasesprofesor.subirArchivoFormAgregarMaterial();
    clasesprofesor.botonAgregarMaterialForm();
    clasesprofesor.click_botonRegresar();
  });

  it.skip("20_Verificar que las clases esten ordenadas cronologicamente", () => {
    cy.wait(2000);
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.VerificarFecha();
  });

  it.skip("21_Verificar que el profesor pueda ver el detalle de una clase seleccionada", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.click_nombreClase();
    cy.get(".actions-header > .class-title").should("be.visible");
    cy.get(".detail-materia > b").should("be.visible");
  });

  it.skip("Comprobar que un profesor no puede iniciar una clase hasta 30 minutos que inicie una clase.", () => {
    perfil.click_tableroClasesProfesor();
    cy.wait(2000);
    perfil.iniciarLaClaseAntes("¡Oops! Es muy pronto para inciar la clase.");
    cy.wait(4000);
  });

  // Completar el 25
  it.skip("24_Comprobar que un profesor puede ver la cantidad de alumnos registrados a una clase desde Clases Profesor.", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.click_numeroDeInscritos();
    cy.get("thead > tr > :nth-child(2)").should("be.visible");
  });

  it("25_Comprobar que un profesor pueda ver la cantidad de inscritos de su clase en '0' cuando no hay hijos inscritos", () => {
    clasesprofesor.tableroClasesProfesor();
    clasesprofesor.click_numeroDeInscritos("0");
  });
});
