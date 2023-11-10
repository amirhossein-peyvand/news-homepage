import "../sass/Navbar.scss";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import closeIcon from "../assets/icon-menu-close.svg";
import logo from "../assets/logo.svg";
import menu from "../assets/icon-menu.svg";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const isGreaterThan768px = useMediaQuery({ query: "(min-width: 1000px)" });
  const [clicked, setClicked] = useState(false);

  const mobile = (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />
      {clicked ? (
        <img
          className="close"
          src={closeIcon}
          alt="closeIcon"
          onClick={() => setClicked(false)}
        />
      ) : (
        <img
          className="menu"
          src={menu}
          alt="menu"
          onClick={() => setClicked(true)}
        />
      )}

      {clicked && <MobileMenu />}
    </nav>
  );

  const desktop = (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
    </nav>
  );

  return isGreaterThan768px ? desktop : mobile;
};

export default Navbar;
