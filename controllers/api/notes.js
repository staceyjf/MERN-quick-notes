const Note = require("../../models/note");
const User = require("../../models/user");

module.exports = {
    readNotes,
    create, 
};

// List of all notes in the database
async function readNotes(req, res) {
    try {
        // find all notes in the database
        const userNotes = await Note.find({user: req.user._id}).sort('-createdAt'); 
        // can use .json to send back a string 
        res.json(userNotes);
    } catch (err) {
        res.status(400).json('Error');
    }
}

async function create(req, res) {
    try {
        console.log(req.body.text, req.user._id, req.body.createdAt);
        const note = await Note.create({
            text: req.body.text,
            user: req.user._id
        });
        res.json(note);
    } catch (err){
        res.status(400).json(err);
    }
}