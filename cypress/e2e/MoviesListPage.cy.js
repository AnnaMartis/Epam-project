describe("Movies List Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
  });

  it("should load the Movie List Page", () => {
    cy.get(".list-page").should("be.visible");
  });

  it("should initially show the search form and 'ADD MOVIE' button", () => {
    cy.get(".find-movie-title").should("be.visible");
    cy.get(".outlined-button").should("be.visible");
  });

  it("should hide search form and show movie details when a movie is clicked", () => {
    cy.get(".movies-list-part").find(".movie-title").first().click();
    cy.get(".movie-details").should("be.visible");
    cy.get(".search-form").should("not.exist");
  });

//   it("should go back to the movie list when the close button is clicked", () => {
//     cy.get(".movie-close").click();
//     cy.get(".search-form").should("be.visible");
//   });

});
