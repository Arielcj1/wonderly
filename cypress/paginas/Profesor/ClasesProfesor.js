// Autor: Yanina Cardozo
/// <reference types="cypress" />

import { testCaseConfig } from "../../helpers/helpers";

export class ClasesProfesor {
  tableroClasesProfesor() {
    cy.get("#menu-item-456 > .nav-link").click();
  }
  clickNombreClaseTablero() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/th[2]/a"
    ).click();
  }

  click_nombreDeLaClase() {
    cy.contains(testCaseConfig.nombreDelCursoCreado).click({ force: true });
  }
  //Iniciar clase desde el detalle de la clase
  botonIniciarClase() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/section/div[2]/div/div[2]/div[2]/div[2]/div[1]/button"
    ).click();
    cy.wait(2000);
  }

  editarClase() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/td[3]/a[1]"
    ).click();
  }

  type_youtubeVideo(url) {
    cy.get("#input_28_4").clear().type(url);
  }
  click_botonGuardar() {
    cy.get("#gform_submit_button_28").click();
  }
  click_botonRegresar() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[3]/a"
    ).click();
  }

  // Agregar Material
  iconoAgregarMaterial() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/td[3]/a[2]"
    ).click();
  }
  click_botonAgregarMaterial() {
    cy.get(".gpnf-add-entry").click();
  }
  type_tituloFormAgregarMaterial(titulo) {
    cy.xpath(
      "/html/body/div[6]/div[1]/div/div[2]/form/div[1]/div/div[1]/div/input"
    ).type(titulo);
  }
  type_descripcionFormAgregarMaterial(descripcion) {
    cy.xpath(
      "/html/body/div[6]/div[1]/div/div[2]/form/div[1]/div/div[2]/div/textarea"
    ).type(descripcion);
  }
  subirArchivoFormAgregarMaterial() {
    cy.get("input[type=file]").attachFile("sample.pdf");
  }
  botonAgregarMaterialForm() {
    cy.wait(3000);
    cy.xpath("/html/body/div[6]/div[2]/button[2]").click();
    cy.wait(3000);
  }

  clickIconoVerAlumnosInscritos() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/td[3]/a[3]"
    ).click();
  }

  // Eliminar 2 de los 3 materiales
  eliminarMaterialAgregado() {
    for (var i = 1; i <= 2; i++) {
      cy.xpath(
        "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div[1]/div/table/tbody[1]/tr[" +
          i +
          "]/td[4]/ul/li[2]/button"
      ).click();
    }
    cy.get(".btn-group > .btn").click(); //boton regresar
  }

  // Editar material
  editarMaterialAgregado(titulo, attachFile) {
    cy.wait(2000);
    for (var i = 1; i <= 2; i++) {
      cy.xpath(
        "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div[1]/div/table/tbody[1]/tr[" +
          i +
          "]/td[4]/ul/li[1]/button"
      ).click();
      cy.wait(2000);
      cy.xpath(
        "/html/body/div[6]/div[1]/div/div[2]/form/div[1]/div/div[1]/div/input"
      )
        .clear()
        .type(titulo + i);
      cy.get("input[type=file]").attachFile(attachFile);

      cy.wait(3000);
      cy.xpath("/html/body/div[6]/div[2]/button[2]").click();
      cy.wait(3000);
    }
    cy.get(".btn-group > .btn").click(); //boton regresar
  }

  //Iniciar clase desde el Schedule
  //Parametro:
  //nombre tipo: string
  botonIniciarClaseSchedule(nombre) {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[2]/div/div/div/div/div/div/div[1]/div/div/div/div/div[3]/a"
    )
      .invoke("text")
      .then((text) => {
        if (text == nombre) {
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[2]/div/div/div/div/div/div/div[1]/div/div/div/div/div[3]/a"
          ).click();
          cy.wait(3000);
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/section/div[2]/div/div[2]/div[2]/div[2]/div[1]/button"
          ).click();
          cy.wait(2000);
        } else {
          cy.log("No es la clase del profesor");
        }
      });
  }
  verificarClaseAsignadaSchedule(nombre) {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[2]/div/div/div/div/div/div/div[1]/div/div/div/div/div[3]/a"
    )
      .invoke("text")
      .then((text) => {
        if (text == nombre) {
          cy.log("Es una clase asignada al profesor");
          cy.wait(2000);
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[2]/div/div/div/div/div/div/div[1]/div/div/div/div/div[3]/a"
          ).click();
        } else {
          cy.log("No es una clase asignada al profesor");
        }
      });
  }

  //formato
  agregarMaterialForm() {
    cy.wait(3000);
    cy.xpath("/html/body/div[6]/div[2]/button[2]").click();
    cy.xpath(
      "/html/body/div[6]/div[1]/div/div[2]/form/div[1]/div/div[2]/div[2]"
    ).should("be.visible");
  }
  click_botonRegresar() {
    cy.get(".btn-group > .btn").click();
  }

  // Agregar 3 veces el material
  agregarMaterial2daVez(titulo, descripcion, attachFile) {
    for (var i = 1; i <= 3; i++) {
      cy.get(".gpnf-add-entry").click();
      cy.xpath(
        "/html/body/div[6]/div[1]/div/div[2]/form/div[1]/div/div[1]/div/input"
      )
        .clear()
        .type(titulo + i);
      cy.xpath(
        "/html/body/div[6]/div[1]/div/div[2]/form/div[1]/div/div[2]/div/textarea"
      )
        .clear()
        .type(descripcion + i);
      cy.get("input[type=file]").attachFile(attachFile);
      cy.wait(3000);
      cy.xpath("/html/body/div[6]/div[2]/button[2]").click();
      cy.wait(3000);
    }
  }
}
