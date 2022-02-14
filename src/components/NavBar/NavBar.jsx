import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <h2>Outcomes Bible</h2>
      </div>
      <ul className="app__navbar-linksmarginfix">
        <li className="p__opensans"><Link  className="app__navbar-links" to="/resources">Resources</Link></li>
        <li className="p__opensans padding"><Link  className="app__navbar-links" to="/lists">My Lists</Link></li>
      </ul>
      <div className="app__navbar-login">
        <span>Welcome, {props.user.name}</span>
        &nbsp; | &nbsp;
      </div>
        <Link className="white" to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}