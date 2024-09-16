import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FloatingTitleHolder = ({}) => {
  useEffect(() => {
    gsap.to(".floating-title_holder", {
      opacity: 1,
      duration: 0.4,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".home-intro_layout",
        start: "bottom 50%",
        end: "bottom 10%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="floating-title_holder">
      <div className="body-copy">
        Feature work
        <br />
        (10)
      </div>
    </div>
  );
};

const ImageGridInfoHolder = ({}) => (
  <div className="image-grid-info_holder">
    <div className="body-copy">SP/ARC_06</div>
    <p className="paragraph">
      Villa Palmitos is a two-unit house designed for luxury indoor-outdoor
      living.
    </p>
  </div>
);

export { FloatingTitleHolder, ImageGridInfoHolder };
