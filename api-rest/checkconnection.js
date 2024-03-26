// Méthode pour vérifier la connexion à la base de données
exports.checkConnection = function(callback) {
    // Utilisez la connexion existante
  connection.query('SELECT 1', (err, result) => {
    if (err) {
      console.error('Erreur lors de la vérification de la connexion à la base de données : ', err);
      callback(false);
      return;
    }
    console.log('Connexion à la base de données établie');
    callback(true);
  });
};
