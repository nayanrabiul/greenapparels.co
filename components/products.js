import Image from "next/image";
import React, {useState} from "react";
import Sub_Products from "./sub_products";

const data = [
    {
        image: '/products/denims.png',
        title: "Denim",
        description: "Short description of the product goes here",
        description_hover: " lorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamShort description of the product goes here",
        link: "",
    },

    {
        image: '/products/outware.jpg',
        title: "Out Ware",
        description: "Short description of the product goes here",
        description_hover: " lorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamShort description of the product goes here",

        link: "",
    },
    {
        image: '/products/sportwear.jpg',
        title: "Sport Wear",
        description: "Short description of the product goes here",
        description_hover: " lorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamShort description of the product goes here",

        link: "",
    },
    {
        image: '/products/suits.png',
        title: "Suits",
        description: "Short description of the product goes here",
        description_hover: " lorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamShort description of the product goes here",

        link: "",
    }, {
        image: '/products/ovan.png',
        title: "Ovan",
        description: "Short description of the product goes here",
        description_hover: " lorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamShort description of the product goes here",

        link: "",
    }, {
        image: '/products/jacket.jpg',
        title: "jacket",
        description: "Short description of the product goes here",
        description_hover: " lorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamlorem ipsamShort description of the product goes here",

        link: "",
    },
];



const Products = () => {
    const [hoverdiv,setHoverDiv] = useState(false);

    return (
        <div className="w-full py-16 md:py-32 " id={'Products'}>
            <div className="container  space-y-8 ">
                <h2 className="text-center text-[#395144]  md:text-6xl md:font-bold  md:mt-16 lg:mt-20">Our Products</h2>





                        <div className="flex flex-wrap ">
                            {data.map((item, index) => (

                                <Sub_Products item={item} key={index}/>

                            ))}
                        </div>





            </div>
        </div>
    );
};

export default Products;
