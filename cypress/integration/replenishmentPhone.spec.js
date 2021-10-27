import {mobileReplenishment} from "../support/pages/mobileReplenishment";
import {basePage} from "../support/pages/basePage";

it('Replenishment of Ukranian mobile phone number', () => {
    basePage.open('https://next.privat24.ua/mobile?lang=en')

    mobileReplenishment.typePhoneNumber('686979712')
    basePage.typeAmount('1')
    basePage.typeDebitCardData('4552331448138217', '0524', '111')
    cy.wait(3000)
    mobileReplenishment.typeCardOwnerName('Valentino', 'Rossi')
    cy.wait(3000)
    basePage.submitPayment()
    mobileReplenishment.checkDebitCard('4552 **** **** 8217')
    mobileReplenishment.checkDebitAmount('1')
    mobileReplenishment.checkDebitAmountCurrency('UAH')
    mobileReplenishment.checkDebitAmountAndCommission('2')
    mobileReplenishment.checkReceiverAmount('1')
    mobileReplenishment.checkPaymentCurrency('UAH')
})