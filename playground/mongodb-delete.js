// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/Aplikasicoba', (err,db)=> {
    if (err) {
        return console.log('Tidak bisa terhubung ke Server MongoDB');
    }
    console.log('Terhubung ke Server MongoDB');

    //hapus banyak field
    // db.collection('coba').deleteMany({text: 'Babastudio Keren'}).then((result) => {
    //     console.log(result);
    // });
    
    //hapus satu field
    // db.collection('coba').deleteOne({text: 'Babastudio Keren'}).then((result) => {
    //     console.log(result);
    // });

    // //find satu field dan hapus
    // db.collection('coba').findOneAndDelete({completed : true}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('user').deleteMany({nama: "Babastudio"});

    db.collection('user').findOneAndDelete({_id: new ObjectID("5c07a0a6eb63f82eac2d05b1")
}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
});
       // db.close();
});