describe('Negative registration attempt/without checkicking terms and coditions', () => {
    it('Visit Gallery App', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.wait('500')
    })
    
    it('Click on Register button', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get(':nth-child(2) > .nav-link').click()
        cy.wait('500')
    })

    it('Enter first name', () => {
        cy.get('input[id="first-name"]').type('Dragan')
    })

    it('Enter last name', () => {
        cy.get('input[id="last-name"]').type('Miljkovic')
    })

    it('Enter email', () => {
        cy.get('input[id="email"]').type('dragance@test.com')
    })

    it('Enter password', () => {
        cy.get('input[id="password"]').type('dragan1223')
    })

    it('Enter confirmation password', () => {
        cy.get('input[id="password-confirmation"]').type('dragan1223')
    })

    it('Leave unchecked Terms and conditions', () => {
        cy.get('.form-check-input')
    })

    it('Click Submit button', () => {
        cy.get('.btn').click()
    })
})

describe('Negative registration attempt/with incorrect confirmation password', () => {
    it('Visit Gallery App', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })
    
    it('Click on Register button', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get(':nth-child(2) > .nav-link').click()
    })

    it('Enter first name', () => {
        cy.get('input[id="first-name"]').type('Dragan')
    })

    it('Enter last name', () => {
        cy.get('input[id="last-name"]').type('Miljkovic')
    })

    it('Enter email', () => {
        cy.get('input[id="email"]').type('dragance@test.com')
    })

    it('Enter password', () => {
        cy.get('input[id="password"]').type('dragan1223')
    })

    it('Enter confirmation password', () => {
        cy.get('input[id="password-confirmation"]').type('dragan123')
    })

    it('Leave unchecked Terms and conditions', () => {
        cy.get('.form-check-input')
    })

    it('Click Submit button', () => {
        cy.get('.btn').click()
    })
})

describe('Positive Registration', () => {
    it('Visit Gallery App', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })
    
    it('Click on Register button', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get(':nth-child(2) > .nav-link').click()
    })

    it('Enter first name', () => {
        cy.get('input[id="first-name"]').type('Dragan')
    })

    it('Enter last name', () => {
        cy.get('input[id="last-name"]').type('Miljkovic')
    })

    it('Enter email', () => {
        cy.get('input[id="email"]').type('dragance@test.com')
    })

    it('Enter password', () => {
        cy.get('input[id="password"]').type('dragan1223')
    })

    it('Enter confirmation password', () => {
        cy.get('input[id="password-confirmation"]').type('dragan1223')
    })

    it('Leave unchecked Terms and conditions', () => {
        cy.get('.form-check-input').check()
    })

    it('Click Submit button', () => {
        cy.get('.btn').click()
    })
})

