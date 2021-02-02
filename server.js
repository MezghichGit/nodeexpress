const express = require('express');
const app = express();
app.use(express.json());

app.listen(
    85,
    ()=>{console.log("Serveur Express a l ecoute sur le port 85");}
);


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'monapi';
let db 
MongoClient.connect(url, function(err, client) {
 console.log("Connexion réussi avec Mongo");
 db = client.db(dbName);
});
