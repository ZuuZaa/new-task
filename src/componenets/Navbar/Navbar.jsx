import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

export const Navbar = () => {
  // ---- state for open or close mobile navbar -----
  const [navIsOpen, setNavIsOpen] = useState(false);
  // ------- state for window scroll for navbar background ------
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);
  // ------- menu button onclick function ------
  const clickHandler = () => {
    setNavIsOpen(!navIsOpen);
  };
  // ------- set window scroll for navbar background ------
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  // set scroll state on scroll event ------
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      // ------ navbar changing background with class name -------
      className={scrollPosition < 160 ? "transparent navbar" : "white navbar"}
    >
      {/* ----- logo ------ */}
      <div className="logo-wrapper">
        <a href="/" className="logo">
          DESK
        </a>
      </div>
      {/* ------ nav links ------- */}
      <nav className={navIsOpen ? "show-nav" : "nav"}>
        <ul>
          <li>
            <a href="/" className="nav-link-shop">
              Shop
            </a>
          </li>
          <li>
            <a href="/">Why us</a>
          </li>
          <li>
            <a href="/">For companies </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/" className="nav-link-design">
              Design your space
            </a>
          </li>
          <li>
            <a href="/" className="nav-icon">
              <AiOutlineUser />
            </a>
          </li>
          <li>
            <a href="/" className="nav-icon">
              <SlBasket />
            </a>
          </li>
        </ul>
      </nav>
      {/* -------- hamburger menu button -------- */}
      <div className="hamburger-lines" onClick={clickHandler}>
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
    </div>
  );
};
