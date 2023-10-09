module.exports = {
    development: {
      client: 'pg',  // assuming you're using PostgreSQL
      connection: {
        host: '127.0.0.1',
        user: 'your_database_user',
        password: 'your_database_password',
        database: 'your_database_name'
      },
      migrations: {
        directory: './migrations'
      },
      seeds: {
        directory: './seeds'
      }
    }
    // You can also add configurations for 'production', 'staging', etc.
  };
  