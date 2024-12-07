import * as objets from "./objets/page.js";

describe('SanberCode - Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  // Tes positif
  it('Positive - Login with valid data', () => {
    cy.get(objets.input_username).type("standard_user");
    cy.get(objets.input_password).type("secret_sauce");
    cy.get(objets.input_btn_submit).click();
  });
  });

