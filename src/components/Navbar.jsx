import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, rsvp, wedding } from "../data/content.js";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Lukk mobilmenyen når man bytter side
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Hovedmeny">
        <Link to="/" className="navbar__brand">
          {wedding.couple}
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="navbar-menu"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <span className="visually-hidden">{open ? "Lukk meny" : "Åpne meny"}</span>
          <span className="navbar__toggle-bar" aria-hidden="true" />
          <span className="navbar__toggle-bar" aria-hidden="true" />
        </button>

        <ul id="navbar-menu" className={`navbar__menu${open ? " is-open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end className="navbar__link">
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to={rsvp.path} className="navbar__link navbar__link--rsvp">
              {rsvp.navLabel}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}