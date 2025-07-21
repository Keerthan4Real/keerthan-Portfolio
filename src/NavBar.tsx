// import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navigation font-semibold bg-black w-full  fixed top-0 z-100">
        {/* <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/"
        > */}
        <ul className="px-10 gap-10 flex flex-row">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          {/* </NavLink> */}
          {/* <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/about"
        > */}

          {/* </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/contact"
        > */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* </NavLink> */}
      </nav>
    </>
  );
};

export default NavBar;
