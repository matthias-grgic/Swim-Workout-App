/// <reference types="Cypress"/>

describe("Range Slider", () => {
    it("click on navbar links and get redirected to linked page", () => {
        cy.visit("/")
        cy.get("[data-cy=Home]").click()
        cy.url().should("include", "/")
        cy.get("[data-cy=CurrentWorkout]").click()
        cy.url().should("include", "/CurrentWorkout")
        cy.get("[data-cy=ExerciseList]").click()
        cy.url().should("include", "/ExerciseList")
        cy.get("[data-cy=Create]").click()
        cy.url().should("include", "/Create")
        cy.get("[data-cy=Settings]").click()
        cy.url().should("include", "/Settings")
    })
})
