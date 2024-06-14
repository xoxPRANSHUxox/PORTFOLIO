import Navbar from "./copmonents/Navbar/Navbar";
import Intro from "./copmonents/Intro/Intro";
import About from "./copmonents/About/About";
import Skills from "./copmonents/skills/skills";
import Projects from "./copmonents/Projects/Projects";
import Contact from "./copmonents/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
