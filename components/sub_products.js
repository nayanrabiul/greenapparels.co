import Image from "next/image";
import React, {useState} from "react";

import {motion} from "framer-motion";
import {fadeIn} from "../utils/motion";

const Sub_Products = ({item}) => {
    const [hoverdiv, setHoverDiv] = useState(false);
    return (

        <div className="w-1/2 lg:w-1/3 p-2 md:p-4 flex flex-col justify-center items-center ">
            <div className={'w-full'}></div>
            {!hoverdiv ?
                <motion.div
                    variants={fadeIn('up', 'tween', 0.3, 1)}

                    className={` h-[200px] md:h-[300px] object-cover rounded-lg  producti`}
                    onMouseEnter={() => setHoverDiv(true)}
                    initial={{opacity: 1}}
                    exit={{opacity: 0, transition: {duration: 0.2}}}
                >
                    <Image
                        src={item.image}
                        className={'h-[200px] md:h-[300px]'}
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
                    className={'h-[200px] md:h-[300px] flex flex-col justify-center items-center'}
                >
                    <p className={'text-second text-center px-4 py-2 hidden lg:block'}> {item.description_hover} </p>

                </motion.div>

            }

            <h3 className={'text-[#AA8B56]'}>{item.title}</h3>
            <p className={'text-[#F0EBCE]'}>{item.description}</p>
        </div>

    )
}
export default Sub_Products;