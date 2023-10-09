exports.seed = function(knex) {
    return knex('passwords').del()
      .then(function() {
        return knex('passwords').insert([
          {user_id: 1, encrypted_password: 'encrypted_password_here'},
          // Add other passwords as necessary
        ]);
      });
  };
  