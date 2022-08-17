import React from "react";

import { FiGithub } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

function Links() {
  return (
    <>
      <div className="links-outer">
        <a
          className="link icon"
          href="https://github.com/JadenFicklin"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub className="github"></FiGithub>
        </a>
        <a
          className="link icon"
          href="https://www.linkedin.com/in/jaden-ficklin-b1686a21a/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin className="linkedin"> </FiLinkedin>
        </a>
        <a
          className="link icon"
          href="https://www.facebook.com/jaden.ficklin/"
          target="_blank"
          rel="noreferrer"
        >
          <FiFacebook className="facebook"></FiFacebook>
        </a>
        <a
          className="link icon"
          href="https://mail.google.com/mail/u/0/#inbox"
          target="_blank"
          rel="noreferrer"
        >
          <HiOutlineMail className="email "></HiOutlineMail>
        </a>
        <div className="line">
          <div className="line-inner"></div>
        </div>
      </div>
    </>
  );
}

export default Links;
