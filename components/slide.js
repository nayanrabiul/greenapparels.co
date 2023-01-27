import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



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
const Slide = () => {


  return (
    <div className="w-full">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2400}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        focusOnSelect={false}
        infinite
        itemClass=""
        minimumTouchDrag={80}
        customLeftArrow={<div />}
        customRightArrow={<div />}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        pauseOnHover={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },

          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
        }}
      >
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
            <div className="absolute w-full h-full px-[16%]  top-0 flex flex-col items-left justify-center">
              <h1 className="text-white">{slide.title}</h1>
              <h3 className=" text-white">{slide.description}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slide;
