// Este é o objeto home page 'index'
const homePage = (req, res) => {
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
}
// Este é o objeto Página 'Sobre'
const aboutPage = (req, res) => {
    // Dados que você quer enviar para a página
    const data = {
        pageTitle: 'Sobre o Projeto', // Titulo página Sobre
        nomeUsuario: 'Rodrigo - Sobre', // Nome do usuário página Sobre
        mostrarMensagem: false // <-- Chave para o IF/ELSE
    };
        
    // Renderiza o arquivo 'sobre.hbs'
    res.render('sobre', data);
}
// Este é o objeto Página 'Contato'
const contactPage = (req, res) => {
    // Dados que você quer enviar para a página
    const data = {
        pageTitle: 'Página de Contato', // Titulo página contato
        nomeUsuario: 'Rodrigo - Contato', // Nome de usuário da página contato
        email: 'digdao@gmail.com', // E-Mail
        telefone: '(17) 92002-5328', // Telefone
    };
    // Renderiza o arquivo 'contato.hbs'
    res.render('contato', data);
}

module.exports = { homePage, aboutPage, contactPage}