import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    pauseOnHover: true,
    arrows: false
};


const Factorys = ({data}) => {
    return (<div className="w-full py-8 lg:py-16">
        <Slider {...settings}
        >
            {data.map((factory, index) => (

                <div key={index} className={'w-full'}>

                    <div className="flex justify-center items-center space-x-2 md:space-x-4 lg:space-x-8">
                        <div className={''}>
                            <Image
                                className="object-fill md:object-contain h-[222px] md:h-[444px] w-full rounded-lg "
                                src={factory.image} alt=""
                                height={512}
                                width={512}>
                            </Image>
                        </div>

                        <div className="">
                            <h2 className="mb-2  font-bold tracking-tight text-second">{factory.heading}</h2>
                            <p className="mb-3 font-normal text-third">{factory.description}</p>
                        </div>
                    </div>
                </div>

            ))}
        </Slider>
    </div>);
};

export default Factorys;
