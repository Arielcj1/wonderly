///<reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { EditarWonderlyCursos } from "../../PaginasAdmin/EditarWonderlyCursos";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";
import { WonderlyClases } from "../../PaginasAdmin/WonderlyClases";
import { WonderlyCursos } from "../../PaginasAdmin/WonderlyCursos";
import { AsignarProfesor } from "../../PaginasAdmin/AsignarProfesor";
import { ClaseOnDemand } from "../../PaginasAdmin/ClaseOnDemand";
import { RepetirCurso } from "../../PaginasAdmin/RepetirCurso";
import { EliminarCurso } from "../../PaginasAdmin/EliminarCurso";

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

describe("Administrador - Login", () => {

    const home = new Home()
    const ingresar = new Ingresar()
    const homeadmin = new HomeAdmin()
    const wonderlycursos = new WonderlyCursos()
    const editarcursos = new EditarWonderlyCursos()
    const asignarprofe = new AsignarProfesor();
    const wonderlyclase = new WonderlyClases();
    const claseondemand = new ClaseOnDemand();
    const repetircurso = new RepetirCurso();
    const eliminarcurso = new EliminarCurso();

    beforeEach(() => {
        cy.visit("https://developers.learnwonderly.com/");
        home.click_IniciaSesion();
        ingresar.type_Correo("neida.veizaga@believesol.com");
        ingresar.type_contrasena("abcABC123");
        ingresar.click_continuar();
      });

    it('Verificar que el administrador pueda ir al tablero Wonderly Cursos', () => {
        homeadmin.click_tableroWonderlyCursos()
        cy.contains('Todos los cursos').should('be.visible')
    })

    it('Verificar que el Admin pueda seleccionar "Cursos pasados", "Todos los cursos" y "Cursos futuros" desde el tablero Wonderly Cursos', () => {
        homeadmin.click_tableroWonderlyCursos()
        wonderlycursos.click_cursosPasados()
        wonderlycursos.click_cursosFuturos()
        wonderlycursos.click_todosLosCursos()
    })

    it('Verificar que cuando se agrega un curso con fecha de inicio futuro aparece en Cursos futuros', () => {
        
    })

    it('Verificar que al seleccionar un curso lo redireccione la detalle del curso.', () => {
        homeadmin.click_tableroWonderlyCursos()
        wonderlycursos.seleccionarCurso()       //Click en el 1er curso de la lista
        cy.get('#pills-proyecto-tab > :nth-child(1)').should('be.visible')    //Assert "Aprendizaje y proyecto final"
    })

    it('Comprobar que el administrador pueda agregar un curso nuevo completando los campos requeridos.', () => {
        homeadmin.click_tableroWonderlyCursos()
        homeadmin.click_botonAgregarCurso();
        wonderlycursos.type_tituloCurso("Viernes 07 de Ingles 12:00");    
        wonderlycursos.type_descripcionCurso("Clases personalizadas para ninos de primaria");
        wonderlycursos.click_añadirImagen();
        cy.wait(1000);
        wonderlycursos.click_seleccionarArchivos();
        wonderlycursos.click_insertaralaPagina();
        wonderlycursos.materia("Inglés");
        wonderlycursos.edades();
        wonderlycursos.type_fechaInicio();
        wonderlycursos.type_fechaFinal();
        wonderlycursos.horaInicio();
        wonderlycursos.duracionClases("30");
        wonderlycursos.recuerrenciaClases();
        // wonderlycursos.zonaHoraria("(GMT-07:00) Arizona");
        wonderlycursos.type_youtubeVideo("https://www.youtube.com/watch?v=Fn2-6zVqwX8");
        cy.wait(2000);
        wonderlycursos.click_botonAgregarCurso();
        cy.wait(3000);
        cy.get(".alert").should("be.visible");  
    })

    it('Verificar que el sistema muestra un mensaje de advertencia cuando no se completan los datos requeridos al agregar un curso.', () => {
        homeadmin.click_tableroWonderlyCursos()
        homeadmin.click_botonAgregarCurso();
        wonderlycursos.type_tituloCurso("Viernes 07 de Ingles 12:00");    
        wonderlycursos.type_descripcionCurso("Clases personalizadas para ninos de primaria");
        wonderlycursos.click_botonAgregarCurso()
        cy.get('.title').should('be.visible')
    })

    it('Verificar que el sistema señala cuales son los campos obligatorios para completar en el formulario de agregar curso.', () => {
        homeadmin.click_tableroWonderlyCursos()
        homeadmin.click_botonAgregarCurso();
        wonderlycursos.type_tituloCurso("Campos Obligatorios");    
        wonderlycursos.type_descripcionCurso("Señalar los campos que faltan completar");
        wonderlycursos.materia("Inglés");
        wonderlycursos.type_fechaInicio();
        wonderlycursos.type_fechaFinal();
        wonderlycursos.horaInicio();
        wonderlycursos.duracionClases("30");
        wonderlycursos.click_botonAgregarCurso()
        cy.get('.title').should('be.visible')
        wonderlycursos.close_modalMessage()
        //Campos que faltan completar
        cy.get('#validation_message_35_37').should('be.visible')   //Assert de proyecto final
        cy.get('#validation_message_35_38').should('be.visible')   //Assert de edades
        cy.get('#validation_message_35_36').should('be.visible')   //Assert de recurrencia de clases
        cy.get('#validation_message_35_26').should('be.visible')   //Assert url de youtube video
        cy.wait(2000)
    })

    it.skip("Verificar que el Admin puede editar un curso", () => {
        homeadmin.click_tableroWonderlyCursos();
        editarcursos.buscar_curso("Lunes 27 de Ingles 11:00", 1); //1 editar, 2 asignarProfe, 3asignarClase, 4 verClase, 5 repetirCurso, 6 eliminarCurso
        editarcursos.type_editarTituloCurso("Lunes 27 de Ingles 11:00 Editado");
        editarcursos.type_editarDescripcionCurso("Clases personalizadas para ninos de primaria");
        editarcursos.type_editarProyectoFinal("Llega Matrix 4");
        editarcursos.editarMateria("Inglés");
        editarcursos.editarEdades("7-8");
        editarcursos.editarHoraInicio();
        editarcursos.editarDuracionClases("30");
        editarcursos.type_youtubeVideo("https://www.youtube.com/watch?v=Fn2-6zVqwX8");
        editarcursos.click_guardar();
        cy.get(".alert").should("be.visible");
    });

    it("Comprobar que el Admin puede asignar un profesor a un curso", () => {
        homeadmin.click_tableroWonderlyCursos();
        editarcursos.buscar_curso("Viernes 07 de Ingles 12:00", 2); //Click en el icono Asignar Profesor
        asignarprofe.type_seleccionarProfesor("Profesor Veinte");
        asignarprofe.click_asignar();
    });
    
    it("Comprobar que el Adimin pueda asignar una clase ondemand a un curso", () => {
        homeadmin.click_tableroWonderlyCursos();
        editarcursos.buscar_curso("Viernes 07 de Ingles 12:00", 3);
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
        editarcursos.type_youtubeVideoClase("https://www.youtube.com/watch?v=RMI9fR2MQpU");
        editarcursos.click_guardarCambiosClase();
    });

    it.skip("Verificar que el Admin puede asignar un profesor a una clase", () => {
        homeadmin.click_tableroWonderlyCursos();
        editarcursos.buscar_curso("Lunes 27 de Ingles 11:00 Editado", 4); //Click en el icono de Ver Clases
        asignarprofe.click_asignarProfesorClase();
        asignarprofe.type_seleccionarProfesor("Profesor Dieciseis");
        asignarprofe.click_asignar();
    });
    
    it.skip("Verificar que el Admin puede agregar material a una clase", () => {
        homeadmin.click_tableroWonderlyCursos();
        editarcursos.buscar_curso("Viernes 07 de Ingles 12:00", 4); //Click en el icono de Ver Clases
        wonderlyclase.click_iconoAgregarMaterial();
        wonderlyclase.click_agregarMaterial();
        wonderlyclase.type_tituloMaterial("Material Extra de Estudio");
        wonderlyclase.type_descripcionMaterial("Reforzar los conocimientos");
        wonderlyclase.subirArchivoFormAgregarMaterial();
        wonderlyclase.click_confirmarAgregarMaterial();
        cy.wait(2000);
        wonderlyclase.click_Regresar();
    });

    it.skip("Verificar que un Admin puede agregar y eliminar material de una clase", () => {
        homeadmin.click_tableroWonderlyCursos();
        editarcursos.buscar_curso("LUNES 27", 4); //Click en el icono de Ver Clases
        wonderlyclase.click_iconoAgregarMaterial();
        wonderlyclase.agregar3Materiales();
        cy.wait(2000);
        wonderlyclase.click_Regresar();
        wonderlyclase.click_iconoAgregarMaterial();
        //wonderlyclase.verificar_Material()
        wonderlyclase.eliminarMaterialClase();
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
})