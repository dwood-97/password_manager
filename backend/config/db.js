const mongoose = require('mongoose');

mongoose.connect('YOUR_DATABASE_URL', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Failed to connect to the database', err));
