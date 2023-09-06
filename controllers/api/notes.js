const Note = require("../../models/note");
const User = require("../../models/user");

module.exports = {
    readNotes,
    createNote,
    deleteNote 
};

// List of all notes in the database
async function readNotes(req, res) {
    try {
        // find all notes in the database using our custom middleware
        const userNotes = await Note.find({user: req.user._id}).sort('-createdAt'); 
        // return the user's specific notes
        res.json(userNotes);
    } catch (err) {
        res.status(400).json('Notes not found');
    }
}

async function createNote(req, res) {
    try {
        console.log(req.body.text, req.body.text, req.user._id, req.body.createdAt);
        const note = await Note.create({
            text: req.body.text,
            user: req.user._id
        });
        res.json(note);
    } catch (err){
        res.status(400).json(err);
    }
}

async function deleteNote(req, res) {
    try {
        // find all notes in the database using our custom middleware
        await Note.findOneAndDelete({_id: req.params.id}); 
        // basically just let the front end know it was a successful deletion
        // do i need to send back the deleted note to trigger a re-render?
        res.status(200).send();
    } catch (err) {
        res.status(400).json('Note not found');
    }
}