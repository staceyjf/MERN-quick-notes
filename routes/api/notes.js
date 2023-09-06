const express = require('express');
const router = express.Router();
const noteController = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/notes' (defined server.js)
// GET /notes - restful CRUD mapping
router.get('/', ensureLoggedIn, noteController.readNotes) // display all notes
// POST /notes/new
router.post('/new', ensureLoggedIn, noteController.createNote) // create a specific note 
// DELETE /notes/:id (method-override - do you need this?)
router.delete('/:id', ensureLoggedIn, noteController.deleteNote) // delete a note


module.exports = router;
// don't forget to mount the router in server.js