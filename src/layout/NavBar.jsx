import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBarRoutes = () => {

  return (
    <div className="nav">
      <NavLink to="/gif">
        Gif
      </NavLink>

      <NavLink to="/breaking-bad">
        Breaking Bad
      </NavLink>

      <NavLink to="/cuestion">
        Question
      </NavLink>
    </div>
  );
};

export default NavBarRoutes;
