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

  // function getWidth() {
  //   return Math.max(
  //     document.body.scrollWidth,
  //     document.documentElement.scrollWidth,
  //     document.body.offsetWidth,
  //     document.documentElement.offsetWidth,
  //     document.documentElement.clientWidth
  //   );
  // }

  return (
    <>
      <Nav />
      <Links />
      <div className="home">
        <div className="intro">
          {/* <h5>{getWidth()}px</h5> */}
          <h5 className="introduction">Hello, my name is</h5>
          <div className="name">
            <span className="l">J</span>
            <span className="l">a</span>
            <span className="l">d</span>
            <span className="l">e</span>
            <span className="l space">n</span>
            <span className="l">F</span>
            <span className="l">i</span>
            <span className="l">c</span>
            <span className="l">k</span>
            <span className="l">l</span>
            <span className="l">i</span>
            <span className="l">n</span>
            <span className="l">.</span>
          </div>
          <div className="occupation">
            <span className="l space">I</span>
            <span className="l">a</span>
            <span className="l space">m</span>
            <span className="l space">a</span>
            <span className="l">W</span>
            <span className="l">e</span>
            <span className="l space">b</span>
            <span className="l">D</span>
            <span className="l">e</span>
            <span className="l">v</span>
            <span className="l">e</span>
            <span className="l">l</span>
            <span className="l">o</span>
            <span className="l">p</span>
            <span className="l">e</span>
            <span className="l">r</span>
            <span className="l">.</span>
          </div>
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
