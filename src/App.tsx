import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import Eduexp from "./Eduexp";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="eduexp">
          <Eduexp />
        </section>
        <section id="projects">
          <Projects />
        </section>
        {/* <section id="certificates">
          <Certificates />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
