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

it.only('scrollTo', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .contains('Services')
        .wait(2000)
        .trigger('mouseover')
})