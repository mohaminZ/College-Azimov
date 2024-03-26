// Méthode pour afficher la page d'accueil avec un message indiquant si la base de données est chargée

const db = require('../models/database');


exports.acceuil = (req, res) => {
    // Vérifier la connexion à la base de données
    db.checkConnection((connected) => {
      let message = connected ? "La base de données est chargée !" : "Erreur lors de la connexion à la base de données.";
      res.render('acceuil', { message: message });
    });
  };
  
