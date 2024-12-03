/// <reference types="Cypress" />;

describe("Testing the counter application", () => {
  it("Visit the application", () => {
    cy.visit("http://localhost:3000/");
  });

  it("have all components", () => {
    cy.visit("http://localhost:3000/");

    cy.get("h3").should("exist"); //expect(h3Tag).toBeInTheDocument();
    cy.get(".increment_count").should("exist");
    cy.get(".decrement_count").should("exist");
  });

  it("able to increant counter", () => {
    cy.visit("http://localhost:3000/");

    cy.get("h3").should("have.text", "The current count is 0");
    cy.get(".increment_count").click();
    cy.get("h3").should("have.text", "The current count is 1");
  });

  it("Should increament count, multiple times", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h3").should("have.text", "The current count is 0");
    cy.get(".increment_count").click();
    cy.get(".increment_count").click();
    cy.get(".increment_count").click();
    cy.get("h3").should("have.text", "The current count is 3");
  });
});
