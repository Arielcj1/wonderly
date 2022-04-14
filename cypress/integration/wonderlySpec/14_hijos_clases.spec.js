// Casos de prueba realizado por:
// Autor: Yanina Cardozo
/// <reference types="cypress" />

import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Clase } from "../../paginas/Hijo/Clase";
import { ClasesHijo } from "../../paginas/Hijo/ClasesHijo";
import { Autopayment } from "../../paginas/Hijo/Autopayment";
import { MisHijos } from "../../paginas/Hijo/MisHijos";
import { ComprarPaquete } from "../../paginas/Padre/ComprarPaquete";
import { Cursos } from "../../paginas/Cursos";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- clases hijos", () => {
  const perfilhijo = new PerfilHijo();
  const ingresar = new Ingresar();
  const home = new Home();
  const clase = new Clase();
  const claseshijo = new ClasesHijo();
  const mishijos = new MisHijos();
  const autopayment = new Autopayment();
  const paquete = new ComprarPaquete();
  const cursos = new Cursos();

  beforeEach(function () {
    cy.visit("https://developers.learnwonderly.com/");
    cy.fixture("variables/variablesUsuario").then((variables) => {
      this.variables = variables;
      home.click_IniciaSesion();
      cy.get("#input_1").type(this.variables.correoPadre1);
      ingresar.type_contrasena("12345");
      ingresar.click_continuar();
    });
  });

  it("1_Comprobar que el hijo navegue por la vista de un curso del home", () => {
    home.click_LogoWonderly();
    cursos.clickEnVivo();
    cursos.botonComienzaEnVivoUsuario();
    claseshijo.aprendizajeProyecto();
    claseshijo.botonPreguntaWhatsapp();
    claseshijo.clickLinks();
    cy.get("h4").should("be.visible");
  });
  it("2_Comprobar que un hijo pueda inscribirse a un curso desde el home", () => {
    perfilhijo.seleccionarHijoPosicion(2);
    home.click_LogoWonderly();
    cursos.clickEnVivo();
    cursos.botonComienzaEnVivoUsuario();
    cursos.segundoBotonInscribete();
    cy.get("h4").should("be.visible");
  });
  it("3_Verificar que un hijo pueda inscribirse a un curso completo desde el link de una clase", () => {
    perfilhijo.seleccionarHijoPosicion(3);
    home.click_LogoWonderly();
    cursos.clickEnVivo();
    cursos.botonComienzaEnVivoUsuario();
    claseshijo.aprendizajeProyecto();
    claseshijo.clickLinks();
    claseshijo.verificarBotonInscribeteCurso("Inscríbete gratis al curso");
  });

  it("4_Comprobar que el hijo pueda ver el counter de la clase", function () {
    perfilhijo.seleccionarHijoPosicion(2);
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    cy.wait(3000);
    clase.click_nombreDeLaClase();
    claseshijo.verificarCounter();
  });

  it("5_Verificar que un hijo pueda ingresar al detalle de un curso desde la pestaña Cursos", () => {
    perfilhijo.seleccionarHijoPosicion(1);
    cursos.clickEnVivo();
    cursos.botonComienzaCursos();
    claseshijo.aprendizajeProyecto();
    claseshijo.botonPreguntaWhatsapp();
    claseshijo.clickLinks();
    cy.get("h4").should("be.visible");
  });

  it("6_Comprobar que el hijo pueda ver el detalle de una clase desde Clases Hijo", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    cy.wait(3000);
    clase.click_nombreDeLaClase();
    cy.get("h4").should("be.visible");
  });

  it("7_Verificar que un hijo pueda ingresar a la clase si esta por empezar", () => {
    perfilhijo.seleccionarHijoPosicion(2);
    perfilhijo.click_cuenta();
    claseshijo.click_menu_clasesHijo();
    clase.click_nombreDeLaClase();
    claseshijo.clickBotonUnirmeClase("Unirse a clase");
  });

  it("8_Verificar que pueda Activar el Autopayment desde el tablero Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    autopayment.verificarAutopaymentActivar();
    cy.get(
      "#modalSubscription > .modal-dialog > .modal-content > .modal-header > .modal-title"
    ).should("be.visible");
  });

  it("9_Verificar que pueda Cancelar el Autopayment desde el tablero Mis Hijos", () => {
    perfilhijo.click_seleccionarHijo();
    perfilhijo.click_cuenta();
    mishijos.click_tableroMisHijos();
    autopayment.verificarAutopaymentCancelar();
  });

  it("10_Verificar que un hijo pueda ver la etiqueta verde 'nueva clase' cuando se inscribe a un curso", () => {
    perfilhijo.seleccionarHijoPosicion(6);
    home.click_LogoWonderly();
    home.click_Membresia_Explorador();
    paquete.type_seleccionarHijo("Hijo Uno");
    cy.wait(2000);
    paquete.click_suscribirse();
    home.clickPestañaCursos();
    home.clickEnVivo();
    claseshijo.verificarInscrito();
  });

  it("11_Verificar que el link redireccione al hijo a la clase correspondiente", () => {
    perfilhijo.seleccionarHijoPosicion(4);
    home.clickPestañaCursos();
    cursos.botonComienzaCursos();
    claseshijo.aprendizajeProyecto();
    claseshijo.clickLinks();
    cy.get("h4").should("be.visible");
  });

  it("12_Comprobar que redireccione al curso automaticamente cuando ingresa un usuario sin registrarse", () => {
    home.clickSalirHijo();
    home.clickPestañaCursos();
    home.clickEnVivo();
    cursos.botonComienzaCursosGuest();
    cursos.segundoBotonInscribeteGuest();
    ingresar.type_Correo("padreuno@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(5);
  });
  it("13_Demostrar que redireccione a una clase On demand cuando ingresa un usuario sin registrarse", () => {
    home.clickSalirHijo();
    home.click_LogoWonderly();
    cursos.tabOnDemand();
    cursos.botonComienzaOnDemandGuest();
    cursos.botonEntraPrimeraClase();
    ingresar.type_Correo("padreuno@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(5);
    cy.get(".welcome").should("be.visible");
  });
});
