import React from "react";
import About from "./About";
import Nav from "./Nav";

import useScrollPosition from "../hooks/useScrollPosition";

function Home() {
  const scrollPosition = useScrollPosition();
  // console.log(scrollPosition);

  return (
    <>
      <Nav />
      <div className="home">
        <div className="intro">
          <h5 className="introduction">Hello, my name is</h5>
          <div className="name">Jaden Ficklin.</div>
          <div className="occupation">I am a Web Developer.</div>
          <div className="small-intro" onClick={() => (scrollPosition = 0)}>
            I’m a junior full stack engineer specializing in the react
            framework, though <br></br>open to new frameworks.
          </div>
        </div>
      </div>
      <About />
    </>
  );
}

export default Home;
