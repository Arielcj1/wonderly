/// <reference types="cypress" />
import { Registro } from "../../paginas/Registro";

describe("registro", () => {

  const registro = new Registro();   //Inicializamos variable

  beforeEach(() => {
    cy.visit("https://developers.learnwonderly.com/registrar-padre/");
  });
  it("Creacion de usuario", () => {
    registro.type_nombre("Belen");
    registro.type_apellidos("Delgadillo");
    registro.type_correo("patrik3@mailinator.com");
    registro.type_contrasenia("1234");
    registro.type_numero("65266222");
    registro.click_siguiente()
    cy.get("h2").should("be.visible");
  });
});