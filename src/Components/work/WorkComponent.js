import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

function WorkComponent(props) {
  return (
    <>
      <div className="work-component-outer">
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
    </>
  );
}

export default WorkComponent;
