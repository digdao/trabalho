// Este objeto vai conter todas as funções de lógica
const mainController = {

    // Função para a Home Page
    getHomePage: (req, res) => {
        // Dados que você quer enviar para a página
        const data = {
            pageTitle: 'Minha Página',
            nomeUsuario: 'Visitante',
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
            nomeUsuario: 'Admin',
            mostrarMensagem: false // <-- Chave para o IF/ELSE
        };
        
        // Renderiza o arquivo 'sobre.hbs'
        res.render('sobre', data);
    }
};

module.exports = mainController;