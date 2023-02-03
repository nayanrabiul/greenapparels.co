import Image from "next/image";
import React, {useState} from "react";


const Swot = () => {


    return (
        <div className="w-full  py-16 md:py-32 flex  flex-col items-center">
            <div className="my-4 container bg-[#4E6C50] flex flex-col justify-center items-center space-y-4 p-4 ">
                <h4 className="text-center text-[#0E2007] ">Sollution Provided By<br/>
                </h4>
                <h2 className="text-center text-[#0E2007] md:text-5xl text-first py-4">GREEN APPARELS</h2>

            </div>
            <Image
                src={'/swot/swot.svg'}
                alt="logo"
                className="w-full md:w-[70%] "
                width={1}
                height={1}
                onClick={
                    () => toggleTab(index)
                }
            />
        </div>

    );
};

export default Swot;
