import React from "react";

function Contact() {
  return (
    <>
      <div className="contact-outer">
        <div className="contact-inner">
          <div className="contact-header">03. What's Next?</div>
          <div className="contact-sub-header">Get In Touch</div>
          <div className="contact-sub-text">
            I'm currently looking for new opportunities! <br></br>my Inbox is
            always open. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </div>
          <a href="mailto:jadenficklin@gmail.com">
            <div className="contact-button">Say Hello</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
