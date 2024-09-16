import Link from "next/link";
import { useEffect } from "react";
import $ from "jquery";
import bodymovin from "lottie-web";
import useMediaQuery from "@/helpers/mediaQuery";

const Footer: React.FC = () => {
  useEffect(() => {
    $(".sp-anim_holder").each(function (index) {
      let lottieFile = $(this).find(".sp-anim_container");
      let lottieUrl = lottieFile.attr("lottie-url");

      let lottieAnimation = bodymovin.loadAnimation({
        container: lottieFile[0],
        renderer: "svg",
        autoplay: false,
        loop: true,
        path: lottieUrl,
      });

      function reset() {
        bodymovin.pause();
      }
      $(".sp-anim_holder").on("mouseenter", function () {
        bodymovin.setDirection(1);
        lottieAnimation.loop = true;
        lottieAnimation.play();
        lottieAnimation.setSpeed(1);
      });

      $(".sp-anim_holder").on("mouseleave", function () {
        lottieAnimation.setDirection(-1);
        lottieAnimation.setSpeed(3);
        lottieAnimation.loop = false;
      });
    });
    return () => {};
  }, []);

  const isMobile = useMediaQuery();

  return (
    <>
      {isMobile ? (
        <FooterMobile />
      ) : (
        <div className="home-footer_component desktop-flex">
          <div className="home-footer_layout">
            <div className="home-footer_row">
              <div className="home-footer_info">
                <Link
                  href="/studio"
                  className="home-footer-info_block  w-inline-block h-effect h-effect"
                >
                  <div className="foot-head h-item">Our Studio</div>
                  <div className="foot-head h-item">Our Studio</div>
                  <p className="home-footer_p">
                    Our portfolio is expanding. The range of projects, from
                    polished and structured to speculative and experimental,
                    testify to the way our creative philosophy permeates every
                    area we work in.
                  </p>
                  <div className="footer-info-icon_holder">
                    <img
                      src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/66601c7c6b0d48cf88bbe09f_plus-icon.svg"
                      loading="lazy"
                      alt=""
                      className="footer-info_icon"
                    ></img>
                    <img
                      src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/66601c7c6b0d48cf88bbe0a0_arrow-icon.svg"
                      loading="lazy"
                      alt=""
                      className="footer-info_icon"
                    ></img>
                  </div>
                </Link>
                <a
                  data-swup-animation="to-black"
                  
                  href="/contact"
                  className="home-footer-info_block  w-inline-block h-effect h-effect"
                >
                  <div className="foot-head h-item">Contact Us</div>
                  <div className="foot-head h-item">Contact Us</div>
                  <p className="home-footer_p">
                    We look forward to hearing from you. Email us to
                    collaborate.
                  </p>
                  <div className="footer-info-icon_holder">
                    <img
                      src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/66601c7c6b0d48cf88bbe09f_plus-icon.svg"
                      loading="lazy"
                      alt=""
                      className="footer-info_icon"
                    ></img>
                    <img
                      src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/66601c7c6b0d48cf88bbe0a0_arrow-icon.svg"
                      loading="lazy"
                      alt=""
                      className="footer-info_icon"
                    ></img>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-bot_layout">
              <div className="footer-bot_left">
                <div className="footer-col">
                  <div className="footer-logo_holder">
                    <div className="sp-anim_holder">
                      <div
                        data-anim-loop=""
                        lottie-url="https://cdn.prod.website-files.com/6480b7dee5884d12406ffba2/64881fc686e34d3ea7122487_S%26P_Logo.json"
                        className="sp-anim_container"
                      ></div>
                    </div>
                  </div>
                </div>
                <p easter-fade="" className="paragraph">
                  All rights reserved ©Stewart&amp;Associates
                </p>
              </div>
              <div easter-fade="" className="footer-bot_right">
                <div easter-fade="" className="footer-menu_holder">
                  <a
                    href="/"
                    aria-current="page"
                    className="footer-link  w-inline-block h-effect w--current h-effect"
                  >
                    <div className="body-copy h-item">Home</div>
                    <div className="body-copy h-item">Home</div>
                  </a>
                  <a
                    
                    href="/studio"
                    className="footer-link  w-inline-block h-effect h-effect"
                  >
                    <div className="body-copy h-item">About</div>
                    <div className="body-copy h-item">About</div>
                  </a>
                  <a
                    
                    href="/work"
                    className="footer-link  w-inline-block h-effect h-effect"
                  >
                    <div className="body-copy h-item">Work</div>
                    <div className="body-copy h-item">Work</div>
                  </a>
                  <a
                    data-swup-animation="to-black"
                    
                    href="/archive"
                    className="footer-link  w-inline-block h-effect h-effect"
                  >
                    <div className="body-copy h-item">Archive</div>
                    <div className="body-copy h-item">Archive</div>
                  </a>
                  <a
                    
                    href="/news"
                    className="footer-link  w-inline-block h-effect h-effect"
                  >
                    <div className="body-copy h-item">News</div>
                    <div className="body-copy h-item">News</div>
                  </a>
                  <a
                    data-swup-animation="to-black"
                    
                    href="/contact"
                    className="footer-link  w-inline-block h-effect h-effect"
                  >
                    <div className="body-copy h-item">Contact</div>
                    <div className="body-copy h-item">Contact</div>
                  </a>
                </div>
                <div className="footer-menu_holder">
                  <a
                    t-black=""
                    
                    href="https://www.linkedin.com/company/alexstewartandpartners/"
                    target="_blank"
                    className="footer-link  w-inline-block h-effect h-effect"
                  >
                    <div className="body-copy h-item">LinkedIn</div>
                    <div className="body-copy h-item">LinkedIn</div>
                  </a>
                  <a
                    t-black=""
                    
                    href="https://www.instagram.com/stewartandpartners/"
                    target="_blank"
                    className="footer-link  w-inline-block h-effect h-effect"
                  >
                    <div className="body-copy h-item">Instagram</div>
                    <div className="body-copy h-item">Instagram</div>
                  </a>
                </div>
                <a
                  href="mailto:info@stewartpartners.studio"
                  className="footer-link  w-inline-block h-effect"
                >
                  <div className="footer-link_text">
                    info@stewartpartners.studio
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-end_trigger"></div>
        </div>
      )}
    </>
  );
};

const FooterMobile: React.FC = () => {
  return (
    <>
      <div hidemob-logo className="home-footer_component mobile">
        <div hover-fade="" className="home-footer_layout">
          <div className="home-footer_row">
            <div className="home-footer_info">
              <Link
                href="/studio"
                className="home-footer-info_block  w-inline-block h-effect h-effect"
              >
                <div className="foot-head h-item">Our Studio</div>
                <div className="foot-head h-item">Our Studio</div>
                <p className="home-footer_p">
                  Our portfolio is expanding. The range of projects, from
                  polished and structured to speculative and experimental,
                  testify to the way our creative philosophy permeates every
                  area we work in.
                </p>
                <div className="footer-info-icon_holder">
                  <img
                    src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/66601c7c6b0d48cf88bbe09f_plus-icon.svg"
                    loading="lazy"
                    alt=""
                    className="footer-info_icon"
                  ></img>
                  <img
                    src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/66601c7c6b0d48cf88bbe0a0_arrow-icon.svg"
                    loading="lazy"
                    alt=""
                    className="footer-info_icon"
                  ></img>
                </div>
              </Link>
              <a
                data-swup-animation="to-black"
                href="/contact"
                className="home-footer-info_block  w-inline-block h-effect h-effect"
              >
                <div className="foot-head h-item">Contact Us</div>
                <div className="foot-head h-item">Contact Us</div>
                <p className="home-footer_p">
                  We look forward to hearing from you. Email us to collaborate.
                </p>
                <div className="footer-info-icon_holder">
                  <img
                    src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/66601c7c6b0d48cf88bbe09f_plus-icon.svg"
                    loading="lazy"
                    alt=""
                    className="footer-info_icon"
                  ></img>
                  <img
                    src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/66601c7c6b0d48cf88bbe0a0_arrow-icon.svg"
                    loading="lazy"
                    alt=""
                    className="footer-info_icon"
                  ></img>
                </div>
              </a>
            </div>
          </div>
          <div className="footer-bot_layout">
            <div className="footer-bot_layout">
              <div className="footer-bot_left">
                <div className="footer-col"></div>
              </div>
              <div easter-fade="" className="footer-bot_right">
                <div easter-fade="" className="footer-menu_holder">
                  <a
                    href="/"
                    aria-current="page"
                    className="footer-link  w-inline-block h-effect"
                  >
                    <div className="body-copy h-item">Home</div>
                    <div className="body-copy h-item">Home</div>
                  </a>
                  <a
                    href="/studio"
                    className="footer-link  w-inline-block h-effect"
                  >
                    <div className="body-copy h-item">About</div>
                    <div className="body-copy h-item">About</div>
                  </a>
                  <a
                    href="/work"
                    className="footer-link  w-inline-block h-effect"
                  >
                    <div className="body-copy h-item">Work</div>
                    <div className="body-copy h-item">Work</div>
                  </a>
                  <a
                    data-swup-animation="to-black"
                    href="/archive"
                    className="footer-link  w-inline-block h-effect"
                  >
                    <div className="body-copy h-item">Archive</div>
                    <div className="body-copy h-item">Archive</div>
                  </a>
                  <a
                    href="/news"
                    className="footer-link  w-inline-block h-effect"
                  >
                    <div className="body-copy h-item">News</div>
                    <div className="body-copy h-item">News</div>
                  </a>
                  <a
                    data-swup-animation="to-black"
                    href="/contact"
                    className="footer-link  w-inline-block h-effect"
                  >
                    <div className="body-copy h-item">Contact</div>
                    <div className="body-copy h-item">Contact</div>
                  </a>
                </div>
                <div className="footer-menu_holder">
                  <a
                    t-black=""
                    href="https://www.linkedin.com/company/alexstewartandpartners/"
                    target="_blank"
                    className="footer-link  w-inline-block h-effect"
                  >
                    <div className="body-copy h-item">Linkedin</div>
                    <div className="body-copy h-item">Linkedin</div>
                  </a>
                  <a
                    t-black=""
                    href="https://www.instagram.com/stewartandpartners/"
                    target="_blank"
                    className="footer-link  w-inline-block h-effect"
                  >
                    <div className="body-copy h-item">Instagram</div>
                    <div className="body-copy h-item">Instagram</div>
                  </a>
                </div>
                <div className="footer-menu_holder">
                  <div className="socials-component">
                    <div className="body-copy h-item">©2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-logo_holder">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="137.6"
              height="94.375"
              viewBox="0 0 137.6 94.375"
              className="footer-logo_svg"
            >
              <path
                id="Path_56"
                data-name="Path 56"
                d="M92.375,135.6V112.912L0,53.955V0H92.375V22.157L0,82.16V135.6Z"
                transform="translate(1 93.375) rotate(-90)"
                stroke="#000"
                stroke-width="2"
              />
            </svg>

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 373 562"
              fill="none"
              className="footer-logo_svg"
            >
              <g>
                <path
                  d="M373 421.501L153.136 200.627C148.253 195.723 151.711 187.334 158.615 187.334H372.933V0H139.959V179.547C139.959 183.847 136.49 187.333 132.21 187.333H0V327.833L233.175 562H373V421.501Z"
                  fill="#000"
                ></path>
              </g>
            </svg> */}
          </div>
          <div className="footer-extras">
            <div mask-in className="footer-link_text">
              info@stewartpartners.studio
            </div>
            <p easter-fade className="paragraph">
              All rights reserved ©Stewart&amp;Partners
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer, FooterMobile };
