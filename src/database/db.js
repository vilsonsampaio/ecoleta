// Importando dependência do SQLite 3
const sqlite3 = require('sqlite3').verbose();

// Criando objeto que fará operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db'); 

module.exports = db;

// Utilizando o objeto de banco de dados para as operações
// db.serialize(() => {
  
//   // // Criando uma tabela
//   // db.run(`
//   //   CREATE TABLE IF NOT EXISTS places (
//   //     id INTEGER PRIMARY KEY AUTOINCREMENT,
//   //     name TEXT,
//   //     image TEXT,
//   //     address TEXT,
//   //     address2 TEXT,
//   //     state TEXT,
//   //     city TEXT,
//   //     items TEXT 
//   //   );
//   // `);

  
//   // // Inserindo dados na tabela
//   // const query = `
//   //   INSERT INTO places (
//   //     name,
//   //     image,
//   //     address,
//   //     address2,
//   //     state,
//   //     city,
//   //     items
//   //   ) VALUES (?, ?, ?, ?, ?, ?, ?);
//   // `;

//   // const values = [
//   //   "Papersider",
//   //   "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//   //   "Guilherme Gemballa, Jardim América",
//   //   "Nº 260",
//   //   "SC",
//   //   "Rio do Sul",
//   //   "Resíduos Eletrônicos, Lâmpadas"
//   // ];

//   // function afterInsertData(err) {
//   //   if (err) {
//   //     return console.log(err);
//   //   }
    
//   //   console.log("Cadastrado com sucesso");
//   //   console.log(this);
//   // }

//   // db.run(query, values, afterInsertData);


//   // // Consultando dados da tabela
//   // db.all(`SELECT * FROM places`, function(err, rows) {
//   //   if (err) {
//   //     return console.log(err);
//   //   }

//   //   console.log("Aqui estão seus registros:");
//   //   console.log(rows);
//   // });


//   // // Deletar dados na tabela
//   // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
//   //   if (err) {
//   //     return console.log(err);
//   //   }

//   //   console.log("Registro deletado com sucesso");
//   // });
// }); 