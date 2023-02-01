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
    title: "A WORLD-CLASS GARMENT FACTORY IN BANGLADESH",
    description: "Short description of the product goes here",
    link: "",
    image: "/slide/factory/factory_hole.png",
  },
  {
    title: "SEWING FLOOR",
    description: "Short description of the product goes here",
    link: "",
    image: "/slide/factory/SEWING_FLOOR.jpg",
  }, {
    title: "CUTTING FLOOR",
    description: "Short description of the product goes here",
    link: "",
    image: "/slide/factory/CUTTING_FLOOR.jpg"},{
    title: "Sewinig Machine",
    description: "Short description of the product goes here",
    link: "",
    image: "/slide/factory/Sewinig_Machine.jpg"},

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
                height={1024}
                width={1024}
              />
            </div>
            <div className="absolute w-full h-full px-[16%] pt-[16%]  top-0 flex flex-col items-left justify-center ">
              <h1 className="text-main ">{factory.title}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Factorys;
