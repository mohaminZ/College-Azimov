const express = require('express');
const app = express();
const path = require('path');
const authController = require('./controllers/AuthentificationController');
const db = require('./models/database');

// Définir le répertoire des vues
app.set('views', path.join(__dirname, 'views'));

// Définir le moteur de modèle EJS
app.set('view engine', 'ejs');

// Importer le contrôleur principal
const mainController = require('./controllers/mainController');

// Route pour la page d'accueil
app.get('/', mainController.acceuil);

// Démarrer le serveur sur le port 3000
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});

// Vérifier la connexion à la base de données
db.checkConnection((connected) => {
  if (connected) {
    console.log('La base de données est chargée !');
  } else {
    console.log('Erreur lors de la connexion à la base de données.');
  }
});

// Définir la route pour afficher la page de connexion
app.get('/login', authController.loginPage);
// Route pour la page d'accueil
app.get('/acceuil', mainController.acceuil);
