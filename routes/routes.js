const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController'); // Importa o controller

// Rota para a página inicial (/)
router.get('/', mainController.getHomePage);

// Rota para uma segunda página (ex: /sobre)
router.get('/sobre', mainController.getAboutPage);

// Você pode adicionar mais rotas aqui (ex: /contato)

module.exports = router;