import { useState } from 'react'; 
import * as notesService from '../../utilities/notes-service';

function NewNoteForm({ notes, setNotes }) {
    const [newNote, setNewNote] = useState({
        text: '',
      });
      
    const [error, setError] = useState(''); 

    function handleChange(evt) { 
        setNewNote({ 
          ...newNote,
          [evt.target.name]: evt.target.value 
        }); 
        setError(''); 
    }

      async function handleSubmit(evt) { 
        evt.preventDefault(); 
        try {
          const note = await notesService.createNote(newNote); 
          setNotes([note, ...notes]); // Add the new note to the state
          setNewNote({ text: '' }); // Clear the form after submission
        } catch (err) { 
          setError('Unable to create a note - please try again');
          console.error(err); 
        } 
    } 

    return (
        <>
        <div className="form-container">
            <form
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <label>Add your new notes here</label>
                <input type="text"
                    name="text"
                    value={newNote.text}
                    onChange={handleChange}
                    required
                />
                <button type="submit" disabled={!newNote.text}>Create</button>
            </form>
        </div>
        <p className="error-message" style={{ display: error ? 'block' : 'none' }}>{error}</p>
        </>
    ); 
}

export default NewNoteForm;