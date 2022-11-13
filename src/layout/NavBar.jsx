import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBarRoutes = () => {

  return (
    <div className="nav">
      <NavLink to="/gif" className="title-nav">
        Gif
      </NavLink>

      <NavLink to="/breaking-bad" className="title-nav">
        Breaking Bad
      </NavLink>

      <NavLink to="/cuestion" className="title-nav">
        Question Pool
      </NavLink>
    </div>
  );
};

export default NavBarRoutes;
