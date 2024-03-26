const mysql = require('mysql');

// Créer une connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'asimov'
});

// Méthode pour vérifier la connexion à la base de données
exports.checkConnection = function(callback) {
  connection.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données : ', err);
      callback(false);
      return;
    }
    console.log('Connecté à la base de données MySQL');
    callback(true);
  });
};
