import React from "react";

function About() {
  return (
    <>
      <div className="about-outer">
        <div className="about-left">
          <div className="about-me">
            <span className="number one">01. </span>About Me
          </div>
          <div className="about-text">
            Hello! My name is Jaden and I enjoy creating things that live on the
            internet. My interest in web development started back in 2012 when I
            decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!{" "}
            <br></br>
            <br></br>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients. <br></br>
            <br></br>I also recently launched a course that covers everything
            you need to build a web app with the Spotify API using Node & React.{" "}
            <br></br>
            <br></br>
            Here are a few technologies I’ve been working with recently:{" "}
            <br></br>
            <br></br>
            JavaScript (ES6+) <br></br>
            TypeScript <br></br>React <br></br>Node.js
          </div>
        </div>
        <div className="about-right">
          <div className="about-picture">
            <div className="pic-border"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
