import {mobileReplenishment} from "../support/pages/mobileReplenishment";

it('Replenishment of Ukranian mobile phone number', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')

    mobileReplenishment.typePhoneNumber('686979712')
    mobileReplenishment.typeAmount('1')
    mobileReplenishment.typeDebitCardData('4552331448138217', '0524', '111')
    cy.wait(3000)
    mobileReplenishment.typeCardOwnerName('Valentino', 'Rossi')
    cy.wait(3000)
    mobileReplenishment.submitPayment()
    mobileReplenishment.checkDebitCard('4552 **** **** 8217')
    mobileReplenishment.checkDebitAmount('1')
    mobileReplenishment.checkDebitAmountCurrency('UAH')
    mobileReplenishment.checkDebitAmountAndCommission('2')
    mobileReplenishment.checkReceiverAmount('1')
    mobileReplenishment.checkPaymentCurrency('UAH')
})