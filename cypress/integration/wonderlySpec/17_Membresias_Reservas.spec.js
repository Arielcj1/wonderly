/// <reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";
import { MembresiasReservas } from "../../PaginasAdmin/MembresiaReservas";

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  describe("Administrador - Wonderly Cursos", () => {

    const home = new Home()
    const ingresar = new Ingresar()
    const homeadmin = new HomeAdmin()
    const membresiasreservas = new MembresiasReservas()

    beforeEach(() => {
        cy.visit("https://developers.learnwonderly.com/");
        home.click_IniciaSesion();
        ingresar.type_Correo("neida.veizaga@believesol.com");
        ingresar.type_contrasena("abcABC123");
        ingresar.click_continuar();
      });

    it("Verificar que el Admin puede ir al tablero 'Reporte Membresías'", () => {
      homeadmin.click_tableroReporteMembresias()
    })

    it("Probar que el Admin puede ir a 'Membresias activas' y 'Membresias expiradas'.", () => {
      homeadmin.click_tableroReporteMembresias()
      membresiasreservas.clickMembresiasActivas()
      membresiasreservas.clickMembresiasExpiradas()
    })

    it("Verificar que el Admin puede ir al tablero 'Reporte Reservas'", () => {
      homeadmin.click_tableroReporteReservas()
    })

    it("Demostrar que el Admin puede ir a 'Reservas activas' y 'Reservas pasadas'.", () => {
      homeadmin.click_tableroReporteReservas()
      membresiasreservas.clickReservasActivas()
      membresiasreservas.clickReservasPasadas()
    })

  })