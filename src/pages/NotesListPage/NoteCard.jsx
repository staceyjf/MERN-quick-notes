function NotesCard({note, idx, handleDelete}) {
  const dateCreated = new Date(note.createdAt).toLocaleString()

    return (
      <>
          <div className="card">
            {/* <div
              className="card-image"
              style={{ backgroundImage: `url()` }}
            ></div> */}
            <div className="card-content">
              <h2>Note {idx + 1}</h2>
              <p>{note.text}</p>
              <h6>created on: <br></br>{dateCreated}</h6>
              <button onClick={handleDelete}>DELETE</button>
            </div>
          </div>
      </>   
    )
   };
   
   export default NotesCard