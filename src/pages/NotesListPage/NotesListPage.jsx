import {useState} from "react";
import { Link } from "react-router-dom";
import * as notesService from '../../utilities/notes-service';
import NoteCard from './NoteCard';
import "./NotesListPage.css" 

function NotesListPage({user, notes, setNotes}) {
  const [clicked, setClicked] = useState(true);
  const buttonText = !clicked ? 'Ascending' : 'Descending';

  // should be replaced with {useEffect} hook or another approach like a 'loaded' state with conditionally rendering 
  async function fetchNotes() {
    const userNotes = await notesService.fetchNotes();
    setNotes(userNotes);
  }

  // sort based on createdAt str in note state
  const sortedNotes = [...notes].sort((a, b) => {
    const dateA = new Date(a.createdAt); 
    const dateB = new Date(b.createdAt);

    if (clicked) {
      return dateA - dateB; // Ascending order
    } else {
      return dateB - dateA; // Descending order
    }

  });

  function handleDelete() {
    alert("Jokes - i don't work just yet");
    // event target
  };

    return (
      <>
      <div className="flex-ctr-ctr">
        Click me first to load my notes
        <button onClick={fetchNotes}>FETCH NOTES</button>
        {notes.length === 0 ? 
        ( <p>No Notes Yet!</p>) 
        : 
        (
          <>
          <h1>All {user.name} notes</h1>
          <div className="card-container">
            {sortedNotes.map((note, idx) => (
              <NoteCard key={idx} idx={idx} note={note} handleDelete={handleDelete}/>
            ))}
          </div>
          </>
        )}
        <div>  
          <button onClick={() => {setClicked(!clicked)}}>{buttonText}</button>
          <Link to="/notes/new" className="button">ADD NOTE</Link>
        </div>
      </div>
      </>  
    )
   }
   
   export default NotesListPage
