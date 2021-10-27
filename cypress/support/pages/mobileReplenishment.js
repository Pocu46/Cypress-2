export class MobileReplenishment {
    typePhoneNumber(phoneNumber) {
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    typeCardOwnerName(name, surname) {
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(name)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(surname)
    }

    checkDebitCard(debitCard) {
        cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }

    checkDebitAmount(debitAmount) {
        cy.get('[data-qa-node="amount"]')
            .should('have.text', debitAmount)
    }

    checkDebitAmountAndCommission(debitCommission) {
        cy.get('[data-qa-node="commission"]')
            .eq(1)
            .should('have.text', debitCommission)
    }

    checkReceiverAmount(receiverAmount) {
        cy.get('.amount')
            .find('span')
            .should('have.text', receiverAmount)
    }

    checkPaymentCurrency(paymentCurrency) {
        cy.get('.amount')
            .find('small')
            .should('contain.text', paymentCurrency)
    }

    checkDebitAmountCurrency(debitAmountCurrency) {
        cy.get('[data-qa-node="currency"]')
            .eq(0)
            .should('contain.text', debitAmountCurrency)
    }
}

export const mobileReplenishment = new MobileReplenishment()