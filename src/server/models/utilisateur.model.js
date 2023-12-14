// utilisateur.model.js
const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    motDePasse: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    dateInscription: {
        type: Date,
        default: Date.now,
    },
});

let Utilisateur = mongoose.model('Utilisateur', utilisateurSchema, 'users');

module.exports = Utilisateur;
