exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('username').unique().notNullable();
      table.string('password').notNullable();  // This should be a hashed password
      // Add other fields as necessary
      table.timestamps(true, true);  // created_at and updated_at
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  