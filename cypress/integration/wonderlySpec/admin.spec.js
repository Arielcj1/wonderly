///<reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { AsignarProfesor } from "../../PaginasAdmin/AsignarProfesor";
import { EditarWonderlyCursos } from "../../PaginasAdmin/EditarWonderlyCursos";
import { EliminarCurso } from "../../PaginasAdmin/EliminarCurso";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";
import { RegistroProfesor } from "../../PaginasAdmin/RegistroProfesor";
import { RepetirCurso } from "../../PaginasAdmin/RepetirCurso";
import { WonderlyClases } from "../../PaginasAdmin/WonderlyClases";
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
  const editarcursos = new EditarWonderlyCursos();
  const asignarprofe = new AsignarProfesor();
  const repetircurso = new RepetirCurso();
  const eliminarcurso = new EliminarCurso()
  const wonderlyclase = new WonderlyClases()

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
    wonderlycursos.type_descripcionCurso("Clases personalizadas para ninos de primaria");
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
    wonderlycursos.type_youtubeVideo("https://www.youtube.com/watch?v=Fn2-6zVqwX8");
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

  it.skip("Verificar que el Admin puede editar un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso("Materia Divertida 01", 1); //1 editar, 2 asignarProfe, 3asignarClase, 4 verClase, 5 repetirCurso, 6 eliminarCurso
    editarcursos.type_editarTituloCurso("Materia Super divertida 01");
    editarcursos.type_editarDescripcionCurso("Clases personalizadas para ninos de primaria");
    editarcursos.type_editarProyectoFinal("Llega Matrix 4");
    editarcursos.editarMateria("Programación");
    editarcursos.editarEdades("7-8");
    editarcursos.editarHoraInicio("16:00");
    editarcursos.editarDuracionClases("90");
    editarcursos.type_youtubeVideo("https://www.youtube.com/watch?v=Fn2-6zVqwX8");
    editarcursos.click_guardar();
    cy.get(".alert").should("be.visible");
  });

  it.skip("Comprobar que el Admin puede asignar un profesor a un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso('Materia Super divertida 01', 2)   //Click en el icono Asignar Profesor
    asignarprofe.type_seleccionarProfesor("Martín Carlos Nuñez");
    asignarprofe.click_asignar();
  });

  it.skip("Comprobar que el Admin puede Ver Clases del curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso('Materia Super divertida 01', 4) //Click en el icono de Ver Clases

  });

  it.skip("Comprobar que el Admin puede editar la clase desde Ver Clases de un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso('Materia Super divertida 01', 4)  //Click en el icono de Ver Clases
    editarcursos.click_editarClase();
    editarcursos.type_editarTituloClase("Materia divertida Lunes 20/12");
    editarcursos.type_editarDescripcionClase("Cuando llega MATRIX 4");
    editarcursos.type_youtubeVideoClase("https://www.youtube.com/watch?v=RMI9fR2MQpU");
    editarcursos.click_guardarCambiosClase();
  });

  it.skip("Verificar que el Admin puede asignar un profesor a una clase", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso('Materia Super divertida 01', 4)   //Click en el icono de Ver Clases
    asignarprofe.click_asignarProfesorClase();
    asignarprofe.type_seleccionarProfesor("Chris Martin");
    asignarprofe.click_asignar();
  });

  it('Verificar que el Admin puede agregar material a una clase', () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso('Materia Super divertida 01', 4)   //Click en el icono de Ver Clases
    wonderlyclase.click_iconoAgregarMaterial()
    wonderlyclase.click_agregarMaterial()
    wonderlyclase.type_tituloMaterial('Material Extra de Estudio')
    wonderlyclase.subirArchivoFormAgregarMaterial()
    wonderlyclase.click_confirmarAgregarMaterial()
    wonderlyclase.click_botonRegresar()
  })

  it.skip("Verificar que el Admin puede repetir un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso('Materia Super divertida 01', 5)
    repetircurso.horaInicio("13:00");
    repetircurso.duracionClase("60");
    repetircurso.recurreciaClases(); //Jueves
    repetircurso.click_repetirCurso();
  });

  it("Comprobar que el Admin puede Eliminar un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso('Materia Super divertida 01 - Repetido', 6)
    //eliminarcurso.click_aceptarEliminarCurso()
    
  });
});
