// 1. Importar os módulos
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const routes = require('./routes/routes'); // Importando seu arquivo de rotas

// 2. Inicializar o Express
const app = express();
const port = 3000;

// 3. Configurar o Handlebars como view engine
app.engine('hbs', engine({
    extname: '.hbs', // Define a extensão dos arquivos como .hbs
    defaultLayout: 'main' // Define o layout padrão
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); // Define o caminho da pasta 'views'

// 4. Configurar a pasta 'public' para arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// 5. Usar as rotas definidas no arquivo 'routes.js'
app.use('/', routes);

// 6. Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});