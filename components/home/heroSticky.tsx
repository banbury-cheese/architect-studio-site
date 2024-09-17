import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
import $ from "jquery";
import bodymovin from "lottie-web";
import useMediaQuery from "@/helpers/mediaQuery";
import toast from "react-hot-toast";

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

const HeroSticky = () => {
  useEffect(() => {
    gsap.to(".home-hero_spacer", {
      ease: "none",
      scrollTrigger: {
        trigger: ".home-hero_spacer",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      height: 0,
    });
    return () => {};
  }, []);

  const isMobile = useMediaQuery(767);

  return (
    <div className="home-hero_sticky">
      <div className="home-hero_layout">
        <div className="layout-col desktop"></div>
        <div className="layout-col home-intro">
          <Header />
          <div className={`text-logo_holder ${isMobile ? "is-mobile" : ""}`}>
            <div className="text-logo_layout">
              <h3 className="logo-text">mavi &amp; associates</h3>
            </div>
          </div>
          <VideoComponet />
          <div pload-opacity="" className="scroll-component">
            <div className="text-overflow">
              <div className="body-copy">Scroll</div>
            </div>
          </div>
        </div>
        <OverlayDesktop />
      </div>
      <OverlayMobile />
    </div>
  );
};

const VideoComponet: React.FC = () => {
  useEffect(() => {
    gsap.to(".video-play_text", {
      ease: "Power3.out",
      scrollTrigger: {
        trigger: ".home-hero_overlay",
        start: "top 50%",
        end: "top 0%",
        scrub: true,
      },
      opacity: 1,
    });

    $(".lottie-component").each(function (index) {
      let autoplayLottieFile = $(this).find(".lottie-el");
      let autoplayLottieUrl = autoplayLottieFile.attr("lottie-url");

      let autoLottieAnimation = bodymovin.loadAnimation({
        container: autoplayLottieFile[0],
        renderer: "svg",
        autoplay: true,
        loop: true,
        path: "/lottie/shiftingLogo.json",
      });
    });

    return () => {};
  }, []);

  return (
    <div className="video-component clickable">
      <div className="video-bg">
        <div className="lottie-component is-home">
          <div
            data-anim-loop=""
            lottie-url="/lottie/shiftingLogo.json"
            className="lottie-el"
          ></div>
        </div>
      </div>
      <div className="video-play">
        <div
          className="play-text_holder"
          onClick={() => {
            toast("Coming Soon");
          }}
        >
          <div className="video-play_text">Showreel©2024</div>
          <div className="video-play_text">watch reel</div>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => (
  <div pload-opacity="" className="layout-flex is-ci">
    <div className="text-overflow">
      <div className="body-copy">Design Intelligence</div>
    </div>
    <div className="text-overflow desktop">
      <div
        className="alt-copy text-right"
        onClick={() => {
          window.open("https://maps.app.goo.gl/SueeVtdTdrX3bDif8", "_blank");
        }}
      >
        {/* 51° 30' 35.5140'' N 0° */}
        26° 46&apos; 44.9&apos;&apos; N 80°
        <br />
        <CurrentTime />
      </div>
    </div>
  </div>
);

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return <span className="local-time">{formatTime(time)}</span>;
};

const OverlayDesktop: React.FC = () => (
  <div className="home-hero_overlay_wrap desktop">
    <div className="home-hero_spacer"></div>
    <div className="home-hero_overlay">
      <img
        src="/images/hero/main.jpg"
        alt=""
        sizes="100vw"
        // srcSet="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/6690e94371f7a4507bf1dba0_S%26P_Landing%20Hero-p-500.jpg 500w, https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/6690e94371f7a4507bf1dba0_S%26P_Landing%20Hero-p-800.jpg 800w, https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/6690e94371f7a4507bf1dba0_S%26P_Landing%20Hero-p-1080.jpg 1080w, https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/6690e94371f7a4507bf1dba0_S%26P_Landing%20Hero-p-1600.jpg 1600w, https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/6690e94371f7a4507bf1dba0_S%26P_Landing%20Hero.jpg 2160w"
        className="img-fill"
      ></img>
      <div className="home-hero_overlay_darken"></div>
    </div>
  </div>
);

const OverlayMobile: React.FC = () => (
  <div className="home-hero_overlay_wrap mobile video-play">
    <div className="home-hero_overlay">
      <img
        src="/images/hero/mobile.jpg"
        alt=""
        sizes="100vw"
        srcSet="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/6690e944e2abe43b207afb32_S%26P_Landing%20Hero_Mobile-p-500.jpg 500w, https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe06c/6690e944e2abe43b207afb32_S%26P_Landing%20Hero_Mobile.jpg 786w"
        className="img-fill"
      ></img>
      <div className="home-hero_overlay_darken"></div>
      <div className="play-text_holder mobile">
        <div
          className="video-play_text"
          onClick={() => {
            toast("Page Coming Soon");
          }}
        >
          SHowreel©2024
          <br />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSticky;
