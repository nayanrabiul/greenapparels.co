import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const settings = {

  dots: true,
  infinite: true,
  slidesToShow:1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1800,
  pauseOnHover: false,
  arrows: false
};

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
    <div className="w-full py-16 md:py-32">
      <Slider {...settings}
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
              <h1 className="text-second shadow-2xl">{factory.title}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Factorys;
