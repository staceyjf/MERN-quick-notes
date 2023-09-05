import { useState } from 'react';
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from 'react-router-dom';
// Page components
import AuthPage from "../AuthPage/AuthPage";
import NewNotePage from "../NewNotePage/NewNotePage";
import NotesIndex from "../NotesIndex/NotesIndex";
// Components
import NavBar from "../../components/NavBar/NavBar";

import './App.css';


function App() {
  // updating now with the token logic defined
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
    {/* conditionally render based on user - this has the NavBar only for logged in users*/}
    { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
            <Routes>
              {/* Routes components in here * - instance of the competent provided as a prop
              only renders the best matching path based on the address bar*/}
              <Route path="/notes/new" element={<NewNotePage />} />
              <Route path="/notes" element={<NotesIndex/>} />
          </Routes>
        </> 
        :
        <AuthPage user={user} setUser={setUser} />
    }

    
  
    </main>
  );
}

export default App;
