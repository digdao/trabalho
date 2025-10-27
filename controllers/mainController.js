// Este objeto vai conter todas as funções de lógica
const mainController = {

    // Função para a Home Page
    getHomePage: (req, res) => {
        // Dados que você quer enviar para a página
        const data = {
            pageTitle: 'Trabalho do Vandrei',
            nomeUsuario: 'Rodrigo - Home',
            mostrarMensagem: true, // <-- Chave para o IF/ELSE
            // Lista de itens para um loop (bônus)
            itens: [
                { nome: 'Item 1', completo: true },
                { nome: 'Item 2', completo: false },
                { nome: 'Item 3', completo: true }
            ]
        };
        
        // Renderiza o arquivo 'index.hbs' e passa os 'dados' para ele
        res.render('index', data);
    },

    // Função para a Página "Sobre"
    getAboutPage: (req, res) => {
        const data = {
            pageTitle: 'Sobre o Projeto',
            nomeUsuario: 'Rodrigo - Sobre',
            mostrarMensagem: false // <-- Chave para o IF/ELSE
        };
        
        // Renderiza o arquivo 'sobre.hbs'
        res.render('sobre', data);
    },

    getContactPage: (req, res) => {
        const data = {
            pageTitle: 'Página de Contato',
            nomeUsuario: 'Rodrigo - Contato',
            email: 'digdao@gmail.com',
            telefone: '(17) 92002-5328',
        };
        // Renderiza o arquivo 'contato.hbs'
        res.render('contato', data);

    }
};

module.exports = mainController;