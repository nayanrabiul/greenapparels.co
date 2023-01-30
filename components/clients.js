import Image from "next/image";
import React from "react";


import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const settings = {

    dots: true,
    infinite: true,
    slidesToShow:5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: false,
    arrows: false
};



const Clients = () => {
  return (
    <div className=" py-8 md:py-16">
      <div className="container p-4">
        <h2 className={'text-first text-center my-4'}>Our Cliets</h2>
        <div className="w-full">
      <Slider {...settings}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
              <div className="p-4 mb-5" key={i}>
                <Image
                  className="w-full h-[80px] object-center"
                  src={`/clients/${i}.png`}
                  alt="alt"
                  height={224}
                  width={224}
                />
              </div>
            ))}
      </Slider>
        </div>
      </div>
    </div>
  );
};

export default Clients;
