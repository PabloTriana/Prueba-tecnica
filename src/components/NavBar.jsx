import React from "react";
import { Link } from "react-router-dom";
import "../style/navBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to="/">
          <span class="material-symbols-outlined">
            home <span className="home-text">Home</span>
          </span>
        </Link>
      </div>
    );
  }
}

export default NavBar;
