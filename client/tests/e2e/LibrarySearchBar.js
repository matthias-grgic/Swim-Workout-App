/// <reference types="Cypress"/>

describe("Search Bar Function", () => {
    it("Click on Filter Buttons and see results in Accordion", () => {
        cy.visit("/ExerciseList")
        cy.get("[data-cy=submitPB]").click()
        cy.get(".sc-bYoBSM")
        cy.contains("pullbuoy")
    })
})

describe("Search Bar Function", () => {
    it("Search for Exercise and see results in Accordion", () => {
        cy.visit("/ExerciseList")
        cy.get("input[type='text']").type("paddles")

        cy.get(".sc-bYoBSM")
        cy.contains("Paddles")
    })
})
