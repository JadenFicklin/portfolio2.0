import React from "react";

import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

function Links() {
  return (
    <>
      <div className="links-outer">
        <FiGithub className="github icon"></FiGithub>
        <FiLinkedin className="linkedin icon"></FiLinkedin>
        <FiFacebook className="facebook icon"></FiFacebook>
        <HiOutlineMail className="email icon"></HiOutlineMail>
        <div className="line">
          <div className="line-inner"></div>
        </div>
      </div>
    </>
  );
}

export default Links;
