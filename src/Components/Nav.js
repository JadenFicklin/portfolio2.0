import React from "react";
function Nav() {
  const changeScroll = (position) => {
    window.scrollTo(0, position);
  };

  return (
    <>
      <nav className="outer">
        <div className="logo">J</div>
        <div className="middle"></div>
        <div className="right">
          <a href="#about">
            <div className="about">
              <span className="number">01. </span>About
            </div>
          </a>
          <div className="work" onClick={() => changeScroll(200)}>
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
