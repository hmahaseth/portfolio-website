"use client";
import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links = [] }) => {
  return (
    // Clean, centered column layout for mobile navigation anchors
    <ul className="flex flex-col py-4 items-center gap-y-6 font-sans tracking-widest text-base font-bold uppercase">
      {links.map((link, index) => (
        <li 
          key={link.id || index}
          className="w-full text-center transition-all duration-200 text-zinc-400 hover:text-white active:scale-95"
        >
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
