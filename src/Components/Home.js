import React from "react";
import About from "./About";
import Nav from "./Nav";

import useScrollPosition from "../hooks/useScrollPosition";
import Work from "./Work";
import Contact from "./Contact";
import Links from "./Links";

function Home() {
  let scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <>
      <Nav />
      <Links />
      <div className="home">
        <div className="intro">
          <h5 className="introduction">Hello, my name is</h5>
          <div className="name">Jadenn Ficklin.</div>
          <div className="occupation">I am a Web Developer.</div>
          <div className="small-intro" onClick={() => (scrollPosition = 0)}>
            I’m a junior full stack engineer specializing in the react
            framework, though <br></br>open to new frameworks.
          </div>
        </div>
      </div>
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default Home;
