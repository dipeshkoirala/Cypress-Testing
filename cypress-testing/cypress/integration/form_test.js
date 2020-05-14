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

    //cy.get("#email").contains("@");

    cy.get('input[type="checkbox"]').check().should("be.checked");

    //Arrange
    //Act
    //Assert
  });

  it("send email with contact ", () => {
    cy.get("form").submit();
    //cy.get("#success-message").should("be.visible");
  });
});
