import React from "react";
import "../styles/WorkDesignTwo.css";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function WorkOuter() {
  const [explore, setExplore] = useState(false);
  const [beauty, setBeauty] = useState(false);

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
            {/* explore */}

            <a
              className="work-two-component work-two-component-one"
              onMouseEnter={() => setExplore(true)}
              onMouseLeave={() => setExplore(false)}
              href="https://explore-art.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-two-component-left">Explore Art</div>
              <div className="work-two-component-right">
                <a
                  className="work-two-component-link-page"
                  href="https://explore-art.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineQuestionCircle className="links-icon" />
                </a>
                <a
                  className="work-two-component-link-page"
                  href="https://explore-art.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink className="links-icon" />
                </a>
                <a
                  className="work-two-component-link-github"
                  href="https://github.com/JadenFicklin/art-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub className="links-icon" />
                </a>
              </div>
            </a>

            {/* beauty  */}

            <a
              className="work-two-component work-two-component-two"
              onMouseEnter={() => setBeauty(true)}
              onMouseLeave={() => setBeauty(false)}
              href="https://beauty-by-kerrie.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-two-component-left">Beauty by Kerrie</div>
              <div className="work-two-component-right">
                <a
                  className="work-two-component-link-page"
                  href="https://explore-art.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineQuestionCircle className="links-icon" />
                </a>
                <a
                  className="work-two-component-link-page"
                  href="https://beauty-by-kerrie.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink className="links-icon" />
                </a>
                <a
                  className="work-two-component-link-github"
                  href="https://github.com/JadenFicklin/beauty-by-kerrie"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub className="links-icon" />
                </a>
              </div>
            </a>
          </div>

          {/* displayed pictures  */}
          <div className="work-two-bottom-right">
            {explore ? (
              <>
                <div className="explore-true"></div>
                <div className="explore-text">
                  explore art is a website developed to show some of my favorite
                  sculptures
                </div>
              </>
            ) : (
              <div className="work-false"></div>
            )}
            {beauty ? (
              <>
                <div className="beauty-true"></div>
                <div className="beauty-text">
                  beauty is a socializing website designed to upload and rate
                  videos.
                </div>
              </>
            ) : (
              <div className="work-false"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkOuter;
