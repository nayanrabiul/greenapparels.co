import Image from "next/image";
import React from "react";

const data = [
  {
    title: "Denim",
    description: "Short description of the product goes here",
    link: "",
  },

  {
    title: "Out Ware",
    description: "Short description of the product goes here",
    link: "",
  },
  {
    title: "Sport Wear",
    description: "Short description of the product goes here",
    link: "",
  },
  {
    title: "Suits",
    description: "Short description of the product goes here",
    link: "",
  },
];
const images = [
  "/slide/denims.jpg",
  "/slide/suits.jpg",
  "/slide/sportwear.jpg",
  "/slide/outware.jpg",
];

const Products = () => {
  return (
    <div className="w-full mt-16 ">
      <div className="container text-white space-y-8">
        <h2 className="text-center">Our Products</h2>

        <div className="flex flex-wrap justify-center">
          {data.map((item, index) => (
            <div className="w-full md:w-1/2 lg:w-1/3 p-2 " key={index}>
              <div className="w-full ">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="flex flex-wrap">
                  {images.map((image, index) => (
                    <div className=" w-1/2 p-1 rounded-md overflow-hidden" key={index}>
                      <Image
                        className={`w-full object-cover rounded-lg `}
                        src={image}
                        alt="alt"
                        height={500}
                        width={600}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
