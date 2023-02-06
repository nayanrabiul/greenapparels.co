import Image from "next/image";
import React, {useState} from "react";


const Swot = () => {


    return (
        <div className="w-full py-8 md:py-16 flex  flex-col items-center">
            <div className=" container text-first flex flex-col justify-center items-center rounded-xl p-4 ">
                <h2 className="text-center text-first ">Sollution Provided By<br/>
                </h2>
                <h1 className="text-center text-first py-4 border-b-2 border-second mb-4">GREEN APPARELS</h1>

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
