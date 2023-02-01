import Image from "next/image";
import React from "react";

import {motion} from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const data = [
    {
        icon: "/whychooseus/1.svg",
        title: "Trusted PartnerShip",
        description:
            "we favor long term strategic partnerships with our clients which is reflected in the time we have enjoyed relationships with some of the world’s major brands",
    },
    {
        icon: "/whychooseus/2.svg",
        title: "Integrity",
        description:
            "we believe firmly that our integrity and professionalism coupled with our multi category offer sets us apart.",
    },
    {
        icon: "/whychooseus/3.svg",
        title: "stability",
        description:
            "we seek to re-invest to secure a long and prosperous future for about organization and ensure a stable and reliable supply  chain for our clients",
    },
    {
        icon: "/whychooseus/4.svg",
        title: "Greater Flexibility",
        description:
            "To pioneer as the ever growing vendor of choice and recognized organization for quality and innovative supply and services across all the continents."    },
];

const Whychooseus = () => {
    return (
        <div className="w-full py-16 md:py-32" id={'Whychooseus'}>
            <div className="container ">
                <motion.div
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.1}}
                    className={` mx-auto flex flex-col`}
                >
                    <h1 className="text-center text-first py-4">Why Choose Us</h1>
                    <h4 className={'text-sm md:text-lg lg:text-xl md:w-[70%] mx-auto text-center text-second '}>In short, our clients' satisfaction and belief in our products is the foundation of our business, and we are committed to making it a priority in everything we do.</h4>

                        <div className="md:p-8 flex flex-wrap justify-center">
                            {data.map((item, index) => (
                                <div className="w-1/2  py-6 flex flex-col items-center space-y-4 " key={index}>
                                    <Image
                                        src={item.icon}
                                        alt="logo"
                                        className="w-[48px] h-[48px]"
                                        width={1}
                                        height={1}
                                    />
                                    <h3 className={'text-center text-second'}>{item.title}</h3>
                                    <p className="w-[65%] text-center text-third">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
            </div>
        </div>
    );
};

export default Whychooseus;
