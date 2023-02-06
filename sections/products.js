import Image from "next/image";
import React, {useState} from "react";
import Sub_Products from "../components/sub_products";

import {motion} from 'framer-motion';
import {planetVariants, staggerContainer, fadeIn} from '../utils/motion';

const data = [
    {
        image: '/products/denims.png',
        title: "Denim",
        description: "Stylish and long-lasting jeans, jackets, and skirts",
        description_hover: "Our company specializes in producing clothing made from denim, a sturdy and durable cotton twill fabric. Known for its classic blue color, denim is a versatile material that can be used to create a range of clothing items, including jeans, jackets, and skirts. Our focus is on producing high-quality denim clothing that is both stylish and long-lasting.",
        link: "",
    },

    {
        image: '/products/outware.jpg',
        title: "Out Ware",
        description: "Protective clothing for outdoor use.",
        description_hover: "Our focus is on producing high-quality outerwear for outdoor use. Our clothing is designed to protect against the elements, such as rain, wind, and cold weather, while also offering comfort and style. " +
            "Whether you're hiking, camping, or just enjoying the great outdoors, our outerwear will keep you protected and comfortable.",

        link: "",
    },
    {
        image: '/products/sports.jpg',
        title: "Sport Wear",
        description: "Athletic clothing designed with comfort, functionality, and performance in mind",
        description_hover: "Specializes in producing sportswear for individuals engaged in physical activity. Our clothing is designed with comfort, functionality, and performance in mind, to help athletes perform at their best.",

        link: "",
    },
    {
        image: '/products/suits.png',
        title: "Suits",
        description: " Formal attire for men, consisting of a jacket and trousers.",
        description_hover: "We offer a range of suits for men, designed for formal or professional occasions. Our suits are made from high-quality materials and come in a variety of styles and fits to meet the needs and preferences of our customers.",

        link: "",
    }, {
        image: '/products/military.jpg',
        title: "Uniform",
        description: "Clothing worn by law enforcement personnel such as police, army, and firefighters.",
        description_hover: "We manufacture clothing specifically designed for use by law enforcement personnel such as police, army, and firefighters to serve as a means of identification." +
            "Clothing worn by members of a specific profession, organization, or group, typically as a means of identification.",

        link: "",
    }, {
        image: '/products/uniform.png',
        title: "Work Wear",
        description: "Clothing for Hospitality, Healthcare, and Industrial sectors.",
        description_hover: " Our focus is on producing high-quality workwear for Hospitality, Healthcare, and Industrial sectors, ensuring durability and longevity in harsh working environments."
        ,
        link: "",
    },




]
;


const Products = () => {
    const [hoverdiv, setHoverDiv] = useState(false);

    return (
        <div className="w-full py-8 md:py-16 lg:py-32 " id={'Products'}>
            <div className="container  space-y-8 ">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.25}}
                >
                    <motion.div
                        variants={fadeIn('right', 'tween', 0.2, 1)}
                    >

                        <h1 className="text-center text-first py-4">Our
                            Products</h1>


                    </motion.div>


                    <div className="flex flex-wrap ">
                        {data.map((item, index) => (


                            <motion.div key={index}
                                        variants={fadeIn('up', 'spring', index * 0.5, 1)}
                                        className="w-1/2 lg:w-1/3"
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

export default Products;

