/// <reference types="cypress" />

export class RegistrarHijo {
  type_nombreHijo(nombre) {
    cy.get("#input_24_14_3").type(nombre);
  }

  type_apellidoHijo(apellido) {
    cy.get("#input_24_14_6").type(apellido);
  }

  type_fechaNacimiento(fechaNac) {
    cy.get("#input_24_13").type(fechaNac); //  DD/MM/AAAA
  }

  click_registrar() {
    cy.get("#gform_submit_button_24").click();
    cy.wait(3000);
  }

  type_nombreHijoPV(nombre) {
    cy.get("#name_1").type(nombre);
  }

  type_apellidoHijoPV(apellido) {
    cy.get("#surname_1").type(apellido);
  }

  type_fechaNacimientoPV(fechaNac) {
    cy.get("#birthday_1").type(fechaNac);
    cy.get("#name_1").click();
  }
  click_botonRegistraTuHijo() {
    cy.get(".welcome_parent > .btn").click();
  }
  click_botonExploraCursos() {
    cy.get(".form_footer > .btn").click();
  }

  //despues que se hace click en la pestaña Cursos
  click_inscribeteCurso() {
    cy.get(
      ":nth-child(6) > .px-0 > .course-block > .course-body > .d-flex > .mr-1 > .btn"
    ).click();
  }

  verificarExistenciaMultiple(contenedor, elemento, fileName, position) {
    cy.get(contenedor).then((body) => {
      if (body.find(elemento).length > 0) {
        cy.writeFile(`cypress/fixtures/verificadores/${fileName}.json`, {
          position: position,
        });
        cy.log("EXISTE EL ELEMENTO:", position);
      }
    });
  }

  //1er Formulario de registro hijo
  typeNombreHijo(nombre) {
    cy.get("#nombre").type(nombre);
  }
  typeApellidoHijo(apellido) {
    cy.get("#apellido").type(apellido);
  }
  typeFechaNacimiento(fecha) {
    cy.get("#fecha_nacimiento").type(fecha);
  }
  botonRegistrarHijo() {
    cy.get("#registrar-hijo-submit").click();
    cy.wait(3000);
  }

  //boton de bienvendio
  botonRegistraATuHijo() {
    cy.get(".welcome_parent > .btn").click();
  }
}
