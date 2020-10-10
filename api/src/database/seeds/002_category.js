exports.seed = knex => 
  knex('categories').del()
    .then(() => knex('categories').insert([
        { id: 1, title: 'Arduino', slug: 'Arduino' },
        { id: 2, title: 'NodeMCU', slug: 'NodeMCU' }
    ]));