const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        unique: true, 
        trim: true, 
        lowercase: true, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
}, {
    timestamps: true, 
    toJSON: { // transform the document when its serialized to JSON 
        // automatically delete elements from a document
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
}
);

// pre-save hook - every time the document is saved, the password would be hashed
userSchema.pre('save', async function(next) {
    // using the isModified() to check if the password has been modified
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
    });

module.exports = mongoose.model('User', userSchema);