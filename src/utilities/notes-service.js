import * as notesAPI from './notes-api'

export async function fetchNotes() {
    return await notesAPI.fetchNotes();
}

export async function createNote(newNote) {
    return await notesAPI.createNote(newNote);
}