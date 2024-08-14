"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
const navLinks = [
  {
    id: 1,
    title: "About",
    path: "#about",
  },
  {
    id: 2,
    title: "Projects",
    path: "#projects",
  },
  {
    id: 3,
    title: "Contacts",
    path: "#contacts",
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed  top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"https://himanshumahaseth.com.np"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            className="flex overflow-hidden rounded-md"
            src="/images/hm.png"
            alt=""
            height={80}
            width={80}
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex-item-center px-3 py-3 border rounded border-slate-200  text-slate-200 hover:text-white horver:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <div className=" flex flex-row">
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex-item-center px-3 py-3 border rounded border-slate-200  text-slate-200 hover:text-white horver:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        <div className="menu hidden  md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((navLinks) => (
              <li key={navLinks.id}>
                <NavLink href={navLinks.path} title={navLinks.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay link={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
