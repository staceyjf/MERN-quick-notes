import * as notesAPI from './notes-api'

export async function notesIndex(notes) {
    const note = await notesAPI.notesIndex(notes);
    // // persist the token by using the browser's local storage
    // // setItem takes two args - name of key & what we want to store
    // localStorage.setItem('token', token);
    // return getUser();
}
