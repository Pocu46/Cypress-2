// it('Search elements by ID', () => {
//     cy.visit('https://facebook.com')
//     cy.get('#email')
// })
//
// it('Search elements by Class', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
//     cy.get('.ds-input')
// })
//
// it('Search elements by Tag', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
//     cy.get('nav')
// })
//
// it('Search elements by Tag value', () => {
//     cy.visit('https://facebook.com')
//     cy.get('[name="pass"]')
// })
//
// it('Search elements by Different Tag', () => {
//     cy.visit('https://facebook.com')
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// })
//
// it('Search elements by Different Types', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
//     cy.get('button[type="button"][title="close banner"]')
// })
//
// it.only('Search elements by Contains Name', () => {
//     cy.visit('https://next.privat24.ua/')
//     cy.get('*[class^="card"]')
// })

it('Using Get with Find and Eq', () => {
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq('0')
})

it('Using Get with Find and Eq', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    cy.get('aside').find('div').find('ol').find('li').find('a').eq(0)
})

it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Sign in')
})

it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('div', 'Sign in')
})

it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('SIGN IN', {matchCase: false})
})

it('', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('footer').contains('Go to old version')
})

it('Should', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
        .type(100)
        .should('have.value', 100)
        .and('be.visible')
})

it('Expect', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
        .type(100)
        .then(input => {
            expect(input).to.have.value(100)
        })
})

it('Check default value for Deposits', () => {
    cy.visit('https://next.privat24.ua/deposit/open?lang=en')
    cy.get('[data-qa-value="UAH"]')
        .should('be.checked')
})

it('Check is visible Archive link', () => {
    cy.visit('https://next.privat24.ua/deposit/open?lang=en')
    cy.contains('Мої депозити')
        .trigger('mouseover')
        .get('#archiveDeposits')
        .should('be.visible')
})

it('Check is correct attr in button', () => {
    cy.visit('https://next.privat24.ua?lang=en')
    cy.contains('Show cards')
        .should('have.attr', 'type')
        .and('match', /button/)
})

it('Check is correct URL', () => {
    cy.visit('https://next.privat24.ua?lang=en')
    cy.url()
        .should('eq', 'https://next.privat24.ua/?lang=en')
})

it('type', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type('112233344')
})

it('focus', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .focus()
})

it('blur', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .focus()
        .blur()
})

it('clear', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .type(999)
        .wait(2000)
        .clear()
})

it('submit', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('form[method="post"]')
        .submit()
})

it('submit', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-value="manual"]')
        .click()
})

it('rightclick', () => {
    cy.visit('https://example.cypress.io/commands/actions')
        .contains('Right click to edit')
        .rightclick()
})

it('dblclick', () => {
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.Examples.html')
        .contains('My Card')
        .wait(2000)
        .dblclick()
})

it('check', () => {
    cy.visit('https://www.facebook.com/r.php')
        .get('input[value="2"]')
        .check()
})

it('uncheck', () => {
    cy.visit('https://en.privatbank.ua/')
        .get('#switch-input')
        .check({force: true})
        .wait(2000)
        .uncheck({force: true})
})

it('select', () => {
    cy.visit('https://www.facebook.com/r.php?locale=en_US')
        .get('#month')
        .select('Feb')
        .get('#day')
        .select('12')
        .get('#year')
        .select('1991')
})

it('scrollIntoView', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="lang"]')
        .wait(2000)
        .scrollIntoView()
})

it('scrollTo', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .wait(2000)
    cy.scrollTo(0, 500)
})

it('scrollTo', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .contains('Services')
        .wait(2000)
        .trigger('mouseover')
})

it('Replenishment of Ukranian mobile phone number', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type('686979712')
        .get('[data-qa-node="amount"]')
        .type('1')
        .get('[data-qa-node="numberdebitSource"]')
        .type('4552331448138217')
        .get('[data-qa-node="expiredebitSource"]')
        .type('0524')
        .get('[data-qa-node="cvvdebitSource"]')
        .type('111')
        .wait(3000)
        .get('[data-qa-node="firstNamedebitSource"]')
        .type('Valentino')
        .get('[data-qa-node="lastNamedebitSource"]')
        .type('Rossi')
        .wait(3000)
        .get('[data-qa-node="submit"]')
        .click()
        .get('[data-qa-node="card"]')
        .should('have.text', '4552 **** **** 8217')
        .get('[data-qa-node="amount"]')
        .should('have.text', '1')
        .get('[data-qa-node="currency"]')
        .eq(0)
        .should('contain.text', 'UAH')
        .get('[data-qa-node="commission"]')
        .eq(1)
        .should('have.text', '2')
        .get('[data-qa-node="commission-currency"]')
        .should('contain.text', 'UAH')
    })

it.only('Money transfer between forign cards', () => {
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')
        .get('[data-qa-node="numberdebitSource"]')
        .type('4552331448138217')
        .get('[data-qa-node="expiredebitSource"]')
        .type('0524')
        .get('[data-qa-node="cvvdebitSource"]')
        .type('111')
        .wait(3000)
        .get('[data-qa-node="firstNamedebitSource"]')
        .type('Shayne')
        .get('[data-qa-node="lastNamedebitSource"]')
        .type('McConnell')
        .get('[data-qa-node="numberreceiver"]')
        .type('5309233034765085')
        .get('[data-qa-node="firstNamereceiver"]')
        .type('Juliana')
        .get('[data-qa-node="lastNamereceiver"]')
        .type('Janssen')
        .get('[data-qa-node="amount"]')
        .type('300')
        .get('[data-qa-node="toggle-comment"]')
        .click()
        .get('[data-qa-node="comment"]')
        .type('Cypress test')
        .get('button[type="submit"]')
        .click()
        .get('[data-qa-node="payer-card"]')
        .should('have.text', '* 8217')
        .get('[data-qa-node="receiver-card"]')
        .should('have.text', '* 5085')
        .get('[data-qa-node="payer-amount"]')
        .should('have.text', '300 UAH')
        .get('[data-qa-node="payer-currency"]')
        .should('have.text', '89.10 UAH')
        .get('[data-qa-node="total"]')
        .find('span')
        .should('contain.text', '389.10')
        .get('[data-qa-node="total"]')
        .find('small')
        .should('contain.text', 'UAH')
        .get('[data-qa-node="comment"]')
        .should('have.text', 'Cypress test')
})