import React, { useEffect } from 'react'

function Header() {
   useEffect(() => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll(".nav__link");

    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
      });
    });
  }, []);

    return (
      <>
        <header className="home-header">
        <a href="/#home" className="logo">
          <span className="logo-text">&lt;devsid&gt; </span>
        </a>
        <button className="nav-toggle" aria-label="toggle navigation">
          <span className="hamburger"></span>
        </button>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="/#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="/#about" className="nav__link">
                About me
              </a>
            </li>
            <li className="nav__item">
              <a href="/#work" className="nav__link">
                My Work
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="header-ht-fix"></div>
      </>
    )
}

export default Header
