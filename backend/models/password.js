const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    encryptedPassword: String,
    // Any other metadata fields
});

module.exports = mongoose.model('Password', passwordSchema);
