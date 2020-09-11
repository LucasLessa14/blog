exports.seed = knex => 
  knex('users').del()
    .then(function () {
      return knex('users').insert([
        { username: 'Lucas Lessa', email: 'lucaslessa@hotmail.com', password: '1234', role: 1},
        { username: 'Thiago Lessa', email: 'thiagolessa@hotmail.com', password: '1234', role: 0},
        { username: 'Matheus Lessa', email: 'matheuslessa@hotmail.com', password: '1234', role: 0}
      ]);
    });

