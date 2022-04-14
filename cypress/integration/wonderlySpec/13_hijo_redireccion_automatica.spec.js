/// <reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Cursos } from "../../paginas/Cursos";
import { Ingresar } from "../../paginas/Ingresar";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Registro } from "../../paginas/Registro";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";
import { testCaseConfig } from "../../helpers/helpers";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Redireccion automatica al curso", () => {
  const home = new Home();
  const cursos = new Cursos();
  const ingresar = new Ingresar();
  const perfilhijo = new PerfilHijo();
  const registro = new Registro();
  const registrarhijo = new RegistrarHijo();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  it('1_Demostrar que redireccione al login cuando un usuario sin loguearse presiona en "inscribete gratis" de un curso', () => {
    cursos.clickEnVivo();
    cursos.botonComienzaHomeEnVivoGuest();
    cursos.segundoBotonInscribeteGuest();
    cy.get(".entry-content > h5").should("be.visible");
  });

  it("2_Demostrar que se inscriba automáticamente al curso que ha seleccionado después que el usuario se loguee", () => {
    cursos.clickEnVivo();
    cursos.botonComienzaHomeEnVivoGuest();
    cursos.segundoBotonInscribeteGuest();
    ingresar.type_Correo("yani238@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(6);
    cy.wait(3000);
    cy.get(".modal-body > p").should("be.visible");
    cy.get(".alert").should("be.visible");

    //Verificar el elemento:

    // home.verificarExistenciaElemento(
    //   ".site-container",
    //   ".table",
    //   "verificador2"
    // );
    // cy.wait(2000);
    // cy.fixture("verificadores/verificador2").then((verifica) => {
    //   cy.log("VERIFICADOR 2", verifica);
    //   this.verifica = verifica;
    //   alumnosprofesor.mensajeAlumnosInscritos(this.verifica.verify);
    // });

    ////////
  });
  it("3_Verificar que se inscriba automaticamente al curso que ha seleccionado para un usuario que acaba de registrarse", () => {
    cursos.clickEnVivo();
    cursos.botonComienzaHomeEnVivoGuest();
    cursos.segundoBotonInscribeteGuest();
    home.boton14diasGratis();
    registro.type_nombre("Maribel");
    registro.type_apellidos("MM");
    registro.type_correo(testCaseConfig.correoPadre6);
    registro.type_contrasenia("12345");
    registro.type_numero("65268974");
    registro.click_siguiente();
    registrarhijo.click_botonRegistraTuHijo();
    registrarhijo.type_nombreHijoPV("Hijo");
    registrarhijo.type_apellidoHijoPV("PRIMERO");
    registrarhijo.type_fechaNacimientoPV("20/10/2009");
    registrarhijo.click_botonExploraCursos();
    perfilhijo.seleccionarHijoPosicion(1);
    cy.get(".modal-body > p").should("be.visible");
    cy.get(".alert").should("be.visible");
  });

  it("5_Demostrar que redireccione e inscriba automaticamente a un usuario que acaba de registrarse, desde Pagina cursos", () => {
    home.clickPestañaCursos();
    cursos.clickEnVivo();
    cursos.botonComienzaCursosGuest();
    cursos.segundoBotonInscribeteGuest();
    home.boton14diasGratis();
    registro.type_nombre("Maribel");
    registro.type_apellidos("MM");
    registro.type_correo(testCaseConfig.correoPadre7);
    registro.type_contrasenia("12345");
    registro.type_numero("65268974");
    registro.click_siguiente();
    registrarhijo.click_botonRegistraTuHijo();
    registrarhijo.type_nombreHijoPV("Hijo");
    registrarhijo.type_apellidoHijoPV("PRIMERO");
    registrarhijo.type_fechaNacimientoPV("20/10/2009");
    registrarhijo.click_botonExploraCursos();
    perfilhijo.seleccionarHijoPosicion(1);
    cy.get(".modal-body > p").should("be.visible");
    cy.get(".alert").should("be.visible");
  });

  it("6_verificar que redireccione pero no pueda inscribirse con membresia inactiva una vez que el usuario se loguee", () => {
    home.clickPestañaCursos();
    cursos.clickEnVivo();
    cursos.botonComienzaCursosGuest();
    cursos.segundoBotonInscribeteGuest();
    ingresar.type_Correo("yani238@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(5); //HIJO CON MEMBRESIA INACTIVA
    cy.get(".parent-user > .title").should("be.visible");
  });
});
