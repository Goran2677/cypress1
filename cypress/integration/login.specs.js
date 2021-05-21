const locators = required("../../fixtures/locators.json")

describe('login spec - negative - without @', () => {
    beforeEach(() => {
        cy.visit('')
        cy.get(locators.navigation.loginButtton).click()
    })
    
    it('click login button', () => {
        cy.get('a[class="nav-link nav-buttons"]').eq(0).click()
    })

    it('enter user name', () => {
        cy.get('input[id="email"]').type('goran2677@gmail.com')
    })

    it('enter password', () => {
        cy.get('input[id="password"]').type('bonehead2677')
    })

    it('click submit', () => {
        cy.get('button[type="submit"]').click()
    })
})


describe('logout spec', () => {
    it('click logout', () => {
        cy.get('.ml-auto > :nth-child(3) > .nav-link').click()
    })
})



describe('login spec', () => {
    beforeEach(() => {
        cy.visit('')
        cy.get('a[href="/login"').click()
    })

    it('click login button', () => {
        cy.get('a[class="nav-link nav-buttons"]').eq(0).click()
    })

    it('enter user name', () => {
        cy.get('input[id="email"]').type('goran2677@gmail.com')
    })

    it('enter password', () => {
        cy.get('input[id="password"]').type('bonehead2677')
    })

    it('click submit', () => {
        cy.get('button[type="submit"]').click()
    })
})


describe('logout spec', () => {
    it('click logout', () => {
        cy.get('.ml-auto > :nth-child(3) > .nav-link').click()
    })
})