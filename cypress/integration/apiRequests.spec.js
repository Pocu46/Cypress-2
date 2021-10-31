it('Example sending the GET request', () => {
    cy.request('https://next.privat24.ua')
        .then((response) => {
            console.log(response)
        })
})

it('Example sending the POST request with expect verification', () => {

    const requestBody = {
        "action": "add",
        "phone": "+380686979712",
        "amount": 50,
        "currency": "UAH",
        "cardCvv": "111",
        "card": "4552331448138217",
        "cardExp": "0526",
        "operator": "Kyivstar Ukraine",
        "operatorId": "602",
        "xref": "a8d282bb0603b53671af8c4059fd7c3c",
        "nameA": "Shayne McConnell",
        "_": 1635670272676
    }

    const headersData = {
        cookie:
            "_ga=GA1.2.1951373851.1611068939; _gid=GA1.2.2008156051.1635669900; pubkey=2442157188ff3e05da777f21a5ce76b6; fp=19; lfp=1/19/2021, 5:09:10 PM; pa=1635669987518.2230.8607835730403588next.privat24.ua0.5085963492706962+3",
    }

    cy.request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: headersData
    }).then((response) => {
        expect(response).to.have.property('status').to.equal(200)
        expect(response.body).to.have.property('status').to.equal('success')
        // expect(response.body.data).to.have.property('amount').to.equal('50.0')

        console.log(response.body);
    });
});

it.only('Example sending the POST request with should verification', () => {

    const requestBody = {
        "action": "add",
        "phone": "+380686979712",
        "amount": 50,
        "currency": "UAH",
        "cardCvv": "111",
        "card": "4552331448138217",
        "cardExp": "0526",
        "operator": "Kyivstar Ukraine",
        "operatorId": "602",
        "xref": "a8d282bb0603b53671af8c4059fd7c3c",
        "nameA": "Shayne McConnell",
        "_": 1635670272676
    }

    const headersData = {
        cookie:
            "_ga=GA1.2.1951373851.1611068939; _gid=GA1.2.2008156051.1635669900; pubkey=2442157188ff3e05da777f21a5ce76b6; fp=19; lfp=1/19/2021, 5:09:10 PM; pa=1635669987518.2230.8607835730403588next.privat24.ua0.5085963492706962+3",
    }

    cy.request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: headersData
    }).its('body').should('contain', {
        status: "success"
    }).its('data').should('contain', {
        status: "ok"
    })
});