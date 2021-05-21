const locators = require("../fixtures/locators.json")
const faker = require('faker');

let userData = {
    randomName : faker.name.findName(),
    randomLastName : faker.name.lastName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password()
}