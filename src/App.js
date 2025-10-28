import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Credits from "./components/Credits";
import NavBar from "./components/NavBar";
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <Projects></Projects>
        <About></About>
        <Experience></Experience>
        <Publications></Publications>
        <Credits></Credits>
      </div>
    </div>
  );
}

export default App;
