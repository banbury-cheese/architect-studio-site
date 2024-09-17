import React from "react";

const ContactHoverComponent: React.FC = () => {
  return (
    <div className="contact-hover_component">
      <div className="footer-img_holder">
        <div className="footer-img_height"></div>
        <img
          src="/images/hover/studio-hover.jpg"
          loading="eager"
          alt=""
          className="img-fill"
        ></img>
      </div>
      <div className="footer-img_holder">
        <div className="footer-img_height"></div>
        <img
          src="/images/hover/contact.jpg"
          loading="eager"
          alt=""
          className="img-fill"
        ></img>
      </div>
    </div>
  );
};

export { ContactHoverComponent };
