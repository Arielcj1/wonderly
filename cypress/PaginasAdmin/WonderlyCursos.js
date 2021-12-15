///<reference types="cypress" />
export class WonderlyCursos {
  type_tituloCurso(tituloCurso) {
    cy.get("#input_35_27").type(tituloCurso);
  }

  type_descripcionCurso(descripcionCurso) {
    cy.iframe("iframe[id=input_35_28_ifr]").click();
    cy.iframe("iframe[id=input_35_28_ifr]").type(descripcionCurso);
  }

  click_añadirImagen() {
    cy.get("#insert-media-button").click();
  }

  click_seleccionarArchivos() {
    cy.get("input[type=file]").attachFile("imagen1.jpg");
  }

  click_insertaralaPagina() {
    cy.get(".media-toolbar-primary > .button").click();
  }
  type_descripionProyectoFinal(descripcionProyectoFinal) {
    cy.get("#input_35_37_ifr").type(descripcionProyectoFinal);
  }
  VerificarCurso() {
    cy.get(":nth-child(4) > th")
      .invoke("text")
      .then((text) => {
        if (text == "2053") {
          cy.get(
            '[href="https://developers.learnwonderly.com/tablero/asignar-profesor/?curso_id=2053&referrer_url=https://developers.learnwonderly.com/tablero/wonderly-cursos"] > .svg-inline--fa'
          ).click();
        } else {
          cy.log("Id no encontrado");
        }
      });
  }
  materia(materia) {
    cy.get("#input_35_15").select(materia);
  }

  edades(edades) {
    cy.get("#input_35_16").select(edades);
  }
  type_fechaInicio(fechaInicio) {
    cy.get("#input_35_20").type(fechaInicio);
  }
  type_fechaFinal(fechaFinal) {
    cy.get("#input_35_21").type(fechaFinal);
  }
  horaInicio(horaInicio) {
    cy.get("#input_35_22").select(horaInicio);
  }
  duracionClases(duracionClases) {
    cy.get("#input_35_30").select(duracionClases);
  }

  recuerrenciaClases() {
    cy.get("#choice_35_36_2").click();
  }
  zonaHoraria(zonaHoraria) {
    cy.get("#field_35_29 > div").select(zonaHoraria, { force: true });
  }
  type_youtubeVideo(url) {
    cy.get("#input_35_26").type(url);
  }
}
