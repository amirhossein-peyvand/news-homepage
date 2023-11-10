import "../sass/Navbar.scss";
import logo from "../assets/logo.svg";
import menu from "../assets/icon-menu.svg";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isGreaterThan768px = useMediaQuery({ query: "(min-width: 1000px)" });

  const mobile = (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <img className="menu" src={menu} alt="menu" />
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
