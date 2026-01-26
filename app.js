// Icin nous créos notre application ExpressJs

// j'importe le framewordk Expressjs.
const express = require('express');

// J'initialise une application ExpressJs
const app = express();

app.use((req, res, next) => {
    console.log("bonjour,je suis le serveur!");
    next();
});

app.use((req, res,next) => {
    res.json({ message: "vous êtes bien sur le serveur Ndovoo" });
    next();
});

app.use((req, res) => {
    console.log("je suis dans le serveur!");
    
});

// J'utilise un Middleware 2 pour retourner la réponse au client l'orsq'il fait la localhost:3000.
// La réponse est au format JSON










/*
j'exporte l'application express sous forme de module
Ainsi, l'application app peut être importée dans d'autres fichiers JS.
*/
module.exports = app;
