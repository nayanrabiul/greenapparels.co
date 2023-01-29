import Image from "next/image";
import React, {useState} from "react";

const data = [{
    icon: "/whychooseus/1.svg",
    title: "Short Title",
    description: "red to other places, and we will give you other bonusesWe will provide the best price for you. from the beat quality we give we will give you a special price compa",
}, {
    icon: "/whychooseus/2.svg",
    title: "Short Title",
    description: " price for you. from the beat quality we give we will give you a special price compared to  We will provide the bestother places, and we will give you other bonuses",
}, {
    icon: "/whychooseus/1.svg",
    title: "Short Title",
    description: "he beat quality we give we will give you a special price compared to other places, and we We will provide the best price for you. from twill give you other bonuses",
}, {
    icon: "/whychooseus/2.svg",
    title: "Short Title",
    description: " you otheWe will provide the best price for you. from the beat quality we give we will give you a special price compared to other places, and we will giver bonuses",
}, {
    icon: "/whychooseus/1.svg",
    title: "Short Title",
    description: "he beat quality we give we will give you a special price compared to other places, and we We will provide the best price for you. from twill give you other bonuses",
},];

const Exprience = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="w-full  bg-[#4E6C50] py-16 md:py-32" id={'Exprience'}>
            <div className="container">

                <div className={'flex flex-wrap'}>


                    <div className={' w-full md:w-[37%] flex justify-center items-center '}>
                        <h2 className=" mb-12 md:m-8 border-b-4 md:border-l-4 md:border-b-0 border-third  text-left text-[#0E2007] md:text-5xl md:font-bold px-8 py-4 ">10
                            + years of <br/> EXPRIENCE </h2>
                    </div>


                    <div className={'w-full md:w-[63%] '}>
                        <div className={'grid grid-cols-2 gap-8'}>

                            <div
                                className="  bg-[#19320F]  border border-gray-500 rounded-lg drop-shadow-xl hover:bg-[#18220F]  flex items-center justify-start">
                                <div className={' h-full w-full flex flex-col justify-center items-center p-4'}>
                                    <h2 className="font-bold text-xl  text-second h-full">Imported Machine</h2>
                                    <h2 className="font-bold text-third w-full text-center">60+</h2>
                                </div>
                            </div>

                            <div
                                className=" md:p-6 p-3 bg-[#19320F] border border-gray-500  rounded-lg drop-shadow-xl hover:bg-[#18220F] justify-center items-center text-center">
                                <h3 className="font-bold  text-second">Recuring clients</h3>
                                <h2 className="font-bold text-third">40+</h2>
                            </div>

                            <div
                                className=" md:p-6 p-3 bg-[#19320F] border border-gray-500  rounded-lg drop-shadow-xl hover:bg-[#18220F] justify-center items-center text-center">
                                <h3 className="font-bold  text-second">Smapling Section</h3>
                                <h2 className="font-bold text-third">60+</h2>
                            </div>

                            <div
                                className=" md:p-6 p-3 bg-[#19320F] border border-gray-500  rounded-lg drop-shadow-xl hover:bg-[#18220F] justify-center items-center text-center">
                                <h3 className="font-bold  text-second">Clients we Served</h3>
                                <h2 className="font-bold text-third">40+</h2>
                            </div>
                        </div>


                    </div>


                </div>


            </div>
        </div>
    );
};

export default Exprience;
