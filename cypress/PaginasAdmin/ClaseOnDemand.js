///<reference types='cypress' />
export class ClaseOnDemand {
  // para clases On demand dentro de Wonderly Cursos
  click_onDemand() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/header/div[2]/a[2]"
    ).click();
  }
  click_agregarClaseOnDemand() {
    cy.get(".post-236 > .btn-primary").click();
  }
  type_tituloClase(titulo) {
    cy.get("#input_41_1").type(titulo);
  }
  type_descripcionClase(descripcion) {
    cy.iframe("[id=input_41_2_ifr]").type(descripcion);
  }

  select_materia(materia) {
    cy.get("#input_41_4").select(materia);
  }
  select_edad(edad) {
    cy.get("#input_41_5").select(edad);
  }
  type_videoYoutube(url) {
    cy.get("#input_41_6").type(url);
  }
  select_herramientaDeTrabajo(herramienta) {
    cy.get("#input_41_7").select(herramienta);
  }
  botonAgregarClaseOnDemand() {
    cy.get("#gform_submit_button_41").click();
  }

  select_claseOnDemand(clase) {
    cy.get("#input_39_2").select(clase);
  }
  // segundo boton
  botonAsignarClaseOnDemand() {
    cy.get("#gform_submit_button_39").click();
  }

  verificarCursoOnDemand(nombreClase) {
    cy.log("El nombre de la clase es", nombreClase);
    cy.wait(2000);
    var position = 1;

    for (let i = 1; i <= 17; i++) {
      var encontrado = 0;
      cy.xpath(
        "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[2]/div/div/div/div/div[" +
          i +
          "]/div/div/div/div/div[1]/div[2]/div/a"
      )
        .invoke("text")
        .then((text) => {
          cy.log("************************", text);
          if (text.trim() == nombreClase.trim()) {
            encontrado = position;
          } else {
            cy.log("No se ha encontrado el curso");
          }
          if (position == 17) {
            cy.xpath("/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[2]/div/div/div/div/div["+encontrado+"]/div/div/div/div/div[3]/a"
            ).click();
          }
          position++;
        });
    }
  }
}
