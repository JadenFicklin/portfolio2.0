import React from "react";
function Nav() {
  const changeScroll = (position) => {
    window.scrollTo(0, position);
  };

  return (
    <>
      <nav className="outer">
        <div className="logo" onClick={() => changeScroll(0)}>
          J
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
          <div className="resume"> Resume</div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
