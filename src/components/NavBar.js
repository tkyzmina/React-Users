import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";

function NavBar() {
  return (
    <header className="py-10 relative z-10">
      <nav className="container mx-auto px-4 flex">
        <NavLink
          to="/"
          className={`flex items-center flex-none mr-auto`}
        >
            <HiOutlineUserGroup className="w-6 h-6 mr-4 stroke-sky-400"/>
          Users App
        </NavLink>
        <NavLink
          to="Users"
          className={({ isActive }) => (isActive ? "rounded-full bg-sky-500 px-1.5 py-0.5 text-ms text-white sm:block mr-4" : "mr-4 px-1.5 py-0.5")}
        >
          Users
        </NavLink>
        <NavLink
          to="About"
          className={({ isActive }) => (isActive ? "rounded-full bg-sky-500 px-1.5 py-0.5 text-ms text-white sm:block mr-4" : "mr-4 px-1.5 py-0.5")}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
