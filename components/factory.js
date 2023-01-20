import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
  {
    title: "Denim",
    description: "escription of the  Short dproduct goes here",
    link: "",
    image: "/factory/francois-le-nguyen-pouTfHUG430-unsplash.jpg",
  },
  {
    title: "Jacket",
    description: "on of the product goe Short descriptis here",
    link: "",
    image: "/factory/lan-deng-quddu_dZKkQ-unsplash.jpg",
  },
  {
    title: "Out Ware",
    description: "oduct goes h Short description of the prere",
    link: "",
    image: "/factory/remy-gieling-alxnBRdFGJI-unsplash.jpg",
  },
  {
    title: "Sport Wear",
    description: "rt description of the product goes he Shore",
    link: "",
    image: "/factory/rio-lecatompessy-cfDURuQKABk-unsplash.jpg",
  },
];
const Factorys = () => {
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
        shouldResetAutoplay
        showDots
        factoryrClass=""
        factorysTofactory={1}
        swipeable
        pauseOnHover={false}
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
        {data.map((factory, index) => (
          <div className="w-full z-10 relative" key={index}>
            <div className="relative w-full rounded-md overflow-hidden">
              <Image
                className="w-full h-[444px] lg:h-[600px] object-cover"
                src={factory.image}
                alt="alt"
                height={500}
                width={600}
              />
            </div>
            <div className="absolute w-full h-full px-[16%]  top-0 flex flex-col items-left justify-center ">
              <h1 className="text-white">{factory.title}</h1>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Factorys;
