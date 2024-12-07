import * as objets from "./objets/page.js";

before(() => {
  cy.config("defaultCommandTimeout", 20000);
})

describe('Dashboard - add & remove cart', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com', { timeout: 120000 });
    cy.get(objets.input_username).type("standard_user");
    cy.get(objets.input_password).type("secret_sauce");
    cy.get(objets.input_btn_submit).click();
  })

 it("Remove from cart", ()=> {
    cy.get('button[id="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('a[class="shopping_cart_link"]').click()
    cy.get('button[id="remove-sauce-labs-backpack"]').click()
  })
});