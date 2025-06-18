import "./Banner.css";
import { useState, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Banner() {
  //Should be fetched from an API
  const [banners, setBanners] = useState([
    "https://media.istockphoto.com/id/2151107006/photo/a-living-room-with-a-gray-sofa-white-and-hardwood-paneled-wall-background-and-decoration.jpg?s=1024x1024&w=is&k=20&c=osv2gxKGsgSoYwz1i8PlfxUHgkDo907yRNK7iK6SLuM=",
    "https://media.istockphoto.com/id/1419490654/photo/cozy-modern-living-room-interior-have-sofa-on-empty-dark-blue-wall-background.jpg?s=1024x1024&w=is&k=20&c=XJz3LUZ0IMy-HCog29EvyN1yK18FDRE2ItVafDWE_x8=",
    "https://media.istockphoto.com/id/1415799772/photo/home-interior-with-vintage-furniture.jpg?s=1024x1024&w=is&k=20&c=n0h3Vpk-pLM7PK_kUu5WxoO4zRUTf6OMZV1dYv9CyRA=",
  ]);

  //Map through the banners to create img elements
  const banners_cycle = banners.map((banner, index) => (
    <img key={index} src={banner} alt={`Banner ${index + 1}`} />
  ));

  // Start the slideshow when the component mounts
  const ref_banners_cycle = useRef(null);
  //Scroll to the next banner
  function scrollToNext() {
    //Correct the scroll if it is stuck between two banners
    if (ref_banners_cycle.current) {
      const clientWidth = ref_banners_cycle.current.clientWidth;
      const scrollLeft = ref_banners_cycle.current.scrollLeft;

      // If the scroll position is not at the start, correct it
      if (scrollLeft % clientWidth !== 0) {
        ref_banners_cycle.current.scrollTo({
          left: Math.round(scrollLeft / clientWidth) * clientWidth,
          behavior: "smooth",
        });
        return;
      }
    }

    //If the end of cycle is reached, reset the scroll position
    if (ref_banners_cycle.current) {
      const scrollWidth = ref_banners_cycle.current.scrollWidth;
      const clientWidth = ref_banners_cycle.current.clientWidth;
      const scrollLeft = ref_banners_cycle.current.scrollLeft;

      if (scrollLeft + clientWidth >= scrollWidth) {
        ref_banners_cycle.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        return;
      }
    }

    if (ref_banners_cycle.current) {
      ref_banners_cycle.current.scrollBy({
        left: ref_banners_cycle.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }
  //Scroll to the previous banner
  function scrollToPrev() {
    //Correct the scroll if it is stuck between two banners
    if (ref_banners_cycle.current) {
      const clientWidth = ref_banners_cycle.current.clientWidth;
      const scrollLeft = ref_banners_cycle.current.scrollLeft;

      // If the scroll position is not at the start, correct it
      if (scrollLeft % clientWidth !== 0) {
        ref_banners_cycle.current.scrollTo({
          left: Math.round(scrollLeft / clientWidth) * clientWidth,
          behavior: "smooth",
        });
        return;
      }
    }
    if (ref_banners_cycle.current) {
      ref_banners_cycle.current.scrollBy({
        left: -ref_banners_cycle.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }
  function cycleBanners(direction) {
    if (direction === "prev") {
      scrollToPrev();
    } else {
      scrollToNext();
    }
  }

  setInterval(function () {
    scrollToNext();
  }, 4000);

  return (
    <div className="banner-custom">
      <button
        className="cycle-button prev"
        onClick={() => cycleBanners("prev")}
      >
        <IoIosArrowBack className="icon" />
      </button>
      <div className="banners-cycle" ref={ref_banners_cycle}>
        {banners_cycle}
      </div>
      <button
        className="cycle-button next"
        onClick={() => cycleBanners("next")}
      >
        <IoIosArrowForward className="icon" />
      </button>
    </div>
  );
}
