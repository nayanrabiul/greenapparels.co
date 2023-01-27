import Image from "next/image";
import React, {useState} from "react";

const Swot = () => {


    return (
        <div className="w-full mt-16 bg-[#4E6C50] ">
            <div className="container bg-[#4E6C50] flex flex-col justify-center items-center space-y-4 p-4 md:m-8">
                <h2 className="text-center text-[#0E2007] md:text-5xl md:font-semibold ">SOLUTION PROVIDED BY<br/>
                    Green Apparel </h2>

                <Image
                    src={'/swot/swot.svg'}
                    alt="logo"
                    className="w-[70%] "
                    width={1}
                    height={1}
                    onClick={() => toggleTab(index)}
                />


            </div>
        </div>

    );
};

export default Swot;
