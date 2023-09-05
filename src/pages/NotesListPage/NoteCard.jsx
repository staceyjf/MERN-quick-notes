function NotesCard({note}) {
    return (
      <>
          <div className="card">
            {/* <div
              className="card-image"
              style={{ backgroundImage: `url()` }}
            ></div> */}
            <div className="card-content">
              <h2>Your note</h2>
              <p>{note}</p>
            </div>
          </div>
      </>   
    )
   }
   
   export default NotesCard