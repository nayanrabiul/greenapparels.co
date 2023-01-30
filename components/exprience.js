import Image from "next/image";
import React, {useState} from "react";


import {motion} from 'framer-motion';


import {planetVariants, staggerContainer, fadeIn} from '../utils/motion';


const data = [
    {title: "Imorted Machines", number: "30+"},
    {title: "Clients we Served", number: "30+"},
    {title: "Smapling Section", number: "30+"},
    {title: "Recuring clients", number: "30+"},

]
const Exprience = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="w-full  bg-[#4E6C50] py-16 md:py-32" id={'Exprience'}>
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

                            <h3 className="  border-b-4 md:border-l-4 md:border-b-0 border-third drop-shadow-lg shadow-th text-left text-[#0E2007] md:text-5xl md:font-bold px-8 py-4 ">10
                                + years of <br /> <span className={'text-6xl'}>EXPRIENCE</span> </h3>
                            <p className={'text-third text-center mt-3 mb-12 md:m-8 w-[70%]'}> We provide World Class
                                solluton Unmatched to any other company</p>

                        </motion.div>


                        <div className={'w-full md:w-[63%] '}>
                            <div className={'grid grid-cols-2 gap-8'}>
                                {data.map((item, index) => (

                                    <motion.div key={index}
                                        variants={fadeIn('up', 'spring', index * 0.5, 1)}
                                        className=" md:p-6 p-3 bg-[#19320F] border border-gray-500  rounded-lg drop-shadow-xl hover:bg-[#18220F] justify-center items-center text-center"
                                    >
                                        <h3 className="font-bold  text-second">{item.title}</h3>
                                        <h2 className="font-bold text-third">{item.number}</h2>

                                    </motion.div>
                                ))}
                            </div>
                        </div>


                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default Exprience;
