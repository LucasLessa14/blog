exports.up = async knex => knex.schema.createTable('users', table => {
    table.increments('id');
    table.text('username').unique().notNullable();
    table.text('email').unique().notNullable();
    table.text('password').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = async knex => knex.schema.dropTable('users');
