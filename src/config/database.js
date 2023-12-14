const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bdd');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion :'));
db.once('open', () => {
  console.log('Connecté à la base de données');
});
