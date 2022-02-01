/// <reference types="Cypress"/>

describe("Button (Main) for Workout Rendering", () => {
    it("Set useState and redirect to another page", () => {
        cy.visit("/")

        cy.contains("GO").click()

        cy.url().should("include", "/CurrentWorkout")
    })
})

describe("Range Slider", () => {
    it("Slide to set another swimming distance", () => {
        cy.visit("/")
        cy.get("RangeSlider").invoke("value", 20001)
    })
})
