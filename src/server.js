const express = require('express');
const server = express();

// Pegando banco de dados
const db = require('./database/db');

// Configurando a pasta public para ser o caminho padrao
server.use(express.static('public'))

// Habilitando o express para usar o req.body na aplicação
server.use(express.urlencoded({ extended: true }))

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

server.post('/savepoint', (req, res) => {
  
  // Pegando os dados enviados pelo formulário
  const params = req.body;
  console.log(params)

  // Inserindo dados na tabela
  const query = `
    INSERT INTO places (
      name,
      image,
      address,
      address2,
      state,
      city,
      items
    ) VALUES (?, ?, ?, ?, ?, ?, ?);
  `;

  const values = [
    params.name,
    params.image,
    params.address,
    params.address2,
    params.uf,
    params.city,
    params.items,
  ];

  function afterInsertData(err) {
    if (err) {
      console.log(err);
      return res.render('create-point.html', { saved: 'erro' });
    }
    
    console.log("Cadastrado com sucesso");
    console.log(this);

    return res.render('create-point.html', { saved: 'cadastrado' });
  }

  db.run(query, values, afterInsertData);

});

// Página de criação do ponto de coleta
server.get('/search', (req, res) => {

  const search = req.query.search;

  if (search === "") {
    return res.render('search-results.html', { total: 0 });
  }
  // Pegando os dados do banco
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
    if (err) {
      return console.log(err);
    }

    const total = rows.length;

    // Mostrar a página HTML com os dados do banco de dados
    return res.render('search-results.html', { places: rows, total });
  });
});

// Ligando o servidor
server.listen(3000);