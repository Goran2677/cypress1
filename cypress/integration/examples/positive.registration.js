describe('positive registration', () => {
    it('visit gallery app', () => {
        cy.visit('')
    })

    it('click register button', () => {
        cy.get(':nth-child(2) > .nav-link').click()
    })

    it('enter first name', () => {
        cy.get('input[id="first-name"]').type('Dragan')
    })

    it('enter last name', () => {
        cy.get('input[id="last-name"]').type('Miljkovic')
    })
})