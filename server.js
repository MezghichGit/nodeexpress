const express = require('express');
const app = express();
app.use(express.json());


// mettre le serveur à l'écoute(en marche) sur le port 85
app.listen(
    85,
    ()=>{console.log("Serveur Express a l ecoute sur le port 85");}
);

// connexion de notre serveur à la base mongo
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'monapi';


let db 


MongoClient.connect(url, function(err, client) {
 console.log("Connexion réussi avec Mongo");
 db = client.db(dbName);
});

// comment
app.get('/equipes', (req,res) => {
      db.collection('equipe').find({}).toArray(function(err, docs) {
          if (err) {
              console.log(err)
              throw err
          }
          res.status(200).json(docs)
        }) 
    })
    

    app.get('/equipes/:id', async (req,res) => {
          const id = parseInt(req.params.id)
          try {
              const docs = await db.collection('equipe').find({id}).toArray()
              res.status(200).json(docs)
          } catch (err) {
              console.log(err)
              throw err
          }
        })
        
        app.post('/equipes', async (req,res) => {
              try {
                  const equipeData = req.body
                  const equipe = await db.collection('equipe').insertOne(equipeData)
                  res.status(200).json(equipe)
              } catch (err) {
                  console.log(err)
                  throw err
              }
            })
            