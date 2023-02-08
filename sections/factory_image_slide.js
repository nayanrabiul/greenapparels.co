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


const data = [{
    title: "A WORLD-CLASS GARMENT FACTORY IN BANGLADESH",
    description: "Short description of the product goes here",
    link: "",
    image: "/slide/factory/factory_hole.png",
}, {
    title: "SEWING FLOOR",
    description: "Short description of the product goes here",
    link: "",
    image: "/slide/factory/SEWING_FLOOR.jpg",
}, {
    title: "CUTTING FLOOR",
    description: "Short description of the product goes here",
    link: "",
    image: "/slide/factory/CUTTING_FLOOR.jpg"
}, {
    title: "Sewinig Machine",
    description: "Short description of the product goes here",
    link: "",
    image: "/slide/factory/Sewinig_Machine.jpg"
},

];
const Factorys = () => {
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
                            <h2 className="mb-2  font-bold tracking-tight text-second">{factory.title}</h2>
                            <p className="mb-3 font-normal text-third">Here are the biggest
                                enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                </div>

            ))}
        </Slider>
    </div>);
};

export default Factorys;
