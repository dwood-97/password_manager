exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function() {
        // Inserts seed entries
        return knex('users').insert([
          {username: 'john_doe', password: 'hashed_password_here'},
          // Add other users as necessary
        ]);
      });
  };
  