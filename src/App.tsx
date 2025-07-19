import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Skills from "./Skills";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Eduexp from "./Eduexp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <NavBar />
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <NavBar />
          <Contact />
        </>
      ),
    },
  ]);

  return (
    <>
      <div>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Eduexp />
        <Projects />

        {/* <Certificates /> */}
        <Contact />
      </div>
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
