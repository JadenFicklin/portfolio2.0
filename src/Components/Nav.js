import React from "react";
import useScrollPosition from "../hooks/useScrollPosition";
function Nav() {
  let scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <>
      <nav className="outer">
        <div className="logo" onClick={() => (scrollPosition = 0)}>
          J
        </div>
        <div className="middle"></div>
        <div className="right">
          <div className="about">
            <span className="number">01. </span>About
          </div>
          <div className="work">
            <span className="number">02. </span>Work
          </div>
          <div className="contact">
            <span className="number">03. </span>Contact
          </div>
          <div className="resume"> Resume</div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
