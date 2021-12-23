///<reference types="cypress" />

import { Home } from "../../paginas/Home";
import { Ingresar } from "../../paginas/Ingresar";
import { ModulosOnDemand } from "../../PaginasAdmin/ModulosOnDemand";
import { OnDemand } from "../../PaginasAdmin/OnDemand";

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

describe("Wonderly- Home Page administrador", () => {
    const ingresar = new Ingresar()
    const home = new Home()
    const ondemand = new OnDemand()
    const modulosonDemand = new ModulosOnDemand()

  
    beforeEach(() => {
        cy.visit("https://developers.learnwonderly.com/");
         home.click_IniciaSesion();
         ingresar.type_Correo("neida.veizaga@believesol.com");
         ingresar.type_contrasena("abcABC123");
         ingresar.click_continuar();
    });

    it('Comprobar que el admin puede crear una clase on demand', () => {
        ondemand.click_wonderlyClasesTablero()
        ondemand.click_clasesOnDemand()
        ondemand.click_agregarClaseOnDemand()

        ondemand.type_tituloClase('Clase OnDemand Gratis 1')
        ondemand.type_descripcionClase('Detalle de la clase ondemand para niños')
        ondemand.select_materia('Inglés')
        ondemand.select_edades('7-8')
        ondemand.type_youtubeVideo('https://www.youtube.com/watch?v=zIWjYSfy0PQ')
        ondemand.select_herramienta('Eduten')

        //ondemand.click_confirmarAgregarOnDemand()

    })

    it('Verificar que el Admin puede editar una clase on demand', () => {
        ondemand.click_wonderlyClasesTablero()
        ondemand.click_clasesOnDemand()
        modulosonDemand.buscar_cursoOnDemand('INGLES PARA Niños', 1)

        ondemand.type_editarTituloClase('Clase on demand pagando 1')
        ondemand.type_editardescripcionClase('Hay que pagar para ver este contenido, nada es gratis')
        ondemand.select_editarmateria('Inglés')
        ondemand.select_editaredades('7-8')
        ondemand.type_editaryoutubeVideo('https://www.youtube.com/watch?v=zIWjYSfy0PQ')
        ondemand.select_editarherramienta('Scratch')

        //ondemand.click_guardar()
    })

    it('Verificar que el Admin puede agregar Modulos y clases a una clase On Demand', () => {
        ondemand.click_wonderlyClasesTablero()
        ondemand.click_clasesOnDemand()
        modulosonDemand.buscar_cursoOnDemand('INGLES PARA Niños', 2)
        modulosonDemand.agregar_Modulos_Clases('Modulo','Clase','https://www.youtube.com/watch?v=JWstLFgzxZM')
    })

})