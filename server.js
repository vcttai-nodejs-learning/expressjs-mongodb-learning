const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//Routing
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req, res) {
    const num1 = parseInt(req.body.first_number);
    const num2 = parseInt(req.body.second_number);
    
    res.send(`${num1} + ${num2} = ${num1 + num2}`);
})

app.listen(3000, () => {
    console.log('Start server successfully!');
});