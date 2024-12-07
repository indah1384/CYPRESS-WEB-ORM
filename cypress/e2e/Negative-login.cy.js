import * as objets from "./objets/page.js";

describe('SanberCode - Login', () => {
  beforeEach(() => {
    // Mengunjungi halaman login sebelum setiap tes
    cy.visit('https://www.saucedemo.com');
  });

  // Tes negatif: Login dengan username tidak valid
  it('Negative - Login with invalid username', () => {
    // Memasukkan username yang salah
    cy.get(objets.input_username).type("indahtes");
    cy.get(objets.input_password).type("secret_sauce");
    cy.get(objets.input_btn_submit).click();

    // Memastikan pesan error muncul
    cy.get('[data-test="error"]') // Selector untuk elemen error message
      .should('be.visible') // Memastikan elemen error terlihat
      .and('contain', 'Epic sadface: Username and password do not match any user in this service'); // Validasi pesan error
  });
});
