
import Image from "next/image";
import React, {useState} from "react";

import {motion} from "framer-motion";
import {fadeIn} from "../utils/motion";

const Sub_Products = ({item}) => {
    const [hoverdiv, setHoverDiv] = useState(false);
    return (

        <div className=" p-2 md:p-4 flex flex-col justify-center items-center text-center ">

            {!hoverdiv ?
                <motion.div
                    variants={fadeIn('up', 'tween', 0.3, 1)}

                    className={` h-[200px] md:h-[300px] object-cover rounded-lg  producti`}
                    onMouseEnter={() => setHoverDiv(true)}
                    onClick={() => setHoverDiv(true)}
                    initial={{opacity: 1}}
                    exit={{opacity: 0, transition: {duration: 0.2}}}
                >
                    <Image
                        src={item.image}
                        className={'h-[200px] md:h-[300px] rounded-xl object-cover'}
                        alt="alt"
                        height={300}
                        width={300}
                    />
                </motion.div>

                :

                < motion.div
                    variants={fadeIn('up', 'tween', 0.3, 1)}

                    initial={{opacity: 1}}
                    exit={{opacity: 0, transition: {duration: 0.2}}}
                    onMouseOut={() => setHoverDiv(false)}
                    onClick={() => setHoverDiv(false)}
                    className={'h-[200px] md:h-[300px] flex flex-col justify-center items-center'}
                >
                    <div className={'h-[300px] md:max-w-[80%] text-second text-center p-1  md:px-4 md:py-2 overflow-hidden border border-third rounded-xl'} >
                        <h3 className={'text-third text-center text-center'}>{item.heading}</h3>
                        <p className={'md:text-md text-center'}>{item.h_description} </p>
                    </div>

                </motion.div>

            }

            <h3 className={'text-[#AA8B56] text-center'}>{item.title}</h3>
            <p className={'text-[#F0EBCE] md:text-md text-center'}>{item.description}</p>
        </div>

    )
}
export default Sub_Products;