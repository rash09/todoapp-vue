describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");
  });

  it("should submit the Add item form", () => {
    cy.visit("http://localhost:5173");
    cy.get("input").type("Item9");
    cy.get("select").eq(0).select("1");
    cy.get("form.action-form").submit();
    cy.window().then((win) => {
      win.localStorage.setItem(
        "todoLists",
        '{"itemName":"Item9","id":"abc","priority":"1"}'
      );
    });
  });
});
