it('Example sending the GET request', () => {
    cy.request('https://next.privat24.ua')
        .then((response) => {
            console.log(response)
        })
})

it.only('Example sending the POST request', () => {

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
        "xref": "28cf553d5ee6b1791d1b709494cb9bd8",
        "nameA": "Shayne McConnell",
        "_": 1635670272676
    }

    const headersData = {
        cookie:
            "_ga=GA1.2.1951373851.1611068939; " +
            "_gid=GA1.2.2008156051.1635669900; " +
            "pubkey=5f29ca590ef625f556168b8c6a65e0a8; " +
            "fp=16; lfp=1/19/2021, 5:09:10 PM; " +
            "pa=1635669987518.2230.8607835730403588next.privat24.ua0.5085963492706962+1; " +
            "_gat_gtag_UA_29683426_11=1",
    }

    cy.request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: headersData
    }).then((response) => {
        console.log(response.body);
    });
});