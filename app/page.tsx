"use client";
import Logo from "@/components/global/logo";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import CustomEase from "gsap/CustomEase";
import $ from "jquery";
import MenuButton from "@/components/global/menuButton";
import {
  FloatingTitleHolder,
  ImageGridInfoHolder,
} from "@/components/home/textHolders";
import { ContactHoverComponent } from "@/components/home/contact";
import HeroSticky from "@/components/home/heroSticky";
import { HomeIntroSection } from "@/components/home/intro";
import { PhotoGridSection } from "@/components/home/photoGrid";
import { Footer } from "@/components/home/footer";
import useMediaQuery from "@/helpers/mediaQuery";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollSmoother);
gsap.registerPlugin(CustomEase);

export default function Home() {
  useEffect(() => {
    let stdDuration = 0.8;

    $(".h-effect").each(function (this: any) {
      var texts = $(this).find(".h-item");

      let text1 = new SplitText(texts[0], {
        charsClass: "char",
      });

      let text2 = new SplitText(texts[1], {
        charsClass: "char",
      });

      let menuHoverAni = gsap
        .timeline({
          paused: true,
          defaults: { duration: 0.5, stagger: 0.025, ease: "power1.out" },
        })
        .to(text1.chars, {
          yPercent: -100,
          opacity: 0,
        })
        .fromTo(
          text2.chars,
          { opacity: 0 },
          {
            yPercent: -100,
            opacity: 1,
          },
          0
        )
        .timeScale(1);

      $(this).on("mouseenter", () => {
        menuHoverAni.restart();
      });
    });

    $(".desktop-flex .home-footer-info_block").each(function (index) {
      let footerImgOn = gsap.timeline({
        paused: true,
        // defaults: { overwrite: true },
      });
      let footerImgOff = gsap.timeline({
        paused: true,

        // defaults: { overwrite: true },
      });

      footerImgOn.fromTo(
        $(".footer-img_holder").eq(index).find(".img-fill"),
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: stdDuration,
          ease: "primary-ease",
        }
      );
      footerImgOn.fromTo(
        $(".footer-img_holder").eq(index).find(".img-fill"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: stdDuration,
          ease: "primary-ease",
        },
        "<"
      );

      footerImgOff.to($(".footer-img_holder").eq(index).find(".img-fill"), {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: stdDuration,
        ease: "primary-ease",
      });
      footerImgOff.to(
        $(".footer-img_holder").eq(index).find(".img-fill"),
        {
          opacity: 0,
          duration: stdDuration,
          ease: "primary-ease",
        },
        "<"
      );

      $(this).on("mouseenter", function () {
        $(this).addClass("show");
        footerImgOn.restart();
        $(".contact-hover_component").addClass("show");
        $(".image-grid_item").addClass("extra-fade");
      });

      $(this).on("mouseleave", function () {
        footerImgOff.restart();
        $(".contact-hover_component").removeClass("show");
        $(".image-grid_item").removeClass("extra-fade");
        $(this).removeClass("show");
      });
    });

    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      let homeMobLogo = gsap.timeline({
        scrollTrigger: {
          trigger: ".home-intro_section",
          start: "top top",
          end: "top center",
          endTrigger: ".home-footer_component",
          toggleClass: {
            targets: ".mobile-text_logo",
            className: "show-logo",
          },
        },
      });
    });

    return () => {};
  }, []);

  const isMobile = useMediaQuery(767);

  return (
    <main className="page-main">
      <div className="page-wrapper home-page">
        <div className={"mobile-text_logo"}>
          <Link href="/" className="head-logo_holder w-inline-block w--current">
            <div className="head-logo_height"></div>
            <div className="head-logo">
              <Logo />
            </div>
          </Link>
        </div>
        <MenuButton />
        <FloatingTitleHolder />
        <ImageGridInfoHolder />
        <ContactHoverComponent />
        <div className="page-content">
          <HeroSticky />
          <HomeIntroSection />
          <PhotoGridSection />
          <Footer />
        </div>
      </div>
      <div className="egg-component">
        <div className="egg-left">
          <div className="egg-col">
            <p className="body-copy">Design Intelligence</p>
          </div>
          <div className="egg-col">
            <div className="egg-menu">
              <p className="egg-menu_head">S&amp;P</p>
              <p className="body-copy">Architecture</p>
              <p className="body-copy">Infrastructure</p>
              <p className="body-copy">Interior</p>
              <p className="body-copy">Digital</p>
              <p className="body-copy">Research</p>
            </div>
          </div>
        </div>
        <div className="egg-right">
          <div className="sp-anim_holder">
            <div
              lottie-url="https://cdn.prod.website-files.com/64afcdb90ffc66c74033166f/64df14ac4fa34312059c2648_Construction_Transparent.json"
              className="sp-anim_container"
            ></div>
          </div>
        </div>
      </div>{" "}
    </main>
  );
}
