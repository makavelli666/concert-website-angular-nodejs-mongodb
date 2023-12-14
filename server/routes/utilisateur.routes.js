// utilisateur.routes.js
const express = require('express');
const router = express.Router();
const Utilisateur = require('../models/utilisateur.model');
const User = require("../models/utilisateur.model");


// Définir une route GET pour récupérer tous les événements
router.get('/', async (req, res) => {
  try {
    // Récupérer tous les événements depuis la base de données
    const utilisateurs = await User.find();

    // Renvoyer les événements au format JSON
    res.json(utilisateurs);
  } catch (error) {
    // Gérer les erreurs, par exemple renvoyer une réponse d'erreur avec le code 500 (Internal Server Error)
    console.error('Erreur lors de la récupération des événements :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des événements' });
  }
});

router.get('/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const utilisateur = await User.findById(userId);

    if (!utilisateur) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    res.json(utilisateur);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'utilisateur :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
  }
});


router.post('/', async (req, res) => {
  try {
    const { nom, prenom, email, motDePasse } = req.body;

    // Check if the role is provided in the request body
    const role = req.body.role || 'user';

    // Create a new user based on the role
    let nouvelUtilisateur = new Utilisateur({ nom, prenom, email, motDePasse, role });

    const utilisateurCree = await nouvelUtilisateur.save();
    res.status(201).json(utilisateurCree);
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur :', error);
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
});


// Route POST pour la connexion de l'utilisateur
router.post('/:id', async (req, res) => {
    try {
      const { email, motDePasse } = req.body;
      const utilisateur = await Utilisateur.findOne({ email, motDePasse });

      if (utilisateur) {
        // Connexion réussie
        const role = utilisateur.role; // Récupérer le rôle de l'utilisateur

        res.status(200).json({ message: 'Connexion réussie', role, utilisateur });
      } else {
        // Identifiants invalides
        res.status(401).json({ error: 'Identifiants invalides' });
      }
    } catch (error) {
      console.error('Erreur lors de la connexion de l\'utilisateur :', error);
      res.status(500).json({ error: 'Erreur lors de la connexion de l\'utilisateur' });
    }
  });


module.exports = router;
