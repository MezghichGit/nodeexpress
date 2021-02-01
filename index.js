const express = require('express');
const app = express();

app.use(express.json());

app.listen(
    85,
    ()=>{console.log("Serveur Express a l ecoute sur le port 85");}
);

const equipes = require('./equipes.json');

app.get('/equipes',(req,res)=>{
    
    //res.send("Liste des équipes")
    res.status(200).json(equipes);

});


// code de récupération d'une seule équipe
app.get('/equipe/:id',(req,res)=>{
    
    const num = parseInt(req.params.id) // on récupère le id des paramètres de la requette

    const team = equipes.find( element => {return element.id === num}); // on cherche l'équipe qui a le même id que num

    res.status(200).json(team);

});

// code d'ajout d'une nouvelle équipe

app.post('/equipes',(req,res)=>{

    equipes.push(req.body);
    res.status(200).json(equipes);

});


// code de mise à jour d'une équipe
app.put('/equipes/:id',(req,res)=>{
    
    const num = parseInt(req.params.id) // on récupère le id des paramètres de la requette

    const team = equipes.find( element => {return element.id === num}); // on cherche l'équipe qui a le même id que num

    team.name = req.body.name;
    team.country = req.body.country;

    res.status(200).json(team);

});

// code de suppression d'une équipe
app.delete('/equipes/:id',(req,res)=>{
    
    const num = parseInt(req.params.id) // on récupère le id des paramètres de la requette
    const team = equipes.find( element => {return element.id === num}); // on cherche l'équipe qui a le même id que num
    equipes.splice(equipes.indexOf(team),1);
    res.status(200).json(equipes);

});


