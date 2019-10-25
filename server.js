const path = require('path');
const express = require('express');
const app = express();
// const mongodbFunctions = require("../mongodb-function.js");

//--  MongoDB
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'hello_mongodb';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  insertDocuments(db, function() {
    client.close();
  });

  client.close();
});

//--

//Routing
app.get('/', function(req, res) {
    res.send("<h1>Hello world!</h1>");
})

app.listen(3000, () => {
    console.log('Start server successfully!');
});


///
const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');

    // Insert some documents
    collection.insertMany([
        {name : "apple", price: 1.4}, 
        {name : "banana", price: 1.5},  
        {name : "orange", price: 2.0}
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}