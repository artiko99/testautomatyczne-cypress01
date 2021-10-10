import {FirstTest} from "../pages/firstet_page"

const firstTest = new FirstTest()

it('deposit', function() {

firstTest.navigate('https://www.way2automation.com/angularjs-protractor/banking/#/login')
firstTest.enterPerson()
firstTest.chooseNameHermiona()
firstTest.enterdeposit('1000')

cy.get('.error').should('be.visible')


})