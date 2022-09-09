import React from "react";
// import { useState } from "react";
import WorkComponent from "./WorkComponent";

function WorkOuter() {
  // const [ambience, setAmbience] = useState(false);
  // console.log(ambience);

  return (
    <>
      <div className="work-two-outer">
        <div className="work-two-top">
          <div className="work-two-top-number number">02</div>
          <div className="work-two-top-header work-header">
            <span className="about-me-head">
              <span className="l">W</span>
              <span className="l">o</span>
              <span className="l">r</span>
              <span className="l">k</span>
            </span>
          </div>
        </div>
        <div className="work-two-bottom">
          <div className="work-two-bottom-left">
            <WorkComponent name="Ambience" />
            <WorkComponent name="Sopi" />
            <WorkComponent name="Euka" />
            <WorkComponent name="Forms" />
            <WorkComponent name="Shop" />
            <WorkComponent name="Daccord" />
          </div>
          <div className="work-two-bottom-right">
            <div className="work-two-bottom-right-top"></div>
            <div className="work-two-bottom-right-bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkOuter;
