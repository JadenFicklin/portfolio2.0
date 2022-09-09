import React from "react";
import WorkComponent from "./WorkComponent";

function WorkOuter() {
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
            <div className="work-component-outer">
              <WorkComponent
                name="Ambience"
                backgroundimage="../src/assets/ambience2.JPG"
              />
            </div>
            <div className="work-component-outer">
              <WorkComponent
                name="Sopi"
                backgroundimage="../src/assets/ambience2.JPG"
              />
            </div>
            <div className="work-component-outer">
              <WorkComponent
                name="Euka"
                backgroundimage="../src/assets/ambience2.JPG"
              />
            </div>
            <div className="work-component-outer">
              <WorkComponent
                name="Forms"
                backgroundimage="../src/assets/ambience2.JPG"
              />
            </div>
            <div className="work-component-outer">
              <WorkComponent
                name="Shop"
                backgroundimage="../src/assets/ambience2.JPG"
              />
            </div>
            <div className="work-component-outer">
              <WorkComponent
                name="Daccord"
                backgroundimage="../src/assets/ambience2.JPG"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkOuter;
