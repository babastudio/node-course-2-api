// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/Aplikasicoba', (err,db)=> {
    if (err) {
        return console.log('Tidak bisa terhubung ke Server MongoDB');
    }
    console.log('Terhubung ke Server MongoDB');

    // db.collection('coba').insertOne({
    //     text: 'Membuat Sesuatu pada NodeJS',
    //     completed:false
    // }, (err, result)=> {
    //     if (err){
    //         return console.log('tidak bisa memasukkan perintah insert di db collection coba', err);
    //     }

    //     console.log(JSON.stringify(result.ops))
    // });
    
    // memasukkan dokumen baru ke dalam collection user (nama, umur, lokasi)
    // db.collection('user').insertOne({
    //     nama: 'Babastudio',
    //     umur: 15,
    //     lokasi: 'Jakarta'
    // },(err, result)=> {
    //     if (err){
    //         return console.log('tidak bisa masuk ke collection user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
})