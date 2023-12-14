// evenement.model.js

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  nom: {
    type: String,
    required: true,
  },
  dateEcheance: {
    type: String,
    required: true,
  },
  priorite: {
    type: String,
    required: true,
  },
  statut: {
    type: String,
    required: false,
  },
  commentaire: {
    type: String,
    required: false,
  },
  prixBillets: {
    type: Number,
    required: true,
  },
  genreEvenement: {
    type: String,
    required: true,
  },
  artistes: {
    type: [String],
    default: [],
  },
  image: {
    type: String,
    required: false,
  },
  termine: {
    type: Boolean,
    default: false,
  },
});



let Event = mongoose.model('Event', eventSchema, 'events');

module.exports = Event;

