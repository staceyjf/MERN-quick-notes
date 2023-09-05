import * as usersService from '../../utilities/users-service'; 

function NotesCard({note}) {
    return (
      <>
         <h1>NotesIndex</h1>
          <div className="card">
            {/* <div
              className="card-image"
              style={{ backgroundImage: `url()` }}
            ></div> */}
            <div className="card-content">
              <h2></h2>
              <p>{note}</p>
            </div>
          </div>
      </>   
    )
   }
   
   export default NotesCard