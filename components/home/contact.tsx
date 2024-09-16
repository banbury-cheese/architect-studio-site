import React from "react";

const ContactHoverComponent: React.FC = () => {
  return (
    <div className="contact-hover_component">
      <div className="footer-img_holder">
        <div className="footer-img_height"></div>
        <img
          src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/66601c7c6b0d48cf88bbe0d7_Home_StudioHover.jpg"
          loading="eager"
          alt=""
          className="img-fill"
        ></img>
      </div>
      <div className="footer-img_holder">
        <div className="footer-img_height"></div>
        <img
          src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/66601c7c6b0d48cf88bbe0bf_Home_ContactHover.jpg"
          loading="eager"
          alt=""
          className="img-fill"
        ></img>
      </div>
    </div>
  );
};

export { ContactHoverComponent };
