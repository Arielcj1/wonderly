///<reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { ClaseOnDemand } from "../../PaginasAdmin/ClaseOnDemand";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";
import { WonderlyCursos } from "../../PaginasAdmin/WonderlyCursos";
import { EditarWonderlyCursos } from "../../PaginasAdmin/EditarWonderlyCursos";
import { AsignarProfesor } from "../../PaginasAdmin/AsignarProfesor";
import { PerfilHijo } from "../../paginas/Hijo/PerfilHijo";
import { Autopayment } from "../../paginas/Hijo/Autopayment";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- clases OnDemand", () => {
  const homeadmin = new HomeAdmin();
  const home = new Home();
  const ingresar = new Ingresar();
  const claseondemand = new ClaseOnDemand();
  const wonderlycursos = new WonderlyCursos();
  const editarcursos = new EditarWonderlyCursos();
  const asignarprofe = new AsignarProfesor();
  const perfilHijo = new PerfilHijo();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
  });

  it.skip("Verificar que el administrador pueda crear una clase on demand", () => {
    homeadmin.click_tableroWonderlyClases();
    claseondemand.click_onDemand();
    claseondemand.click_agregarClaseOnDemand();
    claseondemand.type_tituloClase("Curso divertido");
    claseondemand.type_descripcionClase("En esta clase aprenderas a ...");
    claseondemand.select_materia("Matemáticas");
    claseondemand.select_edad("8-9");
    claseondemand.type_videoYoutube(
      "https://www.youtube.com/watch?v=sNsbo5EmTrM"
    );
    claseondemand.select_herramientaDeTrabajo("Scratch");
    claseondemand.botonAgregarClaseOnDemand();
    cy.get(".alert").should("be.visible");
  });

  it.skip("Comprobar que el administrador pueda crear un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    homeadmin.click_botonAgregarCurso();
    wonderlycursos.type_tituloCurso("Mañana del Miercoles 12");
    wonderlycursos.type_descripcionCurso(
      "Clases especiales para niños de primaria"
    );
    wonderlycursos.click_añadirImagen();
    cy.wait(1000);
    wonderlycursos.click_seleccionarArchivos();
    wonderlycursos.click_insertaralaPagina();
    wonderlycursos.materia("Matemáticas");
    wonderlycursos.edades("8-9");
    wonderlycursos.type_fechaInicio();
    wonderlycursos.type_fechaFinal();
    wonderlycursos.horaInicio();
    wonderlycursos.duracionClases("30");
    wonderlycursos.recuerrenciaClases();
    // wonderlycursos.zonaHoraria("(GMT-07:00) Arizona");
    wonderlycursos.type_youtubeVideo(
      "https://www.youtube.com/watch?v=Fn2-6zVqwX8"
    );
    wonderlycursos.click_botonAgregarCurso();
    cy.get(".alert").should("be.visible");
  });

  it.skip("Comprobar que el Admin puede asignar un profesor a un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso("Mañana del Miercoles 12", 2);
    asignarprofe.type_seleccionarProfesor("Profesor Doce");
    asignarprofe.click_asignar();
  });

  it.skip("Verificar que el administrador pueda asignar una clase Ondemand al curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso("Mañana del Miercoles", 3);
    claseondemand.select_claseOnDemand("Curso divertido");
    claseondemand.botonAsignarClaseOnDemand();
  });
  it("Comprobar que el hijo pueda ingresar a la clase Ondemand creada", () => {
    home.click_MenuUsuario();
    home.click_salir();
    home.click_IniciaSesion();
    ingresar.type_Correo("yani.cardozosalas@gmail.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    perfilHijo.click_seleccionarHijo();
    home.click_seccionOnDemand();
    claseondemand.verificarCursoOnDemand("Mañana del Miercoles");
  });
});
