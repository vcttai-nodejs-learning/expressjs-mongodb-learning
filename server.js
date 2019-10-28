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
        name: {
            type: String,
            required: [true, 'Name is required!']
        },
        rating: {
            type: Number,
            min: 1,
            max: 10
        },
        review: String
    });
    
    const Fruit = mongoose.model('Fruit', fruitSchema); //mongoose sẽ tự động dùng "fruits" cho tên của Collection trong DB
    const anApple = new Fruit({
        name: "Orange",
        rating: 7,
        review: "Very delicious"
    });
    
    // Or use: anApple.save();
    Fruit.insertMany([anApple], function(err){
        if(err){
            res.send(err);
        }

        res.send("Created a fruit");
    });
})

app.get('/get_documents', function(req, res){
    const fruitSchema = new mongoose.Schema({
        name: String,
        rating: Number,
        review: String
    });
    const Fruit = mongoose.model('Fruit', fruitSchema);
    
    Fruit.find(function(err, fruits){
        if(err){
            console.log(err);
            return;
        }

        mongoose.connection.close();
        res.send(JSON.stringify(fruits));
    });
});

app.listen(3000, () => {
    console.log('Start server successfully!');
});