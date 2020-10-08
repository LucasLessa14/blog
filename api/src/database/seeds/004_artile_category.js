
exports.seed = knex => 
knex('articles_categories').del()
  .then(() => knex('articles_categories').insert([
      { id: 1, category_id: 1, article_id: 1 },
      { id: 2, category_id: 1, article_id: 2 },
      { id: 3, category_id: 2, article_id: 2 },
  ]));