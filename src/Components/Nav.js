import React from "react";
import { BsHexagon } from "react-icons/bs";

function Nav() {
  const changeScroll = (position) => {
    window.scrollTo(0, position);
  };

  return (
    <>
      <nav className="outer">
        <div className="left">
          <BsHexagon
            className="logo"
            onClick={() => changeScroll(0)}
          ></BsHexagon>
          <div className="letter">J</div>
        </div>
        <div className="middle"></div>
        <div className="right">
          {/* <a href="#about"> */}
          <div className="about" onClick={() => changeScroll(750)}>
            <span className="number">01. </span>About
          </div>
          {/* </a> */}
          <div className="work" onClick={() => changeScroll(1780)}>
            <span className="number">02. </span>Work
          </div>
          <div className="contact" onClick={() => changeScroll(3118)}>
            <span className="number">03. </span>Contact
          </div>
          <a
            className="resume"
            href="https://docs.google.com/document/d/1JdSuQ0_cHch6DIrJgT5rn2y2O_9ECBs2zPuc2gsoOkc/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
