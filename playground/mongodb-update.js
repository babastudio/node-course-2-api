// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/Aplikasicoba', (err,db)=> {
    if (err) {
        return console.log('Tidak bisa terhubung ke Server MongoDB');
    }
    console.log('Terhubung ke Server MongoDB');

    db.collection('coba').findOneAndUpdate({
        _id: new ObjectID ('5c078deb70959e2700433ef4')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) =>{
        console.log(result);
    });
       // db.close();
});