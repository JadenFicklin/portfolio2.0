import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

function Work() {
  return (
    <>
      <div className="work-outer">
        <div className="work-inner">
          <div className="work-header">
            <span className="number">02. </span>Work
          </div>
          <div className="euka-outer">
            <a
              href="https://www.youtube.com/watch?v=-Zj5KCwzMwg"
              target="_blank"
              rel="noreferrer"
              className="euka-left"
            >
              {" "}
            </a>

            <div className="euka-right">
              <div className="euka-project-name">Featured Project</div>
              <div className="euka-name">Euka</div>
              <div className="euka-box">
                Euka is an ecommerce website designed to market shoes. <br></br>
                <br></br>
                <span className="number">timeframe of build: </span> 2 weeks{" "}
                <br></br>
                <br></br>{" "}
                <span className="number">main focus of website: </span> CSS
              </div>
              <div className="euka-languages-used">
                React <span className="space"></span>Express{" "}
                <span className="space"></span>React Router{" "}
                <span className="space"></span> CSS
              </div>
              <div className="euka-links">
                <div className="euka-links-right">
                  <a
                    className="euka-video"
                    href="https://www.youtube.com/watch?v=-Zj5KCwzMwg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineYoutube className="icon-link"></AiOutlineYoutube>
                  </a>
                  <a
                    className="euka-github"
                    href="https://github.com/JadenFicklin/Capstone-project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub className="icon-link"></FiGithub>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sopi-outer">
            <div className="sopi-left">
              <div className="sopi-project-name">Featured Project</div>
              <div className="sopi-name">Sopi</div>
              <div className="sopi-box">
                {" "}
                Sopi is a socializing website designed to upload and rate
                videos. <br></br>
                <br></br>
                <span className="number">timeframe of build: </span> 2 weeks{" "}
                <br></br>
                <br></br>
                <span className="number">main focus of website: </span>SQL
              </div>
              <div className="sopi-languages-used">
                React<span className="space"></span> Javascript
                <span className="space"></span> Bcrypt
                <span className="space"></span> SQL
                <span className="space"></span> Heroku
              </div>
              <div className="sopi-links">
                <div className="sopi-links-right">
                  <a
                    className="sopi-video"
                    href="https://www.youtube.com/watch?v=8L-vkJSVaJs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineYoutube className="icon-link"></AiOutlineYoutube>
                  </a>
                  <a
                    className="sopi-github"
                    href="https://capstone-2-jf.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink className="icon-link"></FiExternalLink>
                  </a>
                  <a
                    className="sopi-github"
                    href="https://github.com/JadenFicklin/specs-capstone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub className="icon-link"></FiGithub>
                  </a>
                </div>
              </div>
            </div>
            <a
              href="https://capstone-2-jf.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="sopi-right"
            >
              {" "}
            </a>
          </div>
          <div className="ambience-outer">
            <a
              href="https://ambience-jf.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="ambience-left"
            >
              {" "}
            </a>
            <div className="ambience-right">
              <div className="ambience-project-name">Featured Project</div>
              <div className="ambience-name">Ambience</div>
              <div className="ambience-box">
                Ambience is a website developed to adjust enjoyable ambient
                sounds. <br></br>
                <br></br>
                <span className="number">timeframe of build: </span> 1 week{" "}
                <br></br>
                <br></br>{" "}
                <span className="number">main focus of website: </span> reactive
                CSS
              </div>
              <div className="ambience-languages-used">
                React
                <span className="space"></span> Javascript
                <span className="space"></span> Heroku
              </div>
              <div className="ambience-links">
                <div className="ambience-links-right">
                  <a
                    className="ambience-website"
                    href="https://ambience-jf.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink className="icon-link"></FiExternalLink>
                  </a>
                  <a
                    className="ambience-github"
                    href="https://github.com/JadenFicklin/ambience-side-project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub className="icon-link"></FiGithub>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
