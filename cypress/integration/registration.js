const locators = require("../fixtures/locators.json")
const faker = require('faker');

let userData = {
    randomName : faker.name.findName(),
    randomLastName : faker.name.lastName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password()
}

describe('login case', () => {
    it('Visit Gallery App', () => {
        beforeEach(() => {
            cy.visit('')
            cy.get(locators.navigation.registerPage).click()
        })
    })
    

    it('Enter first name', () => {
        cy.get(locators.registerPage.firstName).type('Dragan')
    })

    it('Enter last name', () => {
        cy.get('input[id="last-name"]').type('Miljkovic')
    })

    it('Enter email', () => {
        cy.get('input[id="email"]').type(faker.internet.email())
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
        beforeEach(() => {
            cy.visit('')
            cy.get(locators.navigation.registerPage).click()
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
        beforeEach(() => {
            cy.visit('')
            cy.get(locators.navigation.registerPage).click()
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

})
})