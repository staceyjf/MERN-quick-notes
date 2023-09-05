import sendRequest from "./send-request"

// the base path of the Express route 
const BASE_URL = "/api/notes";

// as this is a 'GET' request and has no payload we don't need any more params
export async function notesIndex(notes) {
   alert('is this working');
   // return sendRequest(`${BASE_URL}`, credentials);
}

