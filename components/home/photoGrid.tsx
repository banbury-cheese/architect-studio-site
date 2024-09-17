import gsap from "gsap";
import { useEffect } from "react";
import $ from "jquery";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const PhotoGridSection: React.FC = () => {
  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.from($(".image-grid_item"), {
        y: "150%",
        ease: "expo.inOut",
        duration: 60,
        stagger: {
          from: "random",
          // amount: 15,
          each: 6,
        },
        scrollTrigger: {
          trigger: ".photo-grid_section",
          start: "top 270%",
          end: "bottom 150%",
          // markers: true,
          scrub: 1,
        },
      });

      // gsap.to($(".image-grid_item"), {
      //   filter: "grayscale(1)",
      //   opacity: 0.2,
      //   scrollTrigger: {
      //     trigger: ".home-footer_component",
      //     start: "top 100%",
      //     end: "bottom 100%",
      //     scrub: 1,
      //   },
      // });


      let fadeGrid = gsap.timeline({
        scrollTrigger: {
          trigger: ".home-footer_component",
          start: "top bottom",
          end: "top 40%",
          scrub: true,
          onEnter: () => {
            $(".image-grid_item").addClass("inactive");
          },
          onLeaveBack: () => {
            $(".image-grid_item").removeClass("inactive");
          },
        },
      });

      fadeGrid.to(".text-logo_holder, .floating-title_holder", {
        opacity: 0,
        duration: 0.4,
        ease: "power1.out",
      });

      fadeGrid.fromTo(
        ".image-grid_item",
        {
          opacity: 1,
          filter: "grayscale(0)",
        },
        {
          opacity: 0.2,
          filter: "grayscale(1)",
          ease: "linear",
        },
        "<"
      );
    });
    return () => {};
  }, []);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      $(".image-grid_item").each(function (this: any) {
        const mainTitle = $(this).data("main-title");
        const workTitle = $(this).data("work-title");
        const workCopy = $(this).data("work-copy");

        const fadeOutElements = $(".image-grid_item").not(this);

        $(this).on("mouseenter", () => {
          fadeOutElements.addClass("fadeout");
          $(this).addClass("highlight");

          $(".image-grid-info_holder > .body-copy").text(workTitle);
          $(".image-grid-info_holder > .paragraph").text(workCopy);
          $(".logo-text").text(mainTitle);

          gsap.set(".image-grid-info_holder", {
            opacity: 1,
          });
        });

        $(this).on("mouseleave", () => {
          fadeOutElements.removeClass("fadeout");
          $(this).removeClass("highlight");

          $(".logo-text").text("mavi & associates");

          gsap.set(".image-grid-info_holder", {
            opacity: 0,
          });
        });
      });
    });
    return () => {};
  }, []);

  return (
    <div className="photo-grid_section">
      <div className="body-copy mobile">
        Feature work
        <br />
        (10)
      </div>
      <div className="photo-grid_wrap w-dyn-list">
        <div role="list" className="photo-grid w-dyn-items">
          <div
            data-main-title="Highland Residence"
            data-work-title="MV/ARC_01"
            data-work-copy="The home's design balances luxury and simplicity, blending modern architecture with state-of-the-art features to suit the new owners."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--1"
          >
            <Image
              loading="eager"
              grid-img=""
              width={300}
              height={300}
              src="/images/MV/ARC_01/cropped.jpeg"
              alt=""
              className="grid-img"
            ></Image>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">01</div>
              <div className="grid-mobi_name">Highland Residence</div>
            </div>
            <a
              href="/images/MV/ARC_01/full.jpeg"
              target="_blank"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Hope Corner"
            data-work-title="MV/ARC_02"
            data-work-copy="A striking modern residence with expansive terraces and a floating roofline, blending indoor and outdoor living in sleek, geometric harmony."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--2"
          >
            <Image
              loading="eager"
              grid-img=""
              width={300}
              height={300}
              src="/images/MV/ARC_02/cropped.jpeg"
              alt=""
              className="grid-img"
            ></Image>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">02</div>
              <div className="grid-mobi_name">Hope Corner</div>
            </div>
            <a
              href="/images/MV/ARC_02/full.jpeg"
              target="_blank"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Mill House"
            data-work-title="MV/ARC_03"
            data-work-copy="A playful postmodern apartment complex featuring bold numbering, varied geometric shapes, and a whimsical tower, creating a unique urban living space."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--3"
          >
            <Image
              loading="eager"
              grid-img=""
              width={300}
              height={300}
              src="/images/MV/ARC_03/cropped.jpeg"
              alt=""
              className="grid-img"
            ></Image>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">03</div>
              <div className="grid-mobi_name">Mill House</div>
            </div>
            <a
              href="/images/MV/ARC_03/full.jpeg"
              target="_blank"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Palmview Oasis"
            data-work-title="MV/ARC_04"
            data-work-copy="A striking modern residence nestled among tropical palms, blending clean lines and luxurious amenities to create the ultimate beachside retreat."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--4"
          >
            <Image
              loading="eager"
              grid-img=""
              width={300}
              height={300}
              src="/images/MV/ARC_04/cropped.jpeg"
              alt=""
              className="grid-img"
            ></Image>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">04</div>
              <div className="grid-mobi_name">Palmview Oasis</div>
            </div>
            <a
              href="/images/MV/ARC_04/full.jpeg"
              target="_blank"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Mosaic Manor
"
            data-work-title="MV/ARC_05"
            data-work-copy="An elegant beachfront property showcasing striking mosaic tile work, clean white façades, and expansive glass windows, merging luxury with coastal contemporary design."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--5"
          >
            <Image
              loading="eager"
              grid-img=""
              width={300}
              height={300}
              src="/images/MV/ARC_05/cropped.jpeg"
              alt=""
              className="grid-img"
            ></Image>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">05</div>
              <div className="grid-mobi_name">Mosaic Manor</div>
            </div>
            <a
              href="/images/MV/ARC_05/full.jpeg"
              target="_blank"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Mountain View Terrace"
            data-work-title="MV/ARC_06"
            data-work-copy="A modern multi-unit residence blending contemporary and traditional elements, featuring stacked balconies, varied textures, and warm wood accents, nestled against a scenic mountain backdrop."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--6"
          >
            <Image
              loading="eager"
              grid-img=""
              width={300}
              height={300}
              src="/images/MV/ARC_06/cropped.jpeg"
              alt=""
              className="grid-img"
            ></Image>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">06</div>
              <div className="grid-mobi_name">Mountain View Terrace</div>
            </div>
            <a
              href="/images/MV/ARC_06/full.jpeg"
              target="_blank"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Stonebridge Estate"
            data-work-title="MV/ARC_07"
            data-work-copy="A grand Mediterranean-inspired villa boasting arched windows, ornate ironwork, and a blend of stone textures, exuding timeless elegance and old-world charm in a modern setting."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--7"
          >
            <Image
              loading="eager"
              grid-img=""
              width={300}
              height={300}
              src="/images/MV/ARC_07/cropped.jpeg"
              alt=""
              className="grid-img"
            ></Image>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">07</div>
              <div className="grid-mobi_name">Stonebridge Estate</div>
            </div>
            <a
              href="/images/MV/ARC_07/full.jpeg"
              target="_blank"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Urban Nexus"
            data-work-title="MV/ARC_08"
            data-work-copy="A dynamic mixed-use building featuring bold orange accents, curved rooflines, and multi-level terraces, embodying the spirit of contemporary urban architecture."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--8"
          >
            <Image
              loading="eager"
              grid-img=""
              width={300}
              height={300}
              src="/images/MV/ARC_08/cropped.jpeg"
              alt=""
              className="grid-img"
            ></Image>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">08</div>
              <div className="grid-mobi_name">Urban Nexus</div>
            </div>
            <a
              href="/images/MV/ARC_08/full.jpeg"
              target="_blank"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Aishbag Railway Station"
            data-work-title="MV/ARC_09"
            data-work-copy="A modern railway station with striking red and black facade, large glass windows, and sleek design, bustling with travelers and luggage, exemplifying efficient transportation infrastructure."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--9"
          >
            <Image
              loading="eager"
              grid-img=""
              width={300}
              height={300}
              src="/images/MV/ARC_09/cropped.jpeg"
              alt=""
              className="grid-img"
            ></Image>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">09</div>
              <div className="grid-mobi_name">Faure New Water Scheme</div>
            </div>
            <a
              href="/images/MV/ARC_09/full.jpeg"
              target="_blank"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Stone Arch Villa"
            data-work-title="MV/ARC_10"
            data-work-copy="A grand Mediterranean-inspired estate blending modern luxury with classic architectural elements, featuring expansive arched openings and an impressive stone facade."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--10"
          >
            <Image
              loading="eager"
              grid-img=""
              width={300}
              height={300}
              src="/images/MV/ARC_10/cropped.jpeg"
              alt=""
              className="grid-img"
            ></Image>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">10</div>
              <div className="grid-mobi_name">Stone Arch Villa</div>
            </div>
            <a
              href="/images/MV/ARC_10/full.jpeg"
              target="_blank"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PhotoGridSection };
