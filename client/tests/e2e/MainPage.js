/// <reference types="Cypress"/>

describe("Range Slider", () => {
    it("Set Slide and checkboxes and click on go button to render workout", () => {
        cy.visit("/")
        cy.get("input[type=range]").click({ multiple: true, force: true }).type("{rightarrow}")
        cy.get("input[type=checkbox").check()
        // cy.get("[data-cy=switchthree]").check()
        cy.get("[data-cy=buttonrender]").click()
        cy.url().should("include", "/CurrentWorkout")
    })
})
