const express = require('express');
const router = express.Router();
const noteController = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/notes' (defined server.js)
// GET / - restful CRUD mapping
router.get('/', noteController.index) // display all notes
// GET /new
// router.get('/new', noteController.new) // return view to add a new note
// GET /notes/:id
// router.get('/:id', noteController.show)  // read a specific note detail
// POST /
// router.post('/', noteController.create) // create a specific note 

module.exports = router;
// don't forget to mount the router in server.js