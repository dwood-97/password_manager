exports.up = function(knex) {
    return knex.schema.createTable('passwords', table => {
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.string('encrypted_password').notNullable();
      // Add other fields as necessary
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('passwords');
  };
  