///<reference types="cypress" />
// Casos de prueba realizado por Yanina Cardozo

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

  it.skip("1_Verificar que el admin pueda crear un profesor", () => {
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    cy.wait(2000);
    homeadmin.click_tableroProfesoresRegistrados();
    homeadmin.click_botonRegistrarProfesor();
    registroprofesor.type_nombre("Profesor");
    registroprofesor.type_apellido("Veinte");
    registroprofesor.type_correoElectronico("profesor20@gmail.com");
    registroprofesor.type_contrasenia("12345");
    registroprofesor.type_confirmarContrasenia("12345");
    registroprofesor.click_botonListo();
    cy.get(".alert").should("be.visible");
  });

  it.skip("2_Comprobar que un profesor puede iniciar sesion en wonderly", () => {
    ingresar.type_Correo("profesor20@gmail.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    cy.wait(2000);
    cy.get("#menu-item-144 > .nav-link")
      .should("contain.text", "Perfil")
      .should("be.visible");
  });

  it("3_Comprobar que un profesor puede editar y completar sus datos personales", () => {
    ingresar.type_Correo("profesor20@gmail.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    cy.wait(2000);
    perfil.type_telefono_PrimeraVez("79846522");
    perfil.type_fechaNac_primeraVez("12/12/1985");
    perfil.select_pais_primeraVez("Bolivia");
    perfil.select_comoNosConociste_primeraVez("Facebook");
    perfil.click_siguiente_PV();
    cy.get(".alert").should("be.visible");
    perfil.type_descripcion_PV("hola mundo");
    perfil.type_equipo_PV("telefono fijo");
    perfil.check_especialidad_PV();
    perfil.check_experiencia_PV();
    perfil.subir_doc_PV();
    perfil.listo_PV();
    cy.get(".text-dark").should("be.visible");
  });

  it.skip("4_Comprobar que se muestra un mensaje de advertencia cuando no ingresa todos los datos requeridos para iniciar sesion", () => {
    ingresar.type_Correo("profesor20@gmail.com");
    ingresar.type_contrasena("1234");
    ingresar.click_continuar();
    cy.wait(2000);
    cy.get(".message-error > .title").should("be.visible");
  });

  it.skip("5_Comprobar que un profesor no pueda ingresar con email y contraseña incorrecta", () => {
    ingresar.type_Correo("profesor201@gmail.com");
    ingresar.type_contrasena("123456789");
    ingresar.click_continuar();
    cy.wait(2000);
    cy.get(".message-error > .title").should("be.visible");
  });
});
