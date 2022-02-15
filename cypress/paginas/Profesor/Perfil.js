// Autor: Yanina Cardozo
/// <reference types="cypress" />

export class Perfil {
  click_salirDelMenu() {
    cy.xpath(
      "/html/body/div[2]/header/div/nav/div[2]/ul/li[5]/ul/li[2]/a"
    ).click({ force: true });
  }
  type_telefono_PrimeraVez(telefono) {
    cy.get("#input_8_3").clear().type(telefono);
  }

  type_fechaNac_primeraVez(fecha) {
    cy.get("#input_8_4").type(fecha);
  }
  select_pais_primeraVez(pais) {
    cy.get("#input_8_6").select(pais);
  }
  select_comoNosConociste_primeraVez(como) {
    cy.get("#input_8_8").select(como);
  }
  click_siguiente_PV() {
    cy.get("#gform_submit_button_8").click();
  }
  type_descripcion_PV(desc) {
    cy.get("#input_9_2").type(desc);
  }
  type_equipo_PV(equipo) {
    cy.get("#input_9_1").type(equipo);
  }
  check_especialidad_PV() {
    cy.get("#choice_9_3_1").check();
  }
  check_experiencia_PV() {
    cy.get("#choice_9_5_1").check();
  }
  subir_doc_PV() {
    cy.get("input[type=file]").attachFile("SegundoCuento.pdf");
  }
  listo_PV() {
    cy.get("#gform_submit_button_9").click();
  }

  click_tableroClasesProfesor() {
    cy.get("#menu-item-456 > .nav-link").click();
    cy.wait(2000);
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
  type_ciudadClear(ciudad) {
    cy.get("#input_10_20").clear().type(ciudad).clear();
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
    cy.get("#choice_10_25_2").click();
  }

  seleccionarArchivo() {
    cy.wait(2000);
    cy.get("input[type=file]").attachFile("SegundoCuento.pdf");
  }

  // Prueba En documentoWord
  subirArchivo() {
    cy.wait(2000);
    cy.get("input[type=file]").attachFile("file-sample5.docx");
  }

  click_botonGuardar() {
    cy.get("#gform_submit_button_10").click();
  }

  // Para archivo diferente de PDF
  click_botonGuardarArchivo(alert) {
    cy.get("#gform_submit_button_10").click();
    cy.wait(3000);
    cy.get(".alert")
      .invoke("text")
      .then((text) => {
        if (text.trim().includes(alert.trim())) {
          cy.log("Es un archivo PDF");
        } else {
          cy.log("No es un archivo PDF");
        }
      });
  }
  click_iniciarClase() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/td[3]/button[2]"
    ).click();
    cy.wait(3000);
  }

  iniciarLaClaseAntes(nombre) {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div[2]/table/tbody/tr[1]/td[3]/button[2]"
    ).click();
    cy.get(".title")
      .invoke("text")
      .then((text) => {
        if (text == nombre) {
          cy.log("No puede iniciar la clase ");
        }
      });
  }
}
