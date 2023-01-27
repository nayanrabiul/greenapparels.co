import Image from "next/image";
import React, {useState} from "react";

const data = [
    {
        icon: "/whychooseus/1.svg",
        title: "Short Title",
        description:
            "red to other places, and we will give you other bonusesWe will provide the best price for you. from the beat quality we give we will give you a special price compa",
    },
    {
        icon: "/whychooseus/2.svg",
        title: "Short Title",
        description:
            " price for you. from the beat quality we give we will give you a special price compared to  We will provide the bestother places, and we will give you other bonuses",
    },
    {
        icon: "/whychooseus/1.svg",
        title: "Short Title",
        description:
            "he beat quality we give we will give you a special price compared to other places, and we We will provide the best price for you. from twill give you other bonuses",
    },
    {
        icon: "/whychooseus/2.svg",
        title: "Short Title",
        description:
            " you otheWe will provide the best price for you. from the beat quality we give we will give you a special price compared to other places, and we will giver bonuses",
    },
    {
        icon: "/whychooseus/1.svg",
        title: "Short Title",
        description:
            "he beat quality we give we will give you a special price compared to other places, and we We will provide the best price for you. from twill give you other bonuses",
    },
];

const Exprience = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="w-full mt-16 bg-[#4E6C50] ">
            <div className="container text-white py-8">
                <div className={'flex justify-around w-full'}>

                    <div
                        className={' bg-[#19320F] flex  flex-col md:flex-row   justify-center max-w-[350px]  m-4  items-center space-x-8 p-4 rounded-xl border-[#AA8B56] shadow-xl '}>
                        <h2 className={'text-[#AA8B56] text-center'}>Recuring <br/> clients
                        </h2>
                        <h2 className={'text-[#4E6C50] '}>30+</h2>
                    </div>
                    <div
                        className={'md:relative right-[60px] bg-[#19320F] flex flex-col md:flex-row   justify-center max-w-[350px]  m-4  items-center space-x-8 p-4 rounded-xl border-[#AA8B56] shadow-xl '}>
                        <h2 className={'text-[#AA8B56] text-center'}>Recuring <br/> clients
                        </h2>
                        <h2 className={'text-[#4E6C50] '}>30+</h2>
                    </div>
                </div>
                <h2 className="text-center text-[#0E2007] md:text-5xl md:font-bold p-4">10 + years of <br/> EXPRIENCE
                </h2>

                <div className={'relative flex justify-around w-full'}>

                    <div
                        className={'md:relative left-[60px] bg-[#19320F] flex flex-col md:flex-row   justify-center max-w-[350px]  m-4  items-center space-x-8 p-4 rounded-xl border-[#AA8B56] shadow-xl '}>
                        <h2 className={'text-[#AA8B56] text-center'}>Recuring <br/> clients
                        </h2>
                        <h2 className={'text-[#4E6C50] '}>30+</h2>
                    </div>
                    <div
                        className={' bg-[#19320F] flex flex-col md:flex-row justify-center max-w-[350px]  m-4  items-center space-x-8 p-4 rounded-xl border-[#AA8B56] shadow-xl '}>
                        <h2 className={'text-[#AA8B56] text-center'}>Recuring <br/> clients
                        </h2>
                        <h2 className={'text-[#4E6C50] '}>30+</h2>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Exprience;
