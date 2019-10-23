const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//Routing
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req, res) {
    const num1 = Number(req.body.first_number);
    const num2 = Number(req.body.second_number);
    
    res.send(`${num1} + ${num2} = ${num1 + num2}`);
})

app.get('/bmicalculation', function(req, res) {
    res.sendFile(__dirname + "/bmiCalculation.html");
})

app.post('/bmicalculation', function(req, res) {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);
    
    res.send(`Your BMI is: ${weight / (height * height)}`);
})

app.listen(3000, () => {
    console.log('Start server successfully!');
});