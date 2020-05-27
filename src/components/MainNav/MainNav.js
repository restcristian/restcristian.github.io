import React from "react";
import "./MainNav.css";
import { NavLink } from "react-router-dom";

const MainNav = (props) => {
  let links = [
    { itemName: "About Me", section: "/" },
    { itemName: "Projects", section: "/projects" },
  ];
  return (
    <nav className="main-nav">
      <ul className="reset-list">
        {links.map((item, idx) => {
          return (
            <li key={idx}>
              <NavLink exact to={item.section}>
                {item.itemName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainNav;
