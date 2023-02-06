import Image from "next/image";
import React, {useRef, useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {planetVariants, staggerContainer, fadeIn} from '../utils/motion';
// import AnimatedCounter from "../components/animated_number_counter";

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const AnimatedCounter = ({ countTo, duration, className }) => {
    return (
        <div className="">
            <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                {({ isVisible }) => (
                    <div style={{ height: 100 }}>
                        {isVisible ? <CountUp className={`${className}`} duration={duration} end={countTo} /> : null}
                    </div>
                )}
            </VisibilitySensor>
        </div>
    );
};



const data = [


    {title: "Recuring clients", number: 97},
    {title: "Clients we Served", number: 40},
    {title: "Smapling Section", number: 37},
    {title: "Imorted Machines", number: 52},

]
const Exprience = () => {



    return (
        <div className="w-full  bg-[#4E6C50] py-8 md:py-16 lg:py-32" id={'Exprience'}>

            <div className="container">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.25}}
                >


                    <div className={'flex flex-wrap'}>


                        <motion.div
                            variants={fadeIn('right', 'tween', 0.2, 1)}
                            className={' w-full md:w-[37%] flex flex-col justify-center items-center '}
                        >
                            <div className={'w-full flex flex-col justify-center items-center text-third'}>
                                <h1>8+</h1>
                                <h3 className=" border-third drop-shadow-lg shadow-th text-left text-[#0E2007] md:text-5xl md:font-bold px-8  flex">
                                    years of

                                </h3>
                                <span
                                    className={'text-5xl border-b-4 border-second text-main font-bold'}>EXPRIENCE</span>
                                <p className={'text-third text-center mt-3 mb-12 md:m-8 w-[70%]'}> We provide World
                                    Class solluton Unmatched to any other company</p>
                            </div>
                        </motion.div>


                        <div className={'w-full md:w-[63%] '}>
                            <div className={'grid grid-cols-2 gap-8'}>
                                {data.map((item, index) => (

                                    <motion.div key={index}
                                                variants={fadeIn('up', 'spring', (index + 1) * 0.5, 1)}
                                                className=" md:p-6 p-3 bg-[#19320F] border border-gray-500  rounded-lg drop-shadow-xl hover:bg-[#18220F] justify-center items-center text-center"
                                    >
                                        <h3 className="font-bold  text-second">{item.title}</h3>


                                        <AnimatedCounter className={'text-4xl font-bold text-third'}
                                                         countTo={item.number}
                                                         duration={(2000 + (index + 1) * 1000) / 1000}/>


                                    </motion.div>
                                ))}
                            </div>
                        </div>


                    </div>


                </motion.div>
            </div>
        </div>);

};

export default Exprience;
