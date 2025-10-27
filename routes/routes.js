const express = require('express');
const router = express.Router();
//const mainController = require('../controllers/mainController'); // Importa o controller
const mainController2 = require('../controllers/mainController2')

// Jeito novo aprendido em aula 27/10
router.get('/', mainController2.homePage)
router.get('/sobre', mainController2.aboutPage)
router.get('/contato', mainController2.contactPage)


/*
// Rota para a página inicial (/)
router.get('/', mainController.getHomePage);

// Rota para uma segunda página (ex: /sobre)
router.get('/sobre', mainController.getAboutPage);

// Rota para a página contato ( ex /contato)
router.get('/contato', mainController.getContactPage);


// Você pode adicionar mais rotas aqui conforme necessário 
*/

module.exports = router;