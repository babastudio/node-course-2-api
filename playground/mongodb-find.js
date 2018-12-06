// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/Aplikasicoba', (err,db)=> {
    if (err) {
        return console.log('Tidak bisa terhubung ke Server MongoDB');
    }
    console.log('Terhubung ke Server MongoDB');

//     db.collection('coba').find({
//         _id: new ObjectID('5c07a7d3b41d8a70b68c9c07')
// }).toArray().then((docs) => {
//         console.log('coba');
//         console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) => {
//         console.log('Tidak bisa menarik data coba', err);
//     });

db.collection('coba').find().count().then((count) => {
    console.log("coba count: " , count);
}, (err) => {
    console.log('Tidak bisa menarik data coba', err);
});

    // db.close();
});