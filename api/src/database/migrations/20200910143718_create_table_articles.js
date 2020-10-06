const { onUpdateTrigger } = require('../../../knexfile');

exports.up = async knex => knex.schema.createTable('articles', table => {
    table.increments('id');
    table.text('title').unique().notNullable();
    table.text('body').notNullable();
    table.text('slug').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
}).then(() => knex.raw(onUpdateTrigger('articles')));

exports.down = async knex => knex.schema.dropTable('articles');
