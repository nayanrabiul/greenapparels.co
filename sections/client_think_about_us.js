import React from "react";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
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

const reviews = [
    {
        "name": "John Doe",
        "review": "I recently purchased a denim jacket from Green Apparels and I am blown away by the quality. It fits perfectly and the fabric is incredibly durable. I have received so many compliments on it and I am very happy with my purchase."
    },
    {
        "name": "Jane Smith",
        "review": "I work in the hospitality industry and I recently purchased some workwear from Green Apparels. The quality of the clothing is excellent and the turnaround time was quick and efficient. I would definitely recommend this company to anyone in need of workwear."
    },
    {
        "name": "Bob Johnson",
        "review": "I ordered sportswear for my athletic team from Green Apparels and the results were fantastic. The clothing is comfortable, functional, and looks great. I was very impressed with the quality of the products and the service provided by the company."
    },
    {
        "name": "Sarah Davis",
        "review": "I recently placed a large order for outerwear with Green Apparels and I couldn't be happier with the results. The clothing is well-made, stylish, and protects against the elements perfectly. I would definitely use this company for future orders."
    },
    {
        "name": "Tom Wilson",
        "review": "I purchased a suit from Green Apparels for a formal event and I received so many compliments. The fit was perfect, the material was high-quality, and the overall look was sleek and sophisticated. I would definitely recommend this company to anyone in need of a suit."
    }
]

const Client_think_about_us = () => {
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
                                {reviews.map((person, index) => (
                                    <div key={index} className="p-4">
                                        <div  className="mb-12 md:mb-0 border border-second p-4 rounded-xl">
                                            {/*<div className="flex justify-center mb-6">*/}
                                            {/*    <img*/}
                                            {/*        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"*/}
                                            {/*        className="rounded-full shadow-lg w-32"*/}
                                            {/*    />*/}
                                            {/*</div>*/}
                                            <h5 className="text-xl font-semibold mb-4 text-second">{person.name}</h5>
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
                                                {person.review}
                                            </p>

                                            <ul className="flex justify-center mb-0">
                                                <li>
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
                                                <li>
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
                                                <li>
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
                                                <li>
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
                                                <li>
                                                    <svg
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="star-half-alt"
                                                        className="w-4 text-yellow-500"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 536 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
                                                        ></path>
                                                    </svg>
                                                </li>
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
