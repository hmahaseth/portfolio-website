import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ link }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {link.map((link) => (
        <li key={link.id}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
