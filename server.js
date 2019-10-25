const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Mongoose
const dbUrl = 'mongodb://localhost:27017/mongoose_practice';
mongoose.connect(dbUrl, {useUnifiedTopology: true, useNewUrlParser: true});

//Routing
app.get('/', function(req, res) {
    res.send("<h1>Hello world!</h1>");
})

app.get('/create_a_document', function(req, res) {
    const fruitSchema = new mongoose.Schema({
        name: String,
        rating: Number,
        review: String
    });
    
    const Fruit = mongoose.model('Fruit', fruitSchema); //mongoose sẽ tự động dùng "fruits" cho tên của Collection trong DB
    const anApple = new Fruit({
        name: "Apple",
        rating: 7,
        review: "Very delicious"
    });
    
    anApple.save();

    res.send("Created a fruit");
})

app.listen(3000, () => {
    console.log('Start server successfully!');
});