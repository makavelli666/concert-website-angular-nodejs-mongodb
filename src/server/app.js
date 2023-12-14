//app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes/evenement.routes');
const db = require('../config/database');


const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

// Middleware CORS
app.use(cors());

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Routes statiques
app.use(express.static('app'));
app.use(express.static('node_modules'));

app.get('/', (req, res) => {
  res.send("it is working from web");
});

// Utilisation des routes "/events"
const events = require('./routes/evenement.routes');
app.use('/events', events);

const users = require('./routes/utilisateur.routes');
app.use('/users', users);


// Gestionnaire d'erreurs global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur interne du serveur' });
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
