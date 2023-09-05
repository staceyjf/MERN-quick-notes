import * as notesService from '../../utilities/notes-service';
import NoteCard from './NoteCard';
import "./NotesListPage.css" 

function NotesListPage({user, notes, setNotes}) {

  // fetch all the user's notes
  async function fetchNotes() {
    const userNotes = await notesService.fetchNotes();
    setNotes(userNotes);
  }

    return (
      <>
      <div className="flex-ctr-ctr">
        {notes.length === 0 ? 
        ( <p>No Notes Yet!</p>) 
        : 
        (
          <>
          <h1>All {user.name} notes</h1>
          <div className="card-container">
            {notes.map((note, idx) => (
              <NoteCard key={idx} note={note.text}/>
            ))}
          </div>
          </>
        )}
        <button onClick={fetchNotes}>Fetch Notes</button>
      </div>
      </>  
    )
   }
   
   export default NotesListPage
