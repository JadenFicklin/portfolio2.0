import React from 'react';

function Contact() {
    return (
        <>
            <div className="contact-outer">
                <div className="contact-inner">
                    <div className="number one contact-number">
                        03
                        <br></br>
                        <span className="contact-me-head">
                            <span className="l">C</span>
                            <span className="l">o</span>
                            <span className="l">n</span>
                            <span className="l">t</span>
                            <span className="l">a</span>
                            <span className="l">c</span>
                            <span className="l">t</span>
                        </span>
                    </div>

                    <div className="contact-sub-text">
                        I am currently working on freelance projects <br></br>
                        but am open to new opportunites.
                    </div>
                    <a href="mailto:fullstackjaden@gmail.com">
                        <div className="contact-button">
                            fullstackjaden@gmail.com
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Contact;
