const path = require('path');
const express = require('express');
const app = express();
const insertDocuments = require("./mongodb-function.js");

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
