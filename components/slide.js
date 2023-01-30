import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    title: "Denim",
    description: "Short description of the product goes here",
    link: "",
    image: "/slide/denims.jpg",
  },
  {
    title: "Jacket",
    description: "Short description of the product goes here",
    link: "",
    image: "/slide/jacket.jpg",
  },
  {
    title: "Out Ware",
    description: "Short description of the product goes here",
    link: "",
    image: "/slide/outware.jpg",
  },
  {
    title: "Sport Wear",
    description: "Short description of the product goes here",
    link: "",
    image: "/slide/sportwear.jpg",
  },
  {
    title: "Suits",
    description: "Short description of the product goes here",
    link: "",
    image: "/slide/suits.jpg",
  },
];
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
const Slide = () => {



  return (
    <div className="w-full">
      <Slider {...settings}>

        {data.map((slide, index) => (
          <div className="w-full z-10 relative" key={index}>
            <div className="relative w-full rounded-md overflow-hidden">
              <Image
                className="w-full h-[444px] lg:h-[600px]  object-cover"
                src={slide.image}
                alt="alt"
                height={500}
                width={600}
              />
            </div>
            <div className="absolute w-full h-full p-[16%]  top-0 flex flex-col items-left justify-center">
              <h1 className="text-third mt-32">{slide.title}</h1>
              <h3 className=" text-second">{slide.description}</h3>
            </div>
          </div>
        ))}

      </Slider>
    </div>
  );
};

export default Slide;
