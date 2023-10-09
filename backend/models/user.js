// Assuming you're using mongoose
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String, // Ensure this is hashed!
    // Any other user-related fields
});

module.exports = mongoose.model('User', userSchema);
