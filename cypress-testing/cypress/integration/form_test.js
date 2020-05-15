///<reference types="cypress"/>

// import Chance from "chance";
// const chance = new Chance();

describe("This is my first test", () => {
  it("should return true", () => {
    expect(true).to.equal(true);
  });
});

describe("testing our form inputs", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });
  it("Finds the Named Input", () => {
    cy.get('input[name="name"]')
      .type("Dipesh Koirala")
      .should("have.value", "Dipesh Koirala");

    cy.get('input[name="email"]').type("dipeshkoirala@gmail.com");

    cy.get('input[type="checkbox"]').check().should("be.checked");
    cy.contains("Submit").click();
    //Arrange
    //Act
    //Assert
  });

  //   it("send email with contact ", () => {
  //     cy.contains("Submit").click();
  //     //cy.get("#success-message").should("be.visible");
  //   });
});
