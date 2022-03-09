import {FirstTest} from "../../pages/bankPage/firstet_page"

const firstTest = new FirstTest()

it('withdrawal', function() {
firstTest.navigate('https://www.way2automation.com/angularjs-protractor/banking/#/login')
firstTest.enterPerson()
firstTest.chooseNameHermiona()
firstTest.enterwithdrawal('3000')
cy.get('.error').should('be.visible')


})