/// <reference types="cypress" />
// import { testCaseConfig } from "../../helpers/helpers";
import { testCaseConfig } from "../../helpers/helpers";
import { Cursos } from "../../paginas/Cursos";
import { MembresiasHijo } from "../../paginas/Hijo/MembresiasHijo";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Home } from "../../Paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { ComprarPaquete } from "../../paginas/Padre/ComprarPaquete";
import { Perfiles } from "../../paginas/Padre/Perfiles";
import { RegistrarHijo } from "../../paginas/Padre/RegistrarHijo";
import { Registro } from "../../paginas/Registro";
import { ClaseOnDemand } from "../../PaginasAdmin/ClaseOnDemand";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";
import { ModulosOnDemand } from "../../PaginasAdmin/ModulosOnDemand";
import { OnDemand } from "../../PaginasAdmin/OnDemand";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Cursos On Demand", () => {
  const home = new Home();
  const ingresar = new Ingresar();
  const cursos = new Cursos();
  const perfilhijo = new PerfilHijo();
  const registro = new Registro();
  const registrarhijo = new RegistrarHijo();
  const paquete = new ComprarPaquete();
  const membresiahijos = new MembresiasHijo();
  const perfiles = new Perfiles();
  const homeadmin = new HomeAdmin();
  const ondemand = new OnDemand();
  const modulosonDemand = new ModulosOnDemand();
  const claseondemand = new ClaseOnDemand();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
  });

  it("1_Comprobar que el admin puede Agregar un curso on demand", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    homeadmin.click_tableroWonderlyOnDemand();
    ondemand.click_agregarClaseOnDemand();
    //Completar campos de la clase on demand
    ondemand.type_tituloClase(testCaseConfig.nombre2daClaseOnDemand);
    ondemand.type_descripcionClase("Detalle de la clase ondemand para niños");
    ondemand.select_materia("Inglés");
    ondemand.select_edades(); //Checkbox de edad 7-8
    ondemand.type_youtubeVideo("https://www.youtube.com/watch?v=zIWjYSfy0PQ");
    ondemand.select_herramienta("Eduten");
    ondemand.click_confirmarAgregarOnDemand();
  });

  it("2_Verificar que el Admin puede agregar Modulos y clases a una clase On Demand", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    homeadmin.click_tableroWonderlyOnDemand();
    modulosonDemand.buscar_cursoOnDemand(
      testCaseConfig.nombre2daClaseOnDemand,
      2
    ); //Cambiar clase on demand
    modulosonDemand.agregar_Modulos_Clases(
      "Modulo ",
      "Clase ",
      "https://youtu.be/fjA1wiTFbrw"
    );
    modulosonDemand.click_guardarModulo();
    cy.wait(3000);
  });

  it("3_Verficar que un hijo ingrese al curso On demand que el admin ha creado", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani238@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    home.click_LogoWonderly();
    claseondemand.verificarCursoOnDemand(testCaseConfig.claseOnDemandBuscar);
    cy.get(".welcome").should("be.visible");
    cy.wait(2000);
  });

  it("4_Verificar que un usuario guest al ingresar a la primera clase On demand, le redireccione al login", () => {
    cursos.botonComienzaOnDemandGuest();
    cursos.botonEntraPrimeraClase();
    cy.get(".entry-content > h5").should("be.visible");
    cy.wait(2000);
  });

  it("5_Verificar que redireccione al curso On demand que ha seleccionado a un usuario que acaba de registrarse", () => {
    cursos.clickOnDemand();
    cursos.botonComienzaOnDemandGuest();
    cursos.botonEntraPrimeraClase();
    home.boton14diasGratis();
    registro.type_nombre("Padre");
    registro.type_apellidos("MM");
    registro.type_correo(testCaseConfig.crearPadreCursoOnDemand);
    registro.type_contrasenia("12345");
    registro.type_numero("65268974");
    registro.click_siguiente();
    registrarhijo.click_botonRegistraTuHijo();
    registrarhijo.type_nombreHijoPV("Hijo");
    registrarhijo.type_apellidoHijoPV("PRIMERO");
    registrarhijo.type_fechaNacimientoPV("20/10/2009");
    registrarhijo.click_botonExploraCursos();
    perfilhijo.seleccionarHijoPosicion(1);
  });

  it("6_Demostrar que redireccione al curso On demand que ha seleccionado despues que el usuario se loguee", () => {
    cursos.clickOnDemand();
    cursos.botonComienzaOnDemandGuest();
    cursos.botonEntraPrimeraClase();
    ingresar.type_Correo("yani238@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(7);
  });

  it("7_Verificar que un hijo pueda ingresar a la primera clase On demand desde el HOME", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani238@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(7);
    home.click_LogoWonderly();
    cursos.botonComienzaOndemandUsuario();
    cursos.botonEntraPrimeraClase();
    cy.get(".welcome").should("be.visible");
  });
  it("8_Verificar que un hijo pueda ingresar a una clase On demand desde PAGINA CURSOS", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani238@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(7);
    cursos.botonComienzaCursosOnDemand();
    cy.get(".welcome").should("be.visible");
  });

  it("9_Verificar que un hijo ingrese a la clase On demand desde la seccion CONTENIDO", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani238@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(7);
    cursos.botonComienzaCursosOnDemand();
    cursos.linkClaseContenido();
  });

  it("10_Verificar que a un hijo con membresia inactiva le redireccione a la seccion de membresias", () => {
    cursos.clickOnDemand();
    cursos.botonComienzaOnDemandGuest();
    cursos.botonEntraPrimeraClase();
    ingresar.type_Correo("yani238@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(1); /////HIJO CON MEMBRESIA INACTIVA
    cursos.botonEntraPrimeraClase();
    cy.get(".child-membership").should("be.visible");
  });

  it("11_Verificar que el hijo con membresia inactiva pueda comprar una membresia para ver las clases OnDemand", () => {
    cursos.clickOnDemand();
    cursos.botonComienzaOnDemandGuest();
    cursos.botonEntraPrimeraClase();
    cy.wait(3000);
    ingresar.type_Correo("yani238@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(1);
    cursos.botonEntraPrimeraClase();
    cy.wait(2000);
    home.botonComprarMembresia();
    paquete.type_seleccionarHijo("Pepito Tester");
    paquete.click_suscribirse();
    membresiahijos.botonMembresiasCompradas();
    home.click_LogoWonderly();
    cursos.botonComienzaOndemandUsuario();
    cursos.botonEntraPrimeraClase();
  });

  it("12_Desmotrar que un padre registre a otro hijo cuando se encuentra en un curso On Demand", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani238@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    home.click_LogoWonderly();
    cursos.botonComienzaOndemandUsuario();
    cursos.botonEntraPrimeraClase();
    cy.wait(2000);
    perfiles.click_registrarHijo();
    registrarhijo.type_nombreHijo(testCaseConfig.crearNombreHijo); ///Registrar otro hijo
    registrarhijo.type_apellidoHijo(testCaseConfig.crearApellidoHijo);
    registrarhijo.type_fechaNacimiento(testCaseConfig.crearFechaNacimiento);
    registrarhijo.click_registrar();
    home.click_LogoWonderly();
    cursos.botonComienzaOndemandUsuario();
    cursos.botonEntraPrimeraClase();
    perfilhijo.seleccionar2daPosicionHijo(1);
    cy.xpath("/html/body/div[2]/header/div/nav/div[2]/ul/li[5]/a").should(
      "be.visible"
    );
    cursos.botonEntraPrimeraClase();
  });

  it("13_Comprobar que al cambiar de hijo estando en el curso On demand, pueda tomar las clases", () => {
    home.click_IniciaSesion();
    ingresar.type_Correo("yani238@mailinator.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    perfilhijo.seleccionarHijoPosicion(7);
    home.click_LogoWonderly();
    cursos.botonComienzaOndemandUsuario();
    perfiles.cambiarHijo();
    perfilhijo.seleccionar2daPosicionHijo(9);
    cy.get(".welcome").should("be.visible");
    cursos.botonEntraPrimeraClase();
  });
});
