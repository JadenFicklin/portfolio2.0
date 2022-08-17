import React from "react";

function Work() {
  return (
    <>
      <div className="work-outer">
        <div className="work-inner">
          <div className="work-header">
            <span className="number">02. </span>Work
          </div>
          <div className="euka-outer">
            <div className="euka-left"></div>
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
                CSS React HTML Javascript
              </div>
              <div className="euka-links"></div>
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
                CSS React HTML Javascript SQL
              </div>
              <div className="euka-links"></div>
            </div>
            <div className="sopi-right"></div>
          </div>
          <div className="ambience-outer">
            <div className="ambience-left"></div>
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
                CSS React HTML Javascript
              </div>
              <div className="ambience-links"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
