import React from "react";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

function WorkComponent(props) {
  const [ambience, setAmbience] = useState(false);
  console.log(ambience);
  return (
    <>
      <div
        className="work-component-outer"
        onMouseEnter={() => setAmbience(true)}
        onMouseLeave={() => setAmbience(false)}
      >
        <div className="work-component-left">{props.name}</div>
        <div className="work-component-right">
          <div className="work-link-page">
            <FiExternalLink className="link-icon" />
          </div>
          <div className="work-link-github">
            <FiGithub className="link-icon" />
          </div>
        </div>
      </div>

      {ambience && (
        <div
          className="second-box"
          style={{ backgroundImage: `url(${props.backgroundImage})` }}
        ></div>
      )}
    </>
  );
}

export default WorkComponent;
// style={{ backgroundImage: `url(${shoe.imageOne})` }}
