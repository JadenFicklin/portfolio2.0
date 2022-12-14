import React from "react";
import About from "./About";
import Nav from "./Nav";

import useScrollPosition from "../hooks/useScrollPosition";
import Work from "./Work";
import Contact from "./Contact";
import Links from "./Links";
import Svg from "./Svg";
import Viewport from "./Viewport";
import { useState } from "react";
import WorkOuter from "./work/WorkOuter";

function Home() {
  let scrollPosition = useScrollPosition();
  const [workDesignOne] = useState(true);

  if (scrollPosition === 0) {
    console.log(scrollPosition);
  }
  console.log("test");
  return (
    <>
      <Nav />
      <Links />
      <div className="home">
        <div className="intro">
          <Svg src={require("../assets/wave.svg").default} class="wave" />
          <h5 className="introduction">Hello</h5>
          <div className="name">
            <span className="l">I</span>
            <span className="l">'</span>
            <span className="l space">m</span>
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
          </div>
          <div className="small-intro" onClick={() => (scrollPosition = 0)}>
            I’m a full-stack web developer, specializing in JavaScript
          </div>
        </div>
      </div>
      <Viewport>
        <About />
      </Viewport>
      <Viewport>{workDesignOne ? <Work /> : <WorkOuter />}</Viewport>
      <Viewport>
        <Contact />
      </Viewport>
    </>
  );
}

export default Home;
