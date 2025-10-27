const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController'); // Importa o controller

// Rota para a página inicial (/)
router.get('/', mainController.getHomePage);

// Rota para uma segunda página (ex: /sobre)
router.get('/sobre', mainController.getAboutPage);

// Rota para a página contato ( ex /contato)
router.get('/contato', mainController.getContactPage);


// Você pode adicionar mais rotas aqui conforme necessário

module.exports = router;