const express = require('express');
const app = express();

//Routing
app.get('/', function(req, res) {
    res.send("<h1>Hello world!</h1>");
})

app.get('/about', function(req, res) {
    res.send("Contact me at: vcttai@gmail.com");
})

app.listen(3000, () => {
    console.log('Start server successfully!');
});