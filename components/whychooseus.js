import Image from "next/image";
import React from "react";

import {motion} from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const data = [
    {
        icon: "/whychooseus/1.svg",
        title: "Trusted PartnerShip",
        description:
            "We will provide the best price for you. from the beat quality we give we will give you a special price compared to other places, and we will give you other bonuses",
    },
    {
        icon: "/whychooseus/2.svg",
        title: "Integrity",
        description:
            "We will provide the best price for you. from the beat quality we give we will give you a special price compared to other places, and we will give you other bonuses",
    },
    {
        icon: "/whychooseus/3.svg",
        title: "stability",
        description:
            "We will provide the best price for you. from the beat quality we give we will give you a special price compared to other places, and we will give you other bonuses",
    },
    {
        icon: "/whychooseus/4.svg",
        title: "Greater Flexibility",
        description:
            "We will provide the best price for you. from the beat quality we give we will give you a special price compared to other places, and we will give you other bonuses",
    },
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
