import {ShopPage, ProceedToCheckout, AddToChart_BlouseButton, ProceedGreen, EmailAddress, CreateAccountButton, MrCheck, FirstName, LastName, Password, Days, Month, Years, NewsletterCheck, SpecialOffersCheck, Address, City, State, PostCode, MobilePhone, Register, AgreeTermsCheck, PayByBankWireButton, ConfirmOrderButton, OrderSuccessText} from "../shopPage/ShopPageSelectors"

export class AddToChart{
    
    navigate(url){
        cy.visit(url)
    }
    
    clickAddChart(){
        cy.get(AddToChart_BlouseButton).click()
        cy.get(ProceedToCheckout).click()
        cy.get(ProceedGreen).click()
    }

    order_SingIn(email, name, secondname, pass, addressName, CityName, Code, PhoneNumber){
        cy.get(EmailAddress).click()
        cy.get(EmailAddress).type(email)
     
        cy.get(CreateAccountButton).click()
        cy.get(MrCheck).click()
        cy.get(FirstName).type(name)
        cy.get(LastName).type(secondname)
        cy.get(Password).type(pass)
        cy.get(Days).select('1').should('have.value', '1')
        cy.get(Month).select('1').should('have.value', '1')
        cy.get(Years).select('2020')
        cy.get(NewsletterCheck).click()
        cy.get(SpecialOffersCheck).click()
        cy.get(Address).type(addressName)
        cy.get(City).type(CityName)
        cy.get(State).select('1')
        cy.get(PostCode).type(Code)
        cy.get(MobilePhone).type(PhoneNumber)
        cy.get(Register).click()
    }

    order_Proccess(){
        cy.get(ProceedGreen).click()
        cy.get(AgreeTermsCheck).click()
        cy.get(ProceedGreen).click()
        cy.get(PayByBankWireButton).click()
        cy.get(ConfirmOrderButton).click()
        cy.get(OrderSuccessText).contains('Your order on My Store is complete.')
        
    }

    
    

}
