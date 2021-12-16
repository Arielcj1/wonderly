/// <reference types="cypress" />

export class Perfil {
  click_tableroClasesProfesor() {
    cy.get("#menu-item-456 > .nav-link").click();
  }
  type_nombre(nombre) {
    cy.get("#input_10_37").clear().type(nombre);
  }

  type_apellido(apellido) {
    cy.get("#input_10_36").clear().type(apellido);
  }

  type_telefono(telefono) {
    cy.get("#input_10_4").clear().type(telefono);
  }

  type_fechaNacimiento(fechaNacimiento) {
    cy.get("#input_10_9").clear().type(fechaNacimiento);
    cy.get("#gform_fields_10").click();
  }

  select_pais(pais) {
    cy.get("#input_10_19").clik;
    cy.get("#input_10_19").select(pais);
  }

  type_ciudad(ciudad) {
    cy.get("#input_10_20").clear().type(ciudad);
  }

  type_descripcionAcercaDeTi(descripcion) {
    cy.get("#input_10_24").clear().type(descripcion);
  }

  type_equipoQueUtilizas(equipo) {
    cy.get("#input_10_23").clear().type(equipo);
  }

  select_comoNosconociste(nosConociste) {
    cy.get("#input_10_6").select(nosConociste);
  }

  check_especialidad() {
    cy.get("#choice_10_26_2").click();
  }

  check_ExperienciaRangoEdad() {
    cy.get("#choice_10_25_6").click();
  }

  seleccionarArchivo() {
    cy.wait(2000);
    cy.get("input[type=file]").attachFile("SegundoCuento.pdf");
  }

  click_botonGuardar() {
    cy.get("#gform_submit_button_10").click();
  }
  click_iniciarClase() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/td[4]/button[2]"
    ).click();
  }
}
