/// <reference types="Cypress"/>

describe("Type Input and submit formular. See result below in userlist.", () => {
    it("Set Slide and checkboxes and click on go button to render workout", () => {
        cy.visit("/Create")

        cy.get("[data-cy=name]").type("Test Exercise 010101")
        cy.get("[data-cy=type]").select("drill")
        cy.get("[data-cy=equipment]").select("fins")
        cy.get("[data-cy=video]").type("https://www.youtube.com/watch?v=nD2dZVsrBq4")
        cy.get("[data-cy=definition]").type("hello")

        cy.get("form").submit()
        cy.contains("Test Exercise")
    })
})
