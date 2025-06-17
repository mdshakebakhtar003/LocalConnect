const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'worker']
    },
}, {
    timestamps: true
});
module.exports = mongoose.model('User', userSchema); // Export the User model