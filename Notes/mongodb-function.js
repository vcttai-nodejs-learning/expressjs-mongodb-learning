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

module.exports = {
    insertDocuments: insertDocuments
}