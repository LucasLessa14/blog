exports.seed = knex => 
  knex('articles').del()
    .then(function () {
      return knex('articles').insert([
        { title: 'Personagem mais forte de DBZ', slug: 'Personagem-mais-forte-de-DBZ', body: 'O que é Lorem Ipsum ...'},
        { title: 'Personagem mais legal de DBZ', slug: 'Personagem-mais-legal-de-DBZ', body: 'O que é Lorem Ipsum ...'},
        { title: 'Personagem mais boco de DBZ', slug: 'Personagem-mais-boco-de-DBZ', body: 'O que é Lorem Ipsum ...'}
      ]);
    });

