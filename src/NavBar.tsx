import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional: use any icons you like

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <nav className="navigation font-semibold bg-black w-full fixed top-0 z-50 text-white">
        <div className="flex justify-between items-center px-6 py-4 md:px-10">
          {/* Left side - logo/brand name */}
          <div className="text-lg font-bold">MyPortfolio</div>

          {/* Desktop/Tablet Nav Links */}
          <ul className="gap-10 hidden md:flex flex-row">
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
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden"
            onClick={toggleDrawer}
            aria-label="Toggle Menu"
          >
            {drawerOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black z-40 transition-transform duration-300 ease-in-out md:hidden ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-5 text-lg font-medium pt-20">
          <a href="#home" onClick={toggleDrawer}>
            Home
          </a>
          <a href="#about" onClick={toggleDrawer}>
            About
          </a>
          <a href="#skills" onClick={toggleDrawer}>
            Skills
          </a>
          <a href="#experience" onClick={toggleDrawer}>
            Experience
          </a>
          <a href="#projects" onClick={toggleDrawer}>
            Projects
          </a>
          <a href="#contact" onClick={toggleDrawer}>
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
};

export default NavBar;
