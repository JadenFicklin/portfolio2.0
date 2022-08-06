import React from "react";
import Nav from "./Nav";

function Home() {
  return (
    <>
      <Nav />
      <div className="home">
        <div className="intro">
          <h5 className="introduction">Hello, my name is</h5>
          <div className="name">Jaden Ficklin.</div>
          <div className="occupation">I am a Web Developer.</div>
          <div className="small-intro">
            I’m a junior full stack engineer specializing in the react
            framework, though <br></br>open to new frameworks.
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
