const express = require('express');
const app = express();

app.use(express.json());

app.listen(
    85,
    ()=>{console.log("Serveur Express a l ecoute sur le port 85");}
);


// les sources de données.
const equipes = require('./equipes.json');
const joueurs = require('./joueurs.json');

// Partie 1 : CRUD de l'entité Joueur
app.get('/joueurs',(req,res)=>{
    
    //res.send("Liste des équipes")
    res.status(200).json(joueurs);

});


app.get('/joueurs/:id',(req,res)=>{
    
    const num = parseInt(req.params.id) // on récupère le id des paramètres de la requette

    const player = joueurs.find( element => {return element.id === num}); // on cherche l'équipe qui a le même id que num

    res.status(200).json(player);

});

// code d'ajout d'une nouvelle équipe

app.post('/joueurs',(req,res)=>{

    joueurs.push(req.body);
    res.status(200).json(joueurs);

});


app.put('/joueurs/:id',(req,res)=>{
    
    const num = parseInt(req.params.id) // on récupère le id des paramètres de la requette

    const player = joueurs.find( element => {return element.id === num}); // on cherche l'équipe qui a le même id que num

    player.idEquipe = req.body.idEquipe;
    player.nom = req.body.nom;
    player.numero = req.body.numero;
    player.poste = req.body.poste;
    res.status(200).json(player);

});


app.delete('/joueurs/:id',(req,res)=>{
    
    const num = parseInt(req.params.id) // on récupère le id des paramètres de la requette
    const player = joueurs.find( element => {return element.id === num}); // on cherche l'équipe qui a le même id que num
    joueurs.splice(joueurs.indexOf(player),1);
    res.status(200).json(joueurs);

});

// Fin partie 1


//Partie 2 
app.get('/joueurs/equipe/:idE',(req,res)=>{
    
    const ide = parseInt(req.params.idE) // on récupère le id des paramètres de la requette

    const players = joueurs.filter(element => {return element.idEquipe === ide}); // on cherche le joueur qui a le même ide que num

    res.status(200).json(players);

});

// Question : Déterminer une requette permettant de retourner le joueur num x de l'équipe numéro y


app.get('/joueurs/:idE/:num',(req,res)=>{
    console.log("87");
    
    const ide = parseInt(req.params.idE) // on récupère l'id de l'équipe

    const numJ = parseInt(req.params.num)  // on récupère l'id du joueur

    const player = joueurs.find(element => {return element.idEquipe === ide && element.numero === numJ}); // on cherche le joueur qui a le même ide que num

    res.status(200).json(player);

});

//Fin partie 2


// Partie 3

app.get('/joueur/:idj/equipe',(req,res)=>{
    //console.log("105");
    const idj = parseInt(req.params.idj) // on récupère le id des paramètres de la requette

    const player = joueurs.find(element => {return element.id === idj}); 

    const equipe = equipes.find(team => {return team.id === player.idEquipe}); 
    res.status(200).json(equipe);

});

//Fin partie 3

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


//Exercice 1:


