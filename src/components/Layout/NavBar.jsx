import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div className="container">
          <a
            className="navbar-brand fw-bold"
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse${
              menuOpen /* currently false */ ? " show" : ""
            }`}
            id="navbarContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn nav-link border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#contactOffcanvas"
                  aria-controls="contactOffcanvas"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
