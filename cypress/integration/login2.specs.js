/// <reference types="Cypress" />

import { authLogin } from '../pageObjects/loginPage.js'
const locators = require("../fixtures/locators.js")

describe('login case', () => {
    beforeEach(() => {
        cy.visit('')
        authLogin.clickLoginButton()
    })

    it('login with valid credentials', () => {
        authLogin.login('goranqqqqq@test.com', 'mojasifra12345')
    })
})