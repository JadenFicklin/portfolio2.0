import React from "react";

function About() {
  return (
    <div className="about-outer" id="about">
      <div className="about-left">
        <div className="about-me">
          <span className="number one about-me-one">01 </span>
          <br className="break"></br>
          <span className="about-me-head">
            <span className="l">A</span>
            <span className="l">b</span>
            <span className="l">o</span>
            <span className="l">u</span>
            <span className="l space">t</span>
            <span className="l">M</span>
            <span className="l">e</span>
          </span>
        </div>
        <div className="about-text">
          <div className="part-one">
            I'm a web developer based in Ogden, Utah.<br></br> I graduated in
            the web development track at{" "}
            <a
              className="devmountain"
              href="https://devmountain.com/?utm_source=adwords&utm_medium=ppc&utm_campaign=GoogleAds%20-%20io0_DevMountain%20-%20Struck_Brand%20-%20CON%20-%20CPC&utm_content=exactadgroup_original_poorad&campaignid=12310006501&adgroupid=118484441918&adid=570690892069&utm_term=devmountain&hsa_acc=7536270230&hsa_cam=12310006501&hsa_grp=118484441918&hsa_ad=570690892069&hsa_src=g&hsa_tgt=kwd-300980390522&hsa_kw=devmountain&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwmJeYBhAwEiwAXlg0ARIZ7Lj3d1GKnVtJMDdhH_U0iBmZdOYc9OrfHk0BHlsId_dXW3xj9xoCrZsQAvD_BwE"
              target="_blank"
              rel="noreferrer"
            >
              DevMountain
            </a>{" "}
            in 2022.
          </div>
          <div className="part-two">
            {" "}
            I enjoy drawing, basketball, and travel.
          </div>
          <div className="part-three">
            {" "}
            I'm always looking to learn, but am comfortable with:
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>SQL</li>
              <li>HTML and CSS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-right">
        <div className="about-picture">
          <div className="pic-border"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
