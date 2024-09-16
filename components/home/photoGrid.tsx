import gsap from "gsap";
import { useEffect } from "react";
import $ from "jquery";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

          $(".logo-text").text("Stewart & associates");

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
            data-main-title="Lake Club"
            data-work-title="SP/ARC_01"
            data-work-copy="Designed to melt into the landscape, the Lake Club at Real De La Quinta accommodates water sports, wellness facilities, a gym and a restaurant."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--1"
          >
            <img
              loading="eager"
              grid-img=""
              src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe075/66601c7c6b0d48cf88bbe169_Preview.jpg"
              alt=""
              className="grid-img"
            ></img>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">01</div>
              <div className="grid-mobi_name">Lake Club</div>
            </div>
            <a
              href="/work/lake-club"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Prospect Road"
            data-work-title="SP/ARC_02"
            data-work-copy="An iconic VDMMA-designed house came under new ownership and needed alterations to suit the family’s lifestyle."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--2"
          >
            <img
              loading="eager"
              grid-img=""
              src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe075/66601c7c6b0d48cf88bbe16f_preview.jpg"
              alt=""
              className="grid-img"
            ></img>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">02</div>
              <div className="grid-mobi_name">Prospect Road</div>
            </div>
            <a
              href="/work/prospect-road"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Stellenbosch Wastewater Treatment Works"
            data-work-title="SP/INF_03"
            data-work-copy="The design for the plant is a backdrop to the advanced membrane water filtration technology being used for water treatment."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--3"
          >
            <img
              loading="eager"
              grid-img=""
              src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe075/66601c7c6b0d48cf88bbe17e_preview.jpg"
              alt=""
              className="grid-img"
            ></img>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">03</div>
              <div className="grid-mobi_name">
                Stellenbosch Wastewater Treatment Works
              </div>
            </div>
            <a
              href="/work/stellenbosch-water-treatment-administration-building"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Villa 32"
            data-work-title="SP/ARC_04"
            data-work-copy="Situated at Real de la Quinta, near the Lake Club in Spain, Villa 32 accentuates the landscape. "
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--4"
          >
            <img
              loading="eager"
              grid-img=""
              src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe075/66601c7c6b0d48cf88bbe17f_preview.jpg"
              alt=""
              className="grid-img"
            ></img>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">04</div>
              <div className="grid-mobi_name">Villa 32</div>
            </div>
            <a
              href="/work/villa-32"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Villa Olivieri"
            data-work-title="SP/ARC_05"
            data-work-copy="The concept was clear: generate the feeling that you live in the garden. Facilitating easy access to the outdoor relaxation areas was central to this residence in Switzerland.&nbsp;"
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--5"
          >
            <img
              loading="eager"
              grid-img=""
              src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe075/66601c7c6b0d48cf88bbe191_Preview.jpg"
              alt=""
              className="grid-img"
            ></img>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">05</div>
              <div className="grid-mobi_name">Villa Olivieri</div>
            </div>
            <a
              href="/work/villa-olivieri"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Villa Palmitos"
            data-work-title="SP/ARC_06"
            data-work-copy="Villa Palmitos is a two-unit house designed for luxury indoor-outdoor living."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--6"
          >
            <img
              loading="eager"
              grid-img=""
              src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe075/66601c7c6b0d48cf88bbe199_Preview.jpg"
              alt=""
              className="grid-img"
            ></img>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">06</div>
              <div className="grid-mobi_name">Villa Palmitos</div>
            </div>
            <a
              href="/work/villa-palmitos"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Zandvliet Wastewater Treatment Works "
            data-work-title="SP/INF_07"
            data-work-copy="The administration building at Zandvliet Wastewater Treatment Works (WWTW) facilitates fluid interactions between the inside and the outside functions at the site and between employees."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--7"
          >
            <img
              loading="eager"
              grid-img=""
              src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe075/66601c7c6b0d48cf88bbe19a_Preview.jpg"
              alt=""
              className="grid-img"
            ></img>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">07</div>
              <div className="grid-mobi_name">
                Zandvliet Wastewater Treatment Works{" "}
              </div>
            </div>
            <a
              href="/work/zandvliet-water-treatment-administration-building"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Zevenrivieren Farmhouse Manor"
            data-work-title="SP/INT_08"
            data-work-copy="True to its Dutch name, translating to ‘Seven Rivers’, this restoration project on an operational seven-hectare farm in Stellenbosch preserved the authentic Cape Dutch style of the building’s interior and exterior architecture."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--8"
          >
            <img
              loading="eager"
              grid-img=""
              src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe075/66601c7c6b0d48cf88bbe1aa_Preview.jpg"
              alt=""
              className="grid-img"
            ></img>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">08</div>
              <div className="grid-mobi_name">
                Zevenrivieren Farmhouse Manor
              </div>
            </div>
            <a
              href="/work/zevenrivieren"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="Faure New Water Scheme "
            data-work-title="SP/INF_09"
            data-work-copy="The Faure New Water Scheme (FNWS) will form a cornerstone of the City of Cape Town's bulk water supply network by turning wastewater into potable water. On completion, this water re-use plant will be the largest of its kind in the world."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--9"
          >
            <img
              loading="eager"
              grid-img=""
              src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe075/66601c7c6b0d48cf88bbe1b0_Preview.jpg"
              alt=""
              className="grid-img"
            ></img>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">09</div>
              <div className="grid-mobi_name">Faure New Water Scheme</div>
            </div>
            <a
              href="/work/faure-nws"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
          <div
            data-main-title="House Higgovale "
            data-work-title="SP/ARC_10"
            data-work-copy="Drawing inspiration from its close proximity to Table Mountain, this single residential home seamlessly integrates stone textures that take inspiration from the natural surroundings."
            role="listitem"
            className="image-grid_item w-dyn-item image-grid_item--10"
          >
            <img
              loading="eager"
              grid-img=""
              src="https://cdn.prod.website-files.com/66601c7c6b0d48cf88bbe075/66601c7c6b0d48cf88bbe230_Preview.jpg"
              alt=""
              className="grid-img"
            ></img>
            <div className="grid-img-number_holder">
              <div className="grid-img_number">10</div>
              <div className="grid-mobi_name">House Higgovale </div>
            </div>
            <a
              href="/work/house-higgovale"
              className="image-item_overlay w-inline-block"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PhotoGridSection };
