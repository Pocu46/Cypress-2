import {transfers} from "../support/pages/transfers";

it('Money transfer between foreign cards', () => {
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')

    transfers.typeDebitCardData('4552331448138217', '0524', '111')
    cy.wait(3000)
    transfers.typeDebitNameAndSurname('Shayne', 'McConnell')
    transfers.typeReceiverCard('5309233034765085')
    transfers.typeReceiverNameAndSurname('Juliana', 'Janssen')
    transfers.typeAmount('300')
    transfers.typeComment('Cypress test')
    cy.wait(2000)
    transfers.submitPayment()
    transfers.checkDebitAndReceiverCards('4552 3314 4813 8217', '5309 2330 3476 5085')
    transfers.checkDebitAmountAndTotalAmount('300 UAH', '384.04')
    transfers.checkDebitCommission('84.04 UAH')
    transfers.checkComment('Cypress test')
})