const { onUpdateTrigger } = require('../../../knexfile');

exports.up = async knex => knex.schema.createTable('categories', table => {
    table.increments('id');
    table.text('title').unique().notNullable();
    table.text('slug').unique().notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
}).then(() => knex.raw(onUpdateTrigger('categories')));

exports.down = async knex => knex.schema.dropTable('categories');
