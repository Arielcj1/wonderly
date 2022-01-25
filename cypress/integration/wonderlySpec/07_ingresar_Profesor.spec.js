// Casos de prueba realizado por:
// Autor: Yanina Cardozo
///<reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Perfil } from "../../paginas/Profesor/Perfil";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";
import { RegistroProfesor } from "../../PaginasAdmin/RegistroProfesor";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Creacion de un profesor", () => {
  const ingresar = new Ingresar();
  const home = new Home();
  const homeadmin = new HomeAdmin();
  const registroprofesor = new RegistroProfesor();
  const perfil = new Perfil();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
  });

  it("1_Comprobar que el Admin pueda registrar profesor desde el tablero Profesores Registrados.", () => {
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    cy.wait(2000);
    homeadmin.click_tableroProfesoresRegistrados();
    homeadmin.click_botonRegistrarProfesor();
    registroprofesor.type_nombre("Profesor"); //Nombre del profesor
    registroprofesor.type_apellido("Uno"); // Apellido del profesor
    registroprofesor.type_correoElectronico("profesor1@testtraining.com"); //Crear un nuevo profesor, correo electornico
    registroprofesor.type_contrasenia("12345");
    registroprofesor.type_confirmarContrasenia("12345");
    registroprofesor.click_botonListo();
    cy.get(".alert").should("be.visible");
  });

  it("2_Demostrar que un profesor no pueda ingresar con email y contraseña incorrecta", () => {
    ingresar.type_Correo("profesorceroxxx@testtraining.com"); //Correo incorrecto del profesor nuevo
    ingresar.type_contrasena("123456789");
    ingresar.click_continuar();
    cy.wait(2000);
    cy.get(".message-error > .title").should("be.visible");
  });

  it("3_Probar que se muestra un mensaje de advertencia cuando no ingresa todos los datos requeridos para iniciar sesion", () => {
    ingresar.type_Correo("profesorceroxxx@testtraining.com"); //Correo incorrecto del profesor nuevo
    ingresar.type_contrasena(" "); //Contrasenia vacia
    ingresar.click_continuar();
    cy.wait(2000);
    cy.get(".message-error > .title").should("be.visible");
  });

  it("4_Comprobar que un profesor puede iniciar sesion en wonderly", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("profesor1@testtraining.com"); //Correo del profesor nuevo
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
  });

  it("5_Verificar que pueda completar informacion cuando entra por primera vez", () => {
    ingresar.type_Correo("profesor1@testtraining.com"); //Correo del profesor nuevo
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    cy.wait(2000);
    perfil.type_telefono_PrimeraVez("79846521");
    perfil.type_fechaNac_primeraVez("12/12/1985");
    perfil.select_pais_primeraVez("Bolivia");
    perfil.select_comoNosConociste_primeraVez("Facebook");
    perfil.click_siguiente_PV();
    cy.get(".alert").should("be.visible");
    perfil.type_descripcion_PV("hola mundo");
    perfil.type_equipo_PV("Laptop");
    perfil.check_especialidad_PV();
    perfil.check_experiencia_PV();
    perfil.subir_doc_PV();
    perfil.listo_PV();
    cy.get("#menu-item-144 > .nav-link")
      .should("contain.text", "Perfil")
      .should("be.visible");
  });

  it("6_Comprobar que un profesor pueda editar sus datos personales", () => {
    ingresar.type_Correo("profesor1@testtraining.com"); //Correo del profesor nuevo
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    cy.wait(2000);
    perfil.type_ciudad("Sucre");
    perfil.type_descripcionAcercaDeTi("Profesor apasionado en la enseñanza");
    perfil.click_botonGuardar();
    cy.get(".alert").should("be.visible");
    cy.wait(2000);
  });
});
