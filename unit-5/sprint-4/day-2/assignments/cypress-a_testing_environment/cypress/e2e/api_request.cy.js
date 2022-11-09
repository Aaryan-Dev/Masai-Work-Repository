describe("Request from Api call", () => {
  it("Should intercept a GET request", () => {
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "http://localhost:8080/counter", {
      value: 10,
    }).as("getReq");

    //   waiting for function to be complete
    cy.wait("@getReq").should((data) => {
      console.log("The data is", data);
    });
  });
  it("Should intercept POST request", () => {
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "http://localhost:8080/counter", {
      fixture: "counter",
      // from cypress/fixtures
      // or
      // value: 10,
    }).as("getReq");

    cy.intercept("POST", "http://localhost:8080/counter", {
      value: 134987,
    }).as("postReq");

    //   waiting for function to be complete
    cy.wait("@getReq");
    cy.get(".increment_count").click();
    cy.wait("@postReq").then((r) => {
      console.log("The data is XLIR", r);
    });
  });
});
