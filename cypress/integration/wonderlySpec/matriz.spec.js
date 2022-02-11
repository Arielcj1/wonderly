/// <reference types="cypress" />

import { Home } from "../../paginas/Home";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe.skip("Wonderly- tablero hijo", () => {
  const home = new Home();

  beforeEach(function () {
    cy.visit(
      "https://www.alibaba.com/Consumer-Electronics_p44?spm=a2700.8293689.allinfo.d44.200467afPVvpB7&tracelog=ICBU_PC_HOME_BANNER_LEFT"
    );
  });

  it("verificar matriz ", () => {
    // home.precio();
    home.matriz("$1.00 - $15.59");
  });
});
