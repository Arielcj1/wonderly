/// <reference types="cypress" />
export class ClasesProfesor {
  tableroClasesProfesor() {
    cy.get("#menu-item-456 > .nav-link").click();
  }

  click_nombreClase() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/th[2]/a"
    ).click();
  }

  click_numeroDeInscritos() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[3]/td[3]/a"
    ).click();
  }

  click_botonRegresar() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[3]/a"
    ).click();
  }
  editarClase() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/td[4]/a[1]"
    ).click();
  }

  type_youtubeVideo(url) {
    cy.get("#input_28_4").type(url);
  }
  click_botonGuardar() {
    cy.get("#gform_submit_button_28").click();
  }
  iconoAgregarMaterial() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/td[4]/a[2]"
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
  click_botonRegresar() {
    cy.get(".btn-group > .btn").click();
  }
  // Para eliminar material
  verificarMaterial(nombre) {
    cy.get("td")
      .invoke("text")
      .then((text) => {
        if (text.trim().toLowerCase() == nombre.trim().toLowerCase()) {
          cy.log("No se puede eliminar material porque no existe material");
        } else {
          cy.xpath(
            "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div[1]/div/table/tbody[1]/tr/td[4]/ul/li[2]/button"
          ).click();
          cy.wait(2000);
          cy.get(".btn-group > .btn").click; //boton regresar
        }
      });
  }

  // Agregar 3 veces el material
  AgregarMaterial2davez(titulo, descripcion, attachFile) {
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

  // Eliminar 2 de los 3 materiales
  EliminarMaterialAgregado() {
    for (var i = 1; i <= 1; i++) {
      cy.xpath(
        "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/div/form/div[1]/div/div[1]/div/table/tbody[1]/tr[" +
          i +
          "]/td[4]/ul/li[2]/button"
      ).click();
    }
    cy.get(".btn-group > .btn").click(); //boton regresar
  }

  // Editar material
  EditarMaterialAgregado(titulo, attachFile) {
    for (var i = 1; i <= 1; i++) {
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
  }
}
