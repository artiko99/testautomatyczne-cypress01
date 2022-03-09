export class FirstTest{

    firstTest_customerButton = '.borderM > :nth-child(1) > .btn' 
    firstTest_selectName = '#userSelect'
    firstTest_login = 'form.ng-valid > .btn'
    firstTest_depositButton = '[ng-class="btnClass2"]'
    firstTest_amountOfDeposit = '.form-control'
    firstTest_confirmDepositButton = 'form.ng-dirty > .btn'
    firstTest_withdrawalButton = '[ng-class="btnClass3"]'
    firstTest_confirmWithdrawalButton = 'form.ng-dirty > .btn'
    navigate(url){
        cy.visit(url)
    }
    
    enterPerson(){
        cy.get(this.firstTest_customerButton).click()
    }

    chooseNameHermiona(){
        cy.get(this.firstTest_selectName).select('Hermoine Granger')
        cy.get(this.firstTest_login).click()
    }

    enterdeposit(amount){
        cy.get(this.firstTest_depositButton).click()
        cy.get(this.firstTest_amountOfDeposit).type(amount)
        cy.get(this.firstTest_confirmDepositButton).click()
    }

    enterwithdrawal(amount){
        cy.get(this.firstTest_withdrawalButton).click()
        cy.get(this.firstTest_amountOfDeposit).type(amount)
        cy.get(this.firstTest_confirmWithdrawalButton).click()
    }


}