/// <reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Reportes } from "../../paginas/Reportes";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Administrador - Wonderly Cursos", () => {
  const home = new Home();
  const ingresar = new Ingresar();

  const reportes = new Reportes();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
  });

  //REPORTE EXCEL
  //Reporte Membresias //falla por el tiempo de respueta
  it.skip("1_Verificar que el admin pueda descargar el reporte Excel de la seccion Membresias Espiradas", () => {
    reportes.tabReporteMembresias();
    reportes.membresiasExpiradas();
    reportes.clickExcelReporte();
  });

  it.skip("2_Verificar que el admin pueda descargar el reporte Excel de la seccion Membresias Activas", () => {
    reportes.tabReporteMembresias();
    reportes.membresiasActivas();
    reportes.clickExcelReporte();
  });

  //Reporte Reservas
  it("3_Demostrar que el admin pueda descargar el reporte Excel de la seccion Reservas Pasadas", () => {
    reportes.tabReporteReservas();
    reportes.reservasPasadas();
    reportes.clickExcelReporte();
  });
  it("4_Demostrar que el admin pueda descargar el reporte Excel de la seccion Reservas Activas", () => {
    reportes.tabReporteReservas();
    reportes.reservasActivas();
    reportes.clickExcelReporte();
  });

  //Reporte On Demand
  it("5_Verificar que el admin pueda descargar el reporte en Excel de 'REPORTE ON DEMAND'5 ", () => {
    reportes.tabReporteOnDemand();
    reportes.clickExcelReporte();
  });

  it("6_Verificar que el admin pueda hacer uso del buscador", () => {
    reportes.tabReporteReservas();
    reportes.clickSearch();
    reportes.typeNombre("yanina");
    reportes.clickExcelReporte();
  });
});
