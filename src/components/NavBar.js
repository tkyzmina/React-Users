import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >Home</NavLink>
      <NavLink
        to="Users"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >Users</NavLink>
      <NavLink
        to="About"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >About</NavLink>
    </nav>
  );
}

export default NavBar;