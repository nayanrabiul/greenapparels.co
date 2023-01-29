import Image from "next/image";
import React, {useState} from "react";


const Swot = () => {


    return (
        <div className="w-full  bg-[#4E6C50] py-16 md:py-32">
            <div className="container bg-[#4E6C50] flex flex-col justify-center items-center space-y-4 p-4 ">
                <h2 className="text-center text-[#0E2007] ">SOLUTION PROVIDED BY<br/>
                    Green Apparel </h2>

                <Image
                    src={'/swot/swot.svg'}

                    alt="logo"
                    className="w-[90%] "
                    width={1}
                    height={1}
                    onClick={() => toggleTab(index)}
                />


            </div>
        </div>

    );
};

export default Swot;
