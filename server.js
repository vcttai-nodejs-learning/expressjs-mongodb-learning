const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

//Routing
app.get('/', function(req, res) {
    res.send("<h1>Hello world!</h1>");
})

app.get('/signin', function(req, res) {
    res.sendFile(__dirname + "/signin.html");
})

app.listen(3000, () => {
    console.log('Start server successfully!');
});