import Image from "next/image";
import React from "react";

const data = [
    {
        image: '/products/denims.png',
        title: "Denim",
        description: "Short description of the product goes here",
        link: "",
    },

    {
        image: '/products/outware.jpg',
        title: "Out Ware",
        description: "Short description of the product goes here",
        link: "",
    },
    {
        image: '/products/sportwear.jpg',
        title: "Sport Wear",
        description: "Short description of the product goes here",
        link: "",
    },
    {
        image: '/products/suits.png',
        title: "Suits",
        description: "Short description of the product goes here",
        link: "",
    }, {
        image: '/products/ovan.png',
        title: "Ovan",
        description: "Short description of the product goes here",
        link: "",
    }, {
        image: '/products/jacket.jpg',
        title: "jacket",
        description: "Short description of the product goes here",
        link: "",
    },
];


const Products = () => {
    return (
        <div className="w-full mt-16 ">
            <div className="container  space-y-8 ">
                <h2 className="text-center text-[#395144]  md:text-6xl md:font-bold  md:mt-16 lg:mt-20">Our Products</h2>


                <div>

                <div className="flex flex-wrap ">
                    {data.map((item, index) => (
                        <div className="w-1/2 lg:w-1/3 p-2 md:p-4 flex flex-col justify-center items-center" key={index}>
                            <Image
                                className={` h-[200px] md:h-[300px] object-cover rounded-lg `}
                                src={item.image}
                                alt="alt"
                                height={300}
                                width={300}
                            />
                            <h3 className={'text-[#AA8B56]'}>{item.title}</h3>
                            <p className={'text-[#F0EBCE]'}>{item.description}</p>
                        </div>
                    ))}
                </div>
                </div>

            </div>
        </div>
    );
};

export default Products;
