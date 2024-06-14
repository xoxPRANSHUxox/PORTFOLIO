import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className="navbar bg-black w-full h-20 my-4 flex items-center justify-evenly">
        <span className="logo">Pranshu</span>
        <div className="desktopMenu">
          <a href="#intro" className="desktopMenuListItem" rel="noreferrer">
            Home
          </a>
          <a href="#about" className="desktopMenuListItem" rel="noreferrer">
            About
          </a>
          <a href="#skills" className="desktopMenuListItem" rel="noreferrer">
            Skills
          </a>
          <a href="#projects" className="desktopMenuListItem" rel="noreferrer">
            Projects
          </a>
        </div>

        <button className="desktopMenuBtn h-fit">
          <a href="#contact" className="" rel="noreferrer">
            Contact Me
          </a>
        </button>

        {/* Hamburger menu starts from here... */}
        <button
          className="hamBurger hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </nav>

      <div className="desktopTime">
        <div className={showMenu ? "menu" : "menuDisable"}>
            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#intro"
              className=""
              rel="noreferrer"
            >
              Home
            </a><br />
            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#about"
              className=""
              rel="noreferrer"
            >
              About
            </a><br />
            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#skills"
              className=""
              rel="noreferrer"
            >
              Skills
            </a><br />
            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#projects"
              className=""
              rel="noreferrer"
            >
              Projects
            </a><br />
            <a
              onClick={() => setShowMenu(!showMenu)}
              href="#contact"
              className=""
              rel="noreferrer"
            >
              Contact Me
            </a>
        </div>
      </div>
    </div>
  );
}
