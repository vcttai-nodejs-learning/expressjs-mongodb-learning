const express = require('express');
const app = express();

//Routing
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.listen(3000, () => {
    console.log('Start server successfully!');
});