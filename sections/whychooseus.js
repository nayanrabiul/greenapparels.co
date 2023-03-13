import Image from "next/image";
import React from "react";

import {motion} from 'framer-motion';
import {fadeIn, staggerContainer} from '../utils/motion';

const dataicon = [
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
            "To pioneer as the ever growing vendor of choice and recognized organization for quality and innovative supply and services across all the continents."
    },
];

const Whychooseus = ({data}) => {

    return (
        <div className="w-full py-8 md:py-16 lg:py-24" id={'Whychooseus'}>
            <div className="container ">
                <motion.div
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.1}}
                    className={` mx-auto flex flex-col`}
                >
                    <h1 className="text-center text-first pb-4">{data[0]?.heading}</h1>
                    <h4 className={'text-sm md:text-lg lg:text-xl md:w-[70%] mx-auto text-center text-second '}>
                        {data[0]?.description}</h4>

                    <div className="md:px-8 mt-8 flex flex-wrap justify-center">

                        <div className="w-1/2   flex flex-col items-center space-y-4 ">
                            <Image
                                src={dataicon[0].icon}
                                alt="logo"
                                className="w-[48px] h-[48px]"
                                width={1}
                                height={1}
                            />
                            <h3 className={'text-center text-second'}>{data[1]?.heading}</h3>
                            <p className="w-[65%] text-center text-third">{data[1]?.description}</p>
                        </div>
                        <div className="w-1/2   flex flex-col items-center space-y-4 " >
                            <Image
                                src={dataicon[1].icon}
                                alt="logo"
                                className="w-[48px] h-[48px]"
                                width={1}
                                height={1}
                            />
                            <h3 className={'text-center text-second'}>{data[2]?.heading}</h3>
                            <p className="w-[65%] text-center text-third">{data[2]?.description}</p>
                        </div>
                        <div className="w-1/2   flex flex-col items-center space-y-4 " >
                            <Image
                                src={dataicon[2].icon}
                                alt="logo"
                                className="w-[48px] h-[48px]"
                                width={1}
                                height={1}
                            />
                            <h3 className={'text-center text-second'}>{data[3]?.heading}</h3>
                            <p className="w-[65%] text-center text-third">{data[3]?.description}</p>
                        </div>
                        <div className="w-1/2   flex flex-col items-center space-y-4 " >
                            <Image
                                src={dataicon[3].icon}
                                alt="logo"
                                className="w-[48px] h-[48px]"
                                width={1}
                                height={1}
                            />
                            <h3 className={'text-center text-second'}>{data[4]?.heading}</h3>
                            <p className="w-[65%] text-center text-third">{data[4]?.description}</p>
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Whychooseus;
