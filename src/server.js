const express = require('express');
const server = express();


// Configurando a pasta public para ser o caminho padrao
server.use(express.static('public'))


// Utilizando template engine (permite estrutura de repetição no html)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

// Configurando os caminhos da aplicação (rotas)
// Página inicial
server.get('/', (req, res) => {
  return res.render('index.html', { title: 'Seu marketplace de coleta de resíduos.' } );
});

// Página de criação do ponto de coleta
server.get('/create-point', (req, res) => {
  return res.render('create-point.html');
});

// Página de criação do ponto de coleta
server.get('/search', (req, res) => {
  return res.render('search-results.html');
});

// Ligando o servidor
server.listen(3000);