///<reference types="cypress" />
// Casos de prueba realizado por Patrik Delgadillo

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { AsignarProfesor } from "../../PaginasAdmin/AsignarProfesor";
import { ClaseOnDemand } from "../../PaginasAdmin/ClaseOnDemand";
import { EditarWonderlyCursos } from "../../PaginasAdmin/EditarWonderlyCursos";
import { EliminarCurso } from "../../PaginasAdmin/EliminarCurso";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";
import { ModulosOnDemand } from "../../PaginasAdmin/ModulosOnDemand";
import { OnDemand } from "../../PaginasAdmin/OnDemand";
import { RepetirCurso } from "../../PaginasAdmin/RepetirCurso";
import { WonderlyClases } from "../../PaginasAdmin/WonderlyClases";
import { WonderlyCursos } from "../../PaginasAdmin/WonderlyCursos";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly - administrador", () => {
  const ingresar = new Ingresar();
  const home = new Home();
  const homeadmin = new HomeAdmin();
  const wonderlycursos = new WonderlyCursos();
  const editarcursos = new EditarWonderlyCursos();
  const asignarprofe = new AsignarProfesor();
  const repetircurso = new RepetirCurso();
  const eliminarcurso = new EliminarCurso();
  const wonderlyclase = new WonderlyClases();
  const ondemand = new OnDemand();
  const modulosonDemand = new ModulosOnDemand();
  const claseondemand = new ClaseOnDemand();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
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

  it("Comprobar que el admin puede crear una clase on demand", () => {
    ondemand.click_wonderlyClasesTablero();
    ondemand.click_clasesOnDemand();
    ondemand.click_agregarClaseOnDemand();

    ondemand.type_tituloClase("Clase OnDemand Gratis 7");
    ondemand.type_descripcionClase("Detalle de la clase ondemand para niños");
    ondemand.select_materia("Inglés");
    ondemand.select_edades("7-8");
    ondemand.type_youtubeVideo("https://www.youtube.com/watch?v=zIWjYSfy0PQ");
    ondemand.select_herramienta("Eduten");

    ondemand.click_confirmarAgregarOnDemand();
  });

  it.skip("Verificar que el Admin puede editar una clase on demand", () => {
    ondemand.click_wonderlyClasesTablero();
    ondemand.click_clasesOnDemand();
    modulosonDemand.buscar_cursoOnDemand("INGLES PARA Niños", 1);

    ondemand.type_editarTituloClase("INGLES PARA Niños");
    ondemand.type_editardescripcionClase(
      "Hay que pagar para ver este contenido, nada es gratis"
    );
    ondemand.select_editarmateria("Inglés");
    ondemand.select_editaredades("7-8");
    ondemand.type_editaryoutubeVideo(
      "https://www.youtube.com/watch?v=zIWjYSfy0PQ"
    );
    ondemand.select_editarherramienta("Scratch");

    ondemand.click_guardar();
  });

  it("Verificar que el Admin puede agregar Modulos y clases a una clase On Demand", () => {
    ondemand.click_wonderlyClasesTablero();
    ondemand.click_clasesOnDemand();
    modulosonDemand.buscar_cursoOnDemand("INGLES PARA Niños", 2);
    modulosonDemand.agregar_Modulos_Clases(
      "Modulo ",
      "Clase ",
      "https://www.youtube.com/watch?v=JWstLFgzxZM"
    );
    modulosonDemand.click_guardarModulo();
    cy.wait(3000);
  });

  it("Comprobar que el administrador pueda crear un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    homeadmin.click_botonAgregarCurso();
    wonderlycursos.type_tituloCurso("Martes 04 de Ingles 11:00");
    wonderlycursos.type_descripcionCurso(
      "Clases personalizadas para ninos de primaria"
    );
    wonderlycursos.click_añadirImagen();
    cy.wait(1000);
    wonderlycursos.click_seleccionarArchivos();
    wonderlycursos.click_insertaralaPagina();
    wonderlycursos.materia("Inglés");
    wonderlycursos.edades("7-8");
    wonderlycursos.type_fechaInicio();
    wonderlycursos.type_fechaFinal();
    wonderlycursos.horaInicio();
    wonderlycursos.duracionClases("30");
    wonderlycursos.recuerrenciaClases();
    // wonderlycursos.zonaHoraria("(GMT-07:00) Arizona");
    wonderlycursos.type_youtubeVideo(
      "https://www.youtube.com/watch?v=Fn2-6zVqwX8"
    );
    cy.wait(2000);
    wonderlycursos.click_botonAgregarCurso();
    cy.wait(3000);
    cy.get(".alert").should("be.visible");
  });

  it.skip("Verificar que el Admin puede editar un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso("Lunes 27 de Ingles 11:00", 1); //1 editar, 2 asignarProfe, 3asignarClase, 4 verClase, 5 repetirCurso, 6 eliminarCurso
    editarcursos.type_editarTituloCurso("Lunes 27 de Ingles 11:00 Editado");
    editarcursos.type_editarDescripcionCurso(
      "Clases personalizadas para ninos de primaria"
    );
    editarcursos.type_editarProyectoFinal("Llega Matrix 4");
    editarcursos.editarMateria("Inglés");
    editarcursos.editarEdades("7-8");
    editarcursos.editarHoraInicio();
    editarcursos.editarDuracionClases("30");
    editarcursos.type_youtubeVideo(
      "https://www.youtube.com/watch?v=Fn2-6zVqwX8"
    );
    editarcursos.click_guardar();
    cy.get(".alert").should("be.visible");
  });

  it("Comprobar que el Admin puede asignar un profesor a un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso("Martes 04 de Ingles 11:00", 2); //Click en el icono Asignar Profesor
    asignarprofe.type_seleccionarProfesor("Profesor Dieciocho");
    asignarprofe.click_asignar();
  });

  it("Comprobar que el Adimin pueda asignar una clase ondemand a un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso("Martes 04 de Ingles 11:00", 3);
    claseondemand.select_claseOnDemand("INGLES PARA Niños"); // Agregar clase on demand
    claseondemand.botonAsignarClaseOnDemand();
  });

  it.skip("Comprobar que el Admin puede Ver Clases del curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso("Lunes 27 de Ingles 11:00 Editado", 4); //Click en el icono de Ver Clases
  });

  it.skip("Comprobar que el Admin puede editar la clase desde Ver Clases de un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso("Lunes 27 de Ingles 11:00 Editado", 4); //Click en el icono de Ver Clases
    editarcursos.click_editarClase();
    editarcursos.type_editarTituloClase("Lunes de ingles");
    editarcursos.type_editarDescripcionClase("Cuando llega MATRIX 4");
    editarcursos.type_youtubeVideoClase(
      "https://www.youtube.com/watch?v=RMI9fR2MQpU"
    );
    editarcursos.click_guardarCambiosClase();
  });

  it.skip("Verificar que el Admin puede asignar un profesor a una clase", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso("Lunes 27 de Ingles 11:00 Editado", 4); //Click en el icono de Ver Clases
    asignarprofe.click_asignarProfesorClase();
    asignarprofe.type_seleccionarProfesor("Profesor Dieciseis");
    asignarprofe.click_asignar();
  });

  it("Verificar que el Admin puede agregar material a una clase", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso("Martes 04 de Ingles 11:00", 4); //Click en el icono de Ver Clases
    wonderlyclase.click_iconoAgregarMaterial();
    wonderlyclase.click_agregarMaterial();
    wonderlyclase.type_tituloMaterial("Material Extra de Estudio");
    wonderlyclase.type_descripcionMaterial("Reforzar los conocimientos");
    wonderlyclase.subirArchivoFormAgregarMaterial();
    wonderlyclase.click_confirmarAgregarMaterial();
    wonderlyclase.click_Regresar();
  });

  it.skip("Verificar que el Admin puede repetir un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso("Lunes 27 de Ingles 11:00 Editado", 5);
    repetircurso.horaInicio("13:00");
    repetircurso.duracionClase("60");
    repetircurso.recurreciaClases(); //Jueves
    repetircurso.click_repetirCurso();
    cy.get(".alert").should("be.visible");
  });

  it.skip("Comprobar que el Admin puede Eliminar un curso", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso("Lunes 27 de Ingles 11:00 Editado - Repetido", 6);
    cy.wait(4000);
    eliminarcurso.click_aceptarEliminarCurso();
    cy.wait(4000);
  });
});
