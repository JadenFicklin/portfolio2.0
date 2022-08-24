import React from "react";

function About() {
  return (
    <div className="about-outer" id="about">
      <div className="about-left">
        <div className="about-me">
          <span className="number one">01 </span>
          <br></br>
          <span className="about-me-head">
            <span className="l">A</span>
            <span className="l">b</span>
            <span className="l">o</span>
            <span className="l">u</span>
            <span className="l space">t</span>
            <span className="l">M</span>
            <span className="l">e</span>
          </span>
        </div>
        <div className="about-text">
          <div className="part-one">
            I'm a web developer based in Ogden, Utah. I graduated in the web
            development track at <a className="devmountain">DevMountain</a> in
            2022.
          </div>
          <div className="part-two">
            {" "}
            I enjoy drawing, basketball, and traveling.
          </div>
          <div className="part-three">
            {" "}
            I'm always looking to learn, but am comfortable with:
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>SQL</li>
              <li>HTML and CSS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-right">
        <div className="about-picture">
          <div className="pic-border"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
