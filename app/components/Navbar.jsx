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
  {
    id: 4,
    title: "Studio",
    path: "/studio", // 🚀 Points to your new Studio page route
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      data-aos="fade-down"
      className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-screen-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.65)] transition-all duration-300"
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-3">
        
        {/* Logo Container */}
        <Link
          href="https://himanshumahaseth.com.np"
          className="transition-transform duration-300 hover:scale-105 active:scale-95 flex items-center"
        >
          <Image
            className="overflow-hidden rounded-xl filter contrast-[1.05] brightness-95"
            src="/images/hm.png"
            alt="HM Logo"
            height={55}
            width={55}
            priority
          />
        </Link>

        {/* Mobile Control Trigger Panel */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center justify-center p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all active:scale-95"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center justify-center p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all active:scale-95"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Desktop Anchor Link Items Menu */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-0 md:flex-row md:space-x-10 mt-0 font-sans tracking-wide text-sm font-semibold uppercase items-center">
            {navLinks.map((link) => (
              <li 
                key={link.id} 
                className={`transition-all duration-300 ${
                  link.title === "Studio" 
                    ? "bg-white/[0.06] border border-white/10 px-4 py-1.5 rounded-xl text-[#00bcd4] hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95" 
                    : "text-zinc-400 hover:text-white hover:translate-y-[-1px]"
                }`}
              >
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Responsive Floating Drawer Overlay Layer */}
      {navbarOpen ? (
        <div className="md:hidden border-t border-white/[0.06] bg-black/40 backdrop-blur-xl rounded-b-2xl overflow-hidden px-6 py-4 animate-fadeIn">
          <MenuOverlay links={navLinks} />
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
