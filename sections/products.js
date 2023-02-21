import Image from "next/image";
import React, {useState} from "react";
import Sub_Products from "../components/sub_products";
import {motion} from 'framer-motion';
import {planetVariants, staggerContainer, fadeIn} from '../utils/motion';


;


const HomeProducts = ({data}) => {
    const [hoverdiv, setHoverDiv] = useState(false);

    return (
        <div className="w-full py-8 md:py-16 lg:py-24" id={'Products'}>
            <div className="container">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.25}}
                >
                    <motion.div
                        variants={fadeIn('right', 'tween', 0.2, 1)}
                    >

                        <h1 className="text-center text-first pb-4 md:pb-6 lg:pb-12">Our
                            Products</h1>


                    </motion.div>


                    <div className="flex flex-wrap justify-center">
                        {data.map((item, index) => (


                            <motion.div key={index}
                                        variants={fadeIn('up', 'spring', index * 0.5, 1)}
                                        className="w-1/2 md:w-1/3 lg:w-1/4"
                            >
                                <Sub_Products  item={item}/>

                            </motion.div>


                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HomeProducts;
