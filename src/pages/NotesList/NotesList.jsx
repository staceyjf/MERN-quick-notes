import { useState } from 'react';
// import { Link } from "react-router-dom";
import * as notesService from '../../utilities/notes-service';
// import NoteCard from './NoteCard';
import "./NotesList.css" 

function NotesList() {

  const [notes, setNote] = useState({});

  async function getNotesList() {
    const note = await notesService.getNotesList();
  }

  //this needs to be updated to the correct logic
  //  async function addNewNote() {
  //    const expDate = await usersService.checkToken();
  //    console.log(expDate);
  //  }
  
    return (
      <>
      <div className="flex-ctr-ctr">
        { !notes ?
          <>
          <p>
            No Notes Yet!
          </p>
          {/* <button onClick={addNewNote}>ADD A NOTE</button> */}
          </>
        :
          <div className="card-container">
            <h1>All my notes</h1>
              {/* {notes.map((n, idx) => (
              // link to the movie detail page
              // <Link to={`/notes/${n.title}`} key={idx}>
                <NoteCard note={n}/>
              // </Link>
              ))} */}
            </div>
        }
      </div>
      </>   
    )
   }
   
   export default NotesList