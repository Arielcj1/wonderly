///<reference types="cypress" />
 
import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { Perfil } from "../../paginas/Profesor/Perfil"
import { HomeAdmin } from "../../PaginasAdmin/HomeAdmin";
import { RegistroProfesor } from "../../PaginasAdmin/RegistroProfesor";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Wonderly- Home Page administrador", () => {
  const ingresar = new Ingresar();
  const home = new Home();
  const homeadmin = new HomeAdmin();
  const registroprofesor = new RegistroProfesor();
  const perfil = new Perfil();

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/");
    home.click_IniciaSesion();
  })

  it("Verificar que el admin pueda crear un profesor", () => {
    ingresar.type_Correo("neida.veizaga@believesol.com");
    ingresar.type_contrasena("abcABC123");
    ingresar.click_continuar();
    cy.wait(2000);
    homeadmin.click_tableroProfesoresRegistrados();
    homeadmin.click_botonRegistrarProfesor();
    registroprofesor.type_nombre("Profesor");
    registroprofesor.type_apellido("Catorce");
    registroprofesor.type_correoElectronico("profesor14@gmail.com");
    registroprofesor.type_contrasenia("12345");
    registroprofesor.type_confirmarContrasenia("12345");
    registroprofesor.click_botonListo();
    cy.get(".alert").should("be.visible");
  });
  
  it("Verificar que se pueda completar informacion", ()=>{
    ingresar.type_Correo("profesor14@gmail.com");
    ingresar.type_contrasena("12345");
    ingresar.click_continuar();
    cy.wait(2000);
    perfil.type_telefono_PrimeraVez('79846521');
    perfil.type_fechaNac_primeraVez('12/12/1985');
    perfil.select_pais_primeraVez('Bolivia');
    perfil.select_comoNosConociste_primeraVez('Facebook');
    perfil.click_siguiente_PV();
    cy.get('.alert').should('be.visible');
    perfil.type_descripcion_PV('hola mundo');
    perfil.type_equipo_PV('telefono fijo');
    perfil.check_especialidad_PV();
    perfil.check_experiencia_PV();
    perfil.subir_doc_PV();
    perfil.listo_PV();
    cy.get('.text-dark').should('be.visible');
  })
})