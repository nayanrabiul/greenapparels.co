




import Image from "next/image";
import React from "react";


import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {

    dots: true,
    infinite: true,
    slidesToShow:6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1800,
    autoplaySpeed: 1800,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
};



const Csr = ({data}) => {
    return (
        <div className=" py-8 ">
            <div className=" ">
                <h1 className="text-center text-first pb-4">CSR</h1>

                <div className="w-full">
                    <Slider {...settings}>
                        {data.map((i) => (
                            <div className="p-4 " key={i}>
                                <Image
                                    className="w-full h-[60px] lg:h-[100px] object-contain shadow-lg"
                                    src={i.image}
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

export default Csr;
