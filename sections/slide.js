import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {

  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1800,
  pauseOnHover: false,
  arrows: false
};

const Slide = ({data}) => {

  return (
    <div className="w-full">
      <Slider {...settings}>

        {data.map((slide, index) => (
          <div className="w-full z-10 relative" key={index}>
            <div className="relative w-full rounded-md overflow-hidden">
              <Image
                className="w-full h-[500px] md:h-[555px] lg:h-[755px]  object-cover"
                src={slide.image}
                alt="alt"
                height={1023}
                width={1024}
              />
            </div>
            <div className="absolute w-full h-full p-[16%]  top-0 flex flex-col items-left justify-center">
              <h1 className="text-third mt-32">{slide.heading}</h1>
              <h3 className=" text-second">{slide.description}</h3>
            </div>
          </div>
        ))}

      </Slider>
    </div>
  );
};

export default Slide;
