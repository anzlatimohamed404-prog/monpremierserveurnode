// Icin nous créos notre application ExpressJs

// j'importe le framewordk Expressjs.
const express = require('express');

// J'initialise une application ExpressJs
const app = express();

app.use((req, res, next) => {
    console.log("bonjour,je suis le serveur!");
    next();
});

// app.use((req, res,next) => {
//     res.json({ message: "vous êtes bien sur le serveur Ndovoo" });
//     next();
// });

app.use((req,res,next) => {
    console.log("Encore, je suis le serveur!");
    next();
});



app.use((req, res,next) => {
    console.log("je suis dans le serveur!");
    next();
    
});

// je déssine mes Routes avec Expressa

app.use((req,res) => {
    console.log("je passe dans la route /api/fruit!");
    // mon fruit
    const fruit = [
        {
            id: 1,
            nom:"pomme",
            description: "fruit saisonier riche en vitamine C",
            prix: 3
        }
    ];

    // En terme de réponse, je renvoie le tableau de fruit

    res.json(fruit);
});

/*
j'exporte l'application express sous forme de module
Ainsi, l'application app peut être importée dans d'autres fichiers JS.
*/
module.exports = app;
