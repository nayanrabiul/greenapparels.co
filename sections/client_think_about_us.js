import React from "react";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


const Client_think_about_us = ({data}) => {

    return (
        <div className="w-full py-8 ">
            <div className="container text-white space-y-8 text-white">

                <h1 className="text-center text-first py-4">Clients Review</h1>
                <p className="mb-6 pb-2 md:mb-12 md:pb-0 text-third w-[80%] mx-auto md:w-[65%] text-center">
                    We believe that a satisfied customer is the best form of advertising, and we strive to build
                    long-lasting relationships with our clients. We listen to their feedback and take their opinions
                    into account when making decisions about product design and manufacturing processes.
                </p>

                <div>
                    <section className="mb-20 text-gray-700">
                        <div className=" text-center">
                            <Slider {...settings}>
                                {data.map((person, index) => (
                                    <div key={index} className="p-4">
                                        <div className="mb-12 md:mb-0 border border-second p-4 rounded-xl">

                                            <h5 className="text-xl font-semibold mb-4 text-second">{person.heading}</h5>
                                            <p className="mb-4 text-third">
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fas"
                                                    data-icon="quote-left"
                                                    className="w-6 pr-2 inline-block"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                                                    ></path>
                                                </svg>
                                                {person.description}
                                            </p>

                                            <ul className="flex justify-center mb-0">

                                                {[...Array(Number(person.h_description?person.h_description:5))].map((item) => (

                                                    <li key={item}>
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="star"
                                                            className="w-4 text-yellow-500"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 576 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                                            ></path>
                                                        </svg>
                                                    </li>
                                                ))}


                                            </ul>
                                        </div>
                                    </div>

                                ))}
                            </Slider>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    );
};

export default Client_think_about_us;
