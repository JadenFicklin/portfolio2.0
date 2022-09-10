import React from "react";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

function WorkOuter() {
  const [ambience, setAmbience] = useState(false);
  const [sopi, setSopi] = useState(false);
  const [euka, setEuka] = useState(false);
  const [forms, setForms] = useState(false);
  const [shoes, setShoes] = useState(false);
  const [daccord, setDaccord] = useState(false);

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
            {/* ambience */}

            <a
              className="work-two-component work-two-component-one"
              onMouseEnter={() => setAmbience(true)}
              onMouseLeave={() => setAmbience(false)}
              href="https://ambience-jf.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-two-component-left">Ambience</div>
              <div className="work-two-component-right">
                <a
                  className="work-two-component-link-page"
                  href="https://ambience-jf.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink className="links-icon" />
                </a>
                <a
                  className="work-two-component-link-github"
                  href="https://github.com/JadenFicklin/ambience-side-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub className="links-icon" />
                </a>
              </div>
            </a>

            {/* sopi  */}

            <a
              className="work-two-component work-two-component-two"
              onMouseEnter={() => setSopi(true)}
              onMouseLeave={() => setSopi(false)}
              href="https://capstone-2-jf.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-two-component-left">Sopi</div>
              <div className="work-two-component-right">
                <a
                  className="work-two-component-link-page"
                  href="https://capstone-2-jf.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink className="links-icon" />
                </a>
                <a
                  className="work-two-component-link-github"
                  href="https://github.com/JadenFicklin/specs-capstone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub className="links-icon" />
                </a>
              </div>
            </a>

            {/* euka  */}

            <a
              className="work-two-component work-two-component-three"
              onMouseEnter={() => setEuka(true)}
              onMouseLeave={() => setEuka(false)}
              href="https://www.youtube.com/watch?v=-Zj5KCwzMwg"
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-two-component-left">Euka</div>
              <div className="work-two-component-right">
                <a
                  className="work-two-component-link-page"
                  href="https://www.youtube.com/watch?v=-Zj5KCwzMwg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink className="links-icon" />
                </a>
                <a
                  className="work-two-component-link-github"
                  href="https://github.com/JadenFicklin/Capstone-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub className="links-icon" />
                </a>
              </div>
            </a>

            {/* forms */}

            <div
              className="work-two-component work-two-component-four"
              onMouseEnter={() => setForms(true)}
              onMouseLeave={() => setForms(false)}
            >
              <a
                className="work-two-component-left"
                href="https://github.com/JadenFicklin/fav-movie-form"
                target="_blank"
                rel="noreferrer"
              >
                Forms
              </a>
              <div className="work-two-component-right">
                <a
                  className="work-two-component-link-page"
                  href="https://github.com/JadenFicklin/fav-movie-form"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink className="links-icon" />
                </a>
                <a
                  className="work-two-component-link-github"
                  href="https://github.com/JadenFicklin/fav-movie-form"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub className="links-icon" />
                </a>
              </div>
            </div>

            {/* shoes */}

            <div
              className="work-two-component work-two-component-five"
              onMouseEnter={() => setShoes(true)}
              onMouseLeave={() => setShoes(false)}
            >
              <a
                className="work-two-component-left"
                href="https://github.com/JadenFicklin/stripe"
                target="_blank"
                rel="noreferrer"
              >
                Shoes shop
              </a>
              <div className="work-two-component-right">
                <a
                  className="work-two-component-link-page"
                  href="https://github.com/JadenFicklin/stripe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink className="links-icon" />
                </a>
                <a
                  className="work-two-component-link-github"
                  href="https://github.com/JadenFicklin/stripe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub className="links-icon" />
                </a>
              </div>
            </div>

            {/* daccord */}

            <div
              className="work-two-component work-two-component-six"
              onMouseEnter={() => setDaccord(true)}
              onMouseLeave={() => setDaccord(false)}
            >
              <a
                className="work-two-component-left"
                href="https://daccord.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Daccord
              </a>
              <div className="work-two-component-right">
                <a
                  className="work-two-component-link-page"
                  href="https://daccord.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink className="links-icon" />
                </a>
                <a
                  className="work-two-component-link-github"
                  href="https://github.com/JadenFicklin/daccord-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub className="links-icon" />
                </a>
              </div>
            </div>
          </div>
          {/* end of link components */}

          {/* displayed pictures  */}
          <div className="work-two-bottom-right">
            {ambience ? (
              <>
                <div className="ambience-true"></div>
                <div className="ambience-text">
                  Ambience is a website developed to adjust enjoyable ambient
                  sounds.
                </div>
              </>
            ) : (
              <div className="work-false"></div>
            )}
            {sopi ? (
              <>
                <div className="sopi-true"></div>
                <div className="sopi-text">
                  Sopi is a socializing website designed to upload and rate
                  videos.
                </div>
              </>
            ) : (
              <div className="work-false"></div>
            )}
            {euka ? (
              <>
                <div className="euka-true"></div>
                <div className="euka-text">
                  Euka is an ecommerce website designed to market shoes.
                </div>
              </>
            ) : (
              <div className="work-false"></div>
            )}
            {forms ? (
              <>
                <div className="forms-true"></div>
                <div className="forms-text">
                  Created to demonstrate ability to capture data using SQL and
                  then display captured data.
                </div>
              </>
            ) : (
              <div className="work-false"></div>
            )}
            {shoes ? (
              <>
                <div className="shoes-true"></div>
                <div className="shoes-text">
                  Created to demonstrate ability to accept payments using
                  Stripe.
                </div>
              </>
            ) : (
              <div className="work-false"></div>
            )}
            {daccord ? (
              <>
                <div className="daccord-true"></div>
                <div className="daccord-text">
                  Created to demonstrate ability to create 3D interactive
                  objects using Spline.
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
