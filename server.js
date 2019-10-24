const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// Setting up
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//Routing
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post('/', function(req, res) {
    const crypto = req.body.crypto;
    const fiat = req.body.fiat;

    const url = `https://apiv2.bitcoinaverage.com/indices/global/ticker/${crypto}${fiat}`;
    request(url, function(error, response, body){
        const data = JSON.parse(body);
        const price = data.last;

        res.write("<p>The current date is: " + data.display_timestamp + "</p>");
        res.write(`<h1>The current price of ${crypto} is ${price}${fiat}.</h1>`);
        res.send();
    })
})

app.listen(3000, () => {
    console.log('Start server successfully!');
});