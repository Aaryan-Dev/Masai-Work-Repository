describe("Test the todo application", () => {
  //beforeALl()
  //beforeEach()
  //afterAll()
  //afterEach()

  beforeEach(() => {
    cy.visit("http://example.cypress.io/todo");
  });

  it("should render all components", () => {
    // cy.visit("http://example.cypress.io/todo");

    cy.get(".new-todo").should("exist");
    cy.get(".todo-count").should("exist");
    cy.get(".filters").should("exist");
  });

  it("should be able to add todo", () => {
    // cy.visit("http://example.cypress.io/todo");

    cy.get(".todo-list").children().should("have.length", 2);
    cy.get(".new-todo").type("Learn Type...whaterver{enter}");
    cy.get(".todo-list").children().should("have.length", 3);
  });

  it("able to increaes the task length after adding task", () => {
    // cy.visit("http://example.cypress.io/todo");
    cy.get(".todo-count strong").should("have.text", 2);
    cy.get(".new-todo").type("Learn Type...whaterver{enter}");
    cy.get(".todo-count strong").should("have.text", 3);
  });
});
