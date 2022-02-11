/// <reference types="cypress" />

export class Home {
  boton_RegistroGratis() {
    cy.get("#free-trial-home > .btn").click();
  }

  click_IniciaSesion() {
    cy.get("#menu-item-139 > .nav-link").click();
  }
  click_Destrezas() {
    cy.get("#menu-item-17 > .nav-link").click();
  }

  click_PorqueWonderly() {
    // cy.get("#menu-item-14 > .nav-link").click();
    cy.get("#menu-item-71 > .nav-link").click();
  }
  click_Flecha_Izq() {
    cy.get(".schedule-date-slider > .slick-prev").click();
  }
  click_Flecha_Der() {
    cy.get(".schedule-date-slider > .slick-next").click();
  }
  click_dia() {
    cy.get(
      '[data-slick-index="1"] > div > li > .trigger-schedule-clases'
    ).click();
  }

  click_diaSchedule() {
    cy.xpath(
      "/html/body/div[2]/div[2]/div/div/div/main/article/div/section[2]/div[3]/div[1]/div[1]/div/div/div/ul/ul/div/div/div[8]/div/li/a"
    ).click();
  }
  click_Destrezas2() {
    cy.get(".mb-5 > .btn").click(); //boton de Explorar nuestras destrezas!
  }
  click_Membresias() {
    cy.get("#menu-item-724 > .nav-link").click();
  }

  click_DesplazarAbajo() {
    cy.get(".down-link").click();
  }

  click_DesplazarArriba() {
    cy.get(".up-link").click();
  }

  click_LogoWonderly() {
    cy.get(".custom-logo").click();
  }

  click_Membresia_Explorador() {
    cy.get('.parent-user > .btn').click()
  }

  click_Membresia_Inventor() {
    cy.get(
      '[data-slick-index="1"] > :nth-child(1) > .mb-3 > .description > .btn'
    ).click();
  }

  click_Membresia_Genio() {
    cy.get(
      '[data-slick-index="2"] > :nth-child(1) > .mb-3 > .description > .btn'
    ).click();
  }

  click_MenuUsuario() {
    //cy.get("#menu-item-6738 > #navbarDropdown").click();
    cy.get("#menu-item-6738 > .nav-link").click();
  }

  click_salir() {
    // cy.get("#menu-item-6738 > #navbarDropdown").click();
    cy.xpath(
      "/html/body/div[2]/header/div/nav/div[2]/ul/li[4]/ul/li[4]/a"
    ).click({ force: true });
  }

  click_seccionOnDemand() {
    cy.get("#ondemand-tab").click();
  }

  click_seccionEnVivo() {
    cy.get("#vivo-tab").click();
    cy.wait(2000);
  }

  click_pestañaCursos() {
    cy.get("#menu-item-5424 > .nav-link").click();
  }

  boton_7diasGratis() {
    //Boton menu 7 dias gratis
    cy.get("#menu-item-6020 > .nav-link").click();
  }

  boton_conMovimiento7diasGratis() {
    cy.get(".mb-0 > .btn").click();
  }

  //  Menu de Destrezas

  menu_Robotica() {
    cy.get("#menu-item-6026 > .nav-link").click();
  }
  menu_Programacion() {
    cy.get("#menu-item-6027 > .nav-link").click();
  }
  menu_DesarrolloVideoJuegos() {
    cy.get("#menu-item-6028 > .nav-link").click();
  }
  menu_Matematicas() {
    cy.get("#menu-item-6029 > .nav-link").click();
  }
  menu_Ingles() {
    cy.get("#menu-item-6030 > .nav-link").click();
  }

  impactoSocial() {
    cy.get("#menu-item-6094 > .nav-link").click();
  }
  prensa() {
    cy.get("#menu-item-6097 > .nav-link").click();
  }
  membresiasMenuAbajo() {
    cy.get("#menu-item-724 > .nav-link").click();
  }

  verificarExistenciaElemento(contenedor, elemento, fileName) {
    cy.get(contenedor).then((body) => {
      if (body.find(elemento).length > 0) {
        cy.writeFile(`cypress/fixtures/verificadores/${fileName}.json`, {
          verify: "true",
        });
        cy.log("EXISTE EL ELEMENTO");
      } else {
        cy.writeFile(`cypress/fixtures/verificadores/${fileName}.json`, {
          verify: "false",
        });
        cy.log("NO EXISTE EL ELEMENTO");
      }
    });
  }

  typeCorreo(email) {
    cy.xpath(
      "/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div/div[1]/div/div[1]/input"
    ).type(email);
  }

  clickCalendario() {
    cy.get("#input_35_20").click();
    cy.wait(1000);
  }
  numeroCalendar(fecha) {
    let contadorPromesas = 1;
    let contadorFilaPromesa = 1;
    let contadorColumnaPromesa = 1;
    for (let colum = 1; colum <= 7; colum++) {
      for (let fila = 1; fila <= 6; fila++) {
        cy.xpath(
          "/html/body/div[6]/div[1]/table/tbody/tr[" +
            fila +
            "]/td[" +
            colum +
            "]"
        )
          .invoke("text")
          .then((text) => {
            cy.log("fecha ", text, "fila y columna: ", fila, colum);
            if (text === fecha) {
              cy.log("Posicion de la fila y columna", fila, colum);
              cy.log("Imprimiendo Contador: ", contadorPromesas);
              contadorFilaPromesa = fila;
              contadorColumnaPromesa = colum;
            }

            if (contadorPromesas == 42) {
              cy.log(
                "Haciendo click en la fecha  ",
                contadorFilaPromesa,
                contadorColumnaPromesa
              );

              cy.xpath(
                "/html/body/div[6]/div[1]/table/tbody/tr[" +
                  contadorFilaPromesa +
                  "]/td[" +
                  contadorColumnaPromesa +
                  "]"
              ).click();
            }
            contadorPromesas++;
            cy.log("CONTADORRRR", contadorPromesas);
          });
      }
    }
  }

  precio() {
    cy.xpath(
      "/html/body/div[3]/div[7]/div/div[1]/div[1]/div[1]/div/a/div/div[2]/div[3]/span"
    )
      .invoke("text")
      .then((text) => {
        cy.log("PRECIO ", text);
      });
  }

  matriz(precioProducto) {
    for (let c = 1; c <= 2; c++) {
      for (let f = 1; f <= 3; f++) {
        var guardarC;
        var guardarF;
        cy.xpath(
          "/html/body/div[3]/div[8]/div/div[1]/div[" +
            f +
            "]/div[" +
            c +
            "]/div/a/div/div[2]/div[3]/span"
        )
          .invoke("text")
          .then((precio) => {
            cy.log(precio);

            if (precio == precioProducto) {
              guardarC = c;
              guardarF = f;
              cy.log("guardado", guardarF, guardarC);
            }
            if (c == 2 && f == 3) {
              cy.log("CLICK", guardarF, guardarC);
              cy.xpath(
                "/html/body/div[3]/div[8]/div/div[1]/div[" +
                  guardarF +
                  "]/div[" +
                  guardarC +
                  "]/div/a/div/div[2]/div[3]/span"
              ).click();
            }
          });
      }
    }
  }
}

//   var contador = 1;

//   for (let columna = 1; columna <= 3; columna++) {
//     let guardarColumna = 1;
//     for (let fila = 1; fila <= 2; fila++) {
//       let guardarFila = 1;
//       cy.xpath(
//         "/html/body/div[3]/div[7]/div/div[1]/div[" +
//           columna +
//           "]/div[" +
//           fila +
//           "]/div/a/div/div[2]/div[3]/span"
//       )
//         .invoke("text")
//         .then((text) => {
//           cy.log("Imprimiendo filas y columnas ", text, columna, fila);
//           cy.log("TEXTO ES IGUAL A", text, "PRECIO", precio);

//           if (text === precio) {
//             cy.log("POSICIONNNN del producto ", guardarColumna, guardarFila);
//             guardarColumna = columna;
//             guardarFila = fila;
//           }
//           cy.log("CONTADORRRRRRR", contador);
//           if (contador === 6) {
//             cy.log("ENTRO AQUI","la columna es " ,guardarColumna, "La fila es: ",guardarFila);

//             cy.xpath(
//               "/html/body/div[3]/div[7]/div/div[1]/div[" +
//                 guardarColumna +
//                 "]/div[" +
//                 guardarFila +
//                 "]/div/a/div/div[2]/div[3]/span"
//             ).click();
//           } else {
//             cy.log("No encontro el precio");
//           }
//           contador++;
//         });
//     }
//   }
// }
