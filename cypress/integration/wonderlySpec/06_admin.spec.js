///<reference types="cypress" />
// Casos de prueba realizado por Patrik Delgadillo

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { AsignarProfesor } from "../../PaginasAdmin/AsignarProfesor";
import { ClaseOnDemand } from "../../PaginasAdmin/ClaseOnDemand";
import { EditarWonderlyCursos } from "../../PaginasAdmin/EditarWonderlyCursos";
import { EliminarCurso } from "../../PaginasAdmin/EliminarCurso";
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";
import { ModulosOnDemand } from "../../PaginasAdmin/ModulosOnDemand";
import { OnDemand } from "../../PaginasAdmin/OnDemand";
import { RepetirCurso } from "../../PaginasAdmin/RepetirCurso";
import { WonderlyClases } from "../../PaginasAdmin/WonderlyClases";
import { WonderlyCursos } from "../../PaginasAdmin/WonderlyCursos";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly - administrador", () => {
  const ingresar = new Ingresar();
  const home = new Home();
  const homeadmin = new HomeAdmin();
  const wonderlycursos = new WonderlyCursos();
  const editarcursos = new EditarWonderlyCursos();
  const asignarprofe = new AsignarProfesor();
  const repetircurso = new RepetirCurso();
  const eliminarcurso = new EliminarCurso();
  const wonderlyclase = new WonderlyClases();
  const ondemand = new OnDemand();
  const modulosonDemand = new ModulosOnDemand();
  const claseondemand = new ClaseOnDemand();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
  });


 

  

 

 

 


  

  it.skip("Verificar que el Admin puede eliminar material de una clase", () => {
    homeadmin.click_tableroWonderlyCursos();
    editarcursos.buscar_curso("LUNES 27", 4); //Click en el icono de Ver Clases
    wonderlyclase.click_iconoAgregarMaterial();
    wonderlyclase.verificar_Material();
    cy.wait(2000);
    wonderlyclase.click_Regresar();
  });


});
