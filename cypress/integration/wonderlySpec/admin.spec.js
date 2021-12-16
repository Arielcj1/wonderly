///<reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";
import { RegistroProfesor } from "../../PaginasAdmin/RegistroProfesor";
import { WonderlyCursos } from "../../PaginasAdmin/WonderlyCursos";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- Home Page administrador", () => {
  const ingresar = new Ingresar();
  const home = new Home();
  const homeadmin = new HomeAdmin();
  const registroprofesor = new RegistroProfesor();
  const wonderlycursos = new WonderlyCursos();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    cy.wait(2000);
  });

  it.skip("Verificar que el administrador pueda ingresar al tablero Profesores Registrados", () => {
    homeadmin.click_tableroProfesoresRegistrados();
    cy.get(".text-dark").should("be.visible");
    cy.wait(1000);
  });

  it.skip("Verificar que el administrador pueda ingresar al tablero Wonderly Cursos", () => {
    homeadmin.click_tableroWonderlyCursos();
    cy.get("thead > tr > :nth-child(2)").should("be.visible");
    cy.wait(1000);
  });

  it.skip("Verificar que el administrador pueda ingresar al tablero Wonderly Clases", () => {
    homeadmin.click_tableroWonderlyClases();
    cy.get("thead > tr > :nth-child(3)").should("be.visible");
    cy.wait(1000);
  });

  it.skip("Verificar que el admin pueda crear un profesor", () => {
    homeadmin.click_tableroProfesoresRegistrados();
    homeadmin.click_botonRegistrarProfesor();
    registroprofesor.type_nombre("George");
    registroprofesor.type_apellido("Martin");
    registroprofesor.type_correoElectronico("profegeorge@gmail.com");
    registroprofesor.type_contrasenia("123");
    registroprofesor.type_confirmarContrasenia("123");
    registroprofesor.click_botonListo();
    cy.get(".alert").should("be.visible");
  });

  it.skip("Comprobar que el administrador pueda crear un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    homeadmin.click_botonAgregarCurso();
    wonderlycursos.type_tituloCurso("Manitas Limpias-30min");
    wonderlycursos.type_descripcionCurso(
      "Clases personalizadas para ninos de primaria"
    );
    wonderlycursos.click_añadirImagen();
    cy.wait(1000);
    wonderlycursos.click_seleccionarArchivos();
    wonderlycursos.click_insertaralaPagina();
    wonderlycursos.materia("Programación");
    wonderlycursos.edades("7-8");
    wonderlycursos.type_fechaInicio("16/12/2021");
    wonderlycursos.type_fechaFinal("23/12/2021");
    wonderlycursos.horaInicio("08:00");
    wonderlycursos.duracionClases("60");
    wonderlycursos.recuerrenciaClases();
    // wonderlycursos.zonaHoraria("(GMT-07:00) Arizona");
    wonderlycursos.type_youtubeVideo(
      "https://www.youtube.com/watch?v=Fn2-6zVqwX8"
    );
    wonderlycursos.click_botonAgregarCurso();
    cy.get(".alert").should("be.visible");
  });

  it.skip("Verificar que el admin pueda asignar profesor a un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    // homeadmin.click_paginacionSiguiente();
    wonderlycursos.click_cursosFuturos();
    wonderlycursos.VerificarCurso();
    wonderlycursos.select_seleccionarProfesor("Claudia ArancibiaA");
    wonderlycursos.click_botonAsignarProfesor();
    wonderlycursos.click_cursosFuturos();
    cy.get("tbody > :nth-child(1) > :nth-child(6)").should("be.visible");
  });
});
