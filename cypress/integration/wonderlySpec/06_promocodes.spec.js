/// <reference types="cypress" />
import { testCaseConfig } from "../../helpers/helpers";
import { MembresiasHijo } from "../../paginas/Hijo/MembresiasHijo";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../Paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { AgregarNuevoHijo } from "../../paginas/Padre/AgregarNuevoHijo";
import { ComprarPaquete } from "../../paginas/Padre/ComprarPaquete";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";
import { PromoCode } from "../../paginas/PromoCode";
import { Registro } from "../../paginas/Registro";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Administrador - Promocodes", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const promocode = new PromoCode();
  const paquete = new ComprarPaquete();
  const registrarhijo = new RegistrarHijo();
  const registro = new Registro();
  const agregarnuevohijo = new AgregarNuevoHijo();
  const perfilhijo = new PerfilHijo();
  const membresiahijos = new MembresiasHijo();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
  });
  // Precondicion: Para un usuario que este registrado en el sitio web y ademas haya registrado su tarjeta
  it("1_Verificar que el admin pueda crear un promocode", () => {
    promocode.tabPromoCodes();
    promocode.botonAgregarPromoCode();
    promocode.typeNombre(testCaseConfig.nombrePromoCode);
    promocode.typeCodigo(testCaseConfig.codigoPromoCode);
    promocode.typePorcentaje(testCaseConfig.porcentajePromoCode);
    promocode.typeFecha(testCaseConfig.fechaPromoCode);
    promocode.typeAlcance(testCaseConfig.alcancePromoCode);
    promocode.typeCantidad(testCaseConfig.cantidadPromoCode);
    promocode.botonGuardar();
  });

  it("2_Comprobar que se muestre un mensaje 'Seleccione un hijo' cuando aplica un Promocode", () => {
    home.clickSalir();
    home.click_IniciaSesion();
    ingresar.type_Correo("yani963@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    home.membresiasMenuAbajo();
    home.botonComprarMembresia();
    promocode.ingresarPromoCode(testCaseConfig.codigoPromoCode);
    promocode.botonAplicar();
    cy.get("#field_25_48 > .gfield_description")
      .should("contain.text", "Seleccione un hijo")
      .should("be.visible");
  });

  it("3_Verificar que un usuario pueda registrar a su hijo  y pueda hacer uso del promoCode", () => {
    home.clickSalir();
    home.click_IniciaSesion();
    ingresar.type_Correo("yani963@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    home.membresiasMenuAbajo();
    home.botonComprarMembresia();
    paquete.click_Aqui_nuevoHijo();
    registrarhijo.type_nombreHijo("Hijo");
    registrarhijo.type_apellidoHijo("Promocode"); //Crear Hijo
    registrarhijo.type_fechaNacimiento("01/01/2011");
    registrarhijo.click_registrar();
    paquete.type_seleccionarHijo("Hijo Promocode");
    promocode.ingresarPromoCode(testCaseConfig.codigoPromoCode);
    promocode.botonAplicar();
    paquete.click_suscribirse();
  });

  it("4_Comprobar que un usuario no pueda volver a hacer uso del promocode debido a la cantidad de uso", () => {
    home.clickSalir();
    home.click_IniciaSesion();
    ingresar.type_Correo("yani963@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    home.membresiasMenuAbajo();
    home.botonComprarMembresia();
    paquete.type_seleccionarHijo("Hijo Promocode");
    promocode.ingresarPromoCode(testCaseConfig.codigoPromoCode);
    promocode.botonAplicar();
    cy.get("#field_25_48 > .gfield_description").should("be.visible"); //Mensaje Cantidad de usos excedido
  });

  it("5_Verificar que otro usuario pueda hacer uso del promocode", () => {
    home.clickSalir();
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    // perfilhijo.seleccionarHijoPosicion(3)
    home.membresiasMenuAbajo();
    home.botonComprarMembresia();
    paquete.type_seleccionarHijo("Hijo Prueba");
    promocode.ingresarPromoCode(testCaseConfig.codigoPromoCode);
    promocode.botonAplicar();
    paquete.click_suscribirse();
  });

  it("6_Verificar que un usuario no pueda usar el promoCode debido al Alcance de uso", () => {
    home.clickSalir();
    home.click_IniciaSesion();
    ingresar.type_Correo("yani963@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    home.membresiasMenuAbajo();
    home.botonComprarMembresia();
    paquete.type_seleccionarHijo("Hijo Promocode");
    promocode.ingresarPromoCode(testCaseConfig.codigoPromoCode);
    promocode.botonAplicar();
    cy.get("#field_25_48 > .gfield_description").should("be.visible"); // Alcance de uso excedido
  });
  it("7_Verificar que un usuario pueda comprar una membresia sin ingresar un promocode", () => {
    home.clickSalir();
    home.click_IniciaSesion();
    ingresar.type_Correo("yani963@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    home.membresiasMenuAbajo();
    home.botonComprarMembresia();
    paquete.type_seleccionarHijo("Hijo Promocode");
    paquete.click_suscribirse();
    cy.get(".pt-5").should("be.visible");
  });

  // // PROMOCODES 100% DE DESCUENTO
  it("8_Verificar que un admin pueda crear un promocode con un descuento del 100%", () => {
    promocode.tabPromoCodes();
    promocode.botonAgregarPromoCode();
    promocode.typeNombre(testCaseConfig.nombrePromoCodeFree);
    promocode.typeCodigo(testCaseConfig.codigoPromoCodeFree);
    promocode.typePorcentaje(testCaseConfig.porcentajePromoCodeFree);
    promocode.typeFecha(testCaseConfig.fechaPromoCodeFree);
    promocode.typeAlcance(testCaseConfig.alcancePromoCodeFree);
    promocode.typeCantidad(testCaseConfig.cantidadPromoCodeFree);
    promocode.botonGuardar();
    cy.get(
      ".site-inner > :nth-child(1) > .content-sidebar-wrap > #genesis-content > .post-14815 > .entry-header > .alert"
    ).should("be.visible");
  });
  it("9_verificar que un un usuario se registre en el sitio y pueda hacer uso del promocode 100%", () => {
    home.clickSalir();
    home.boton14diasGratis();
    registro.type_nombre("Hugo");
    registro.type_apellidos("HH");
    registro.type_correo(testCaseConfig.correoPadre6);
    registro.type_contrasenia("12345");
    registro.type_numero("6514684");
    registro.click_siguiente();
    registrarhijo.botonRegistraATuHijo();
    agregarnuevohijo.type_Birthday("01/01/2016"); //dd/mm/yyyy
    agregarnuevohijo.type_NombreHijo("prueba");
    agregarnuevohijo.type_ApellidoHijo("uno");
    agregarnuevohijo.click_AgregarHijo();
    cy.get(".alert").should("be.visible");
    agregarnuevohijo.botonExploraCursos();
    cy.contains("¿Quién está aprendiendo?").should("be.visible");
    perfilhijo.seleccionarHijoPosicion(1);
    home.click_LogoWonderly();
    home.membresiasMenuAbajo();
    home.botonComprarMembresia();
    paquete.type_seleccionarHijo("prueba uno");
    promocode.ingresarPromoCode(testCaseConfig.codigoPromoCodeFree);
    promocode.botonAplicar();
    paquete.click_suscribirse();
    cy.wait(2000);
    // membresiahijos.botonMembresiasCompradas();
  });
  it.skip("Verificar que el descuento sea igual al detalle de la compra de membresia", () => {});
});
