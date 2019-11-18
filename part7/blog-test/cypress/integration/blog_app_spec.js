describe("Blog ", function() {
  beforeEach(function() {
    cy.request("POST", "http://localhost:3003/api/testing/reset");
    const user = {
      username: "frank",
      name: "frank",
      password: "frank"
    };
    cy.request("POST", "http://localhost:3003/api/users/", user);
    cy.visit("http://localhost:3000");
  });

  describe("when logged in", function() {
    beforeEach(function() {
      cy.get("#username").type("frank");
      cy.get("#password").type("frank");
      cy.get("#login").click();
    });

    it("name of logged in user is shown", function() {
      cy.contains("Hi fred");
    });

    it("user information can be viewed", function() {
      cy.contains("blogs").click();
      cy.get("table a:first").click();
      cy.contains("Leighton's Ninja Warrior Birthday Party");
    });

    it("a new blog can be created", function() {
      cy.contains("create").click();
      cy.get("#title").type("a blog created by fred");
      cy.get("#author").type("joe joe");
      cy.get("#url").type("google.com");
      cy.contains("add blog").click();
      cy.contains("a blog created by fred");
    });
  });
});
