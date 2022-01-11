///<reference types="cypress" />

import { Fechas } from "../../paginas/CompararFechas";
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  describe("Comparar Fechas", () => {
      const fechas = new Fechas()
      const home = new Home()
      const ingresar = new Ingresar()
      const homeadmin = new HomeAdmin()

      beforeEach(() => {
        cy.visit("https://developers.learnwonderly.com/");
        home.click_IniciaSesion();
        ingresar.type_Correo("neida.veizaga@believesol.com");
        ingresar.type_contrasena("abcABC123");
        ingresar.click_continuar();
      });

      it("Comparar dos fechas", () => {
        homeadmin.click_tableroWonderlyCursos();
        fechas.compararFechas()
      })

  })