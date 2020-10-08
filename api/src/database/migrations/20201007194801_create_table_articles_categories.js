const { onUpdateTrigger } = require('../../../knexfile');

exports.up = async knex => knex.schema.createTable('articles_categories', table => {
    table.increments('id');

    table.integer('category_id')
        .references('categories.id')
        .notNullable()
        .onDelete('CASCADE')

    table.integer('article_id')
        .references('articles.id')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
}).then(() => knex.raw(onUpdateTrigger('articles_categories')));

exports.down = async knex => knex.schema.dropTable('articles_categories');
