import { NavLink } from "react-router-dom"
import * as userService from "../../utilities/users-service" // importing users-service
import "./NavBar.css"
import logo from "./logo.svg"

function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    return(
        // <nav>
        //     {/* React Router implements an event handler to ensures that there is not HTTP request */}
        //     <Link to="/orders">Order History</Link>
        //     &nbsp; | &nbsp;
        //     <Link to="/orders/new">New Order</Link>
        //     &nbsp;&nbsp;
        //     <span>Welcome, {user.name}</span>
        //     &nbsp;&nbsp;
        //     <Link to="" onClick={handleLogOut}>Log out</Link>
        // </nav>
        <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav-elements">
            <ul>
              <li>Welcome {user.name}!</li>
              <li>
                <NavLink exact activeclassname="active" to="/">
                    Home
                </NavLink>
              </li>
              <li>
                <NavLink  activeclassname="active" to="/notes">
                    All Notes
                </NavLink>
              </li>
              <li>
                <NavLink activeclassname="active" to="/notes/new">
                New note
                </NavLink>
              </li>
              <li>
                <NavLink to="" onClick={handleLogOut}>Log out</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default NavBar