import Image from "next/image";
import React, {useState} from "react";

const data = [
    {
        icon: "/factory/logo/logo.svg",
        name: "Garments Name",
        area: "150acr",
        production: "1245+",
        description:
            "red to other places, and we will give you other bonusesWe will provide the best price for you. from the beat quality we give we will give you a special price compa",
    },
    {
        icon: "/factory/logo/logo.svg",
        name: "Garments Name",
        area: "150acr",
        production: "1245+",
        description:
            " price for you. from the beat quality we give we will give you a special price compared to  We will provide the bestother places, and we will give you other bonuses",
    },
    {
        icon: "/factory/logo/logo.svg",
        name: "Garments Name",
        description:
            "he beat quality we give we will give you a special price compared to other places, and we We will provide the best price for you. from twill give you other bonuses",
    },
    {
        icon: "/factory/logo/logo.svg",
        name: "Garments Name",
        area: "150acr",
        production: "1245+",
        description:
            " you otheWe will provide the best price for you. from the beat quality we give we will give you a special price compared to other places, and we will giver bonuses",
    },
    {
        icon: "/factory/logo/logo.svg",
        name: "Garments Name",
        area: "150acr",
        production: "1245+",
        description:
            "he beat quality we give we will give you a special price compared to other places, and we We will provide the best price for you. from twill give you other bonuses",
    },
];

const Affiliations = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="w-full mt-16 bg-[#001201] ">
            <div className="container text-white py-8">
                <h2 className="text-center text-[#395144]  md:text-6xl md:font-bold  md:mt-16 lg:mt-20">Our Affiliated
                    Manufactureing Units </h2>
                {/* company logo and tab  */}

                <div className="my-8 flex flex-col justify-center items-center space-x-8">
                    <div className=" px-4 w-full flex justify-center  space-x-2 lg:space-x-20">
                        {data.map((item, index) => (
                            <div key={index}
                                 className={`${
                                     toggleState === index ? "bg-green-900 opacity-80" : ""
                                 } p-4 rounded-t-lg `}
                            >
                                <Image
                                    src={item.icon}
                                    alt="logo"
                                    className="w-[64px] h-[64px]"
                                    width={1}
                                    height={1}
                                    onClick={() => toggleTab(index)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* content  */}
                    <div className="w-[90%]">
                        {data.map((item, index) => (
                            <div key={index}
                                 className={`${
                                     toggleState === index ? " block " : "hidden"
                                 } w-full bg-[#151616] opacity-80  p-8   rounded-xl `}
                            >
                                <div className="w-full ">
                                    <div className="flex justify-start">
                                        <div className="w-full md:w-[30%] flex justify-start items-center">
                                            <div
                                                className={`bg-slate-300 opacity-80  p-4 rounded-t-lg `}
                                            >
                                                <Image
                                                    src={item.icon}
                                                    alt="logo"
                                                    className="w-[114px] h-[114px] lg:w-[164px] lg:h-[164px]"
                                                    width={1}
                                                    height={1}
                                                    onClick={() => toggleTab(index)}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-[70%] flex flex-col justify-start space-y-2 text-[#177B33] ml-4">
                                            <div className={'flex justify-start items-center '}>

                                                <h2>{item.name}</h2>
                                            </div>
                                            <div className={'flex justify-start items-center'}>

                                                <span >Area:</span><h2 className={'text-[#F57328]'}>{item.area}</h2>
                                            </div>
                                            <div className={'flex justify-start items-center'}>

                                                <span>Production Capacity :</span> <h2 className={'text-[#F57328]'}>{item.production}</h2>
                                            </div>
                                            <div className={'flex justify-start items-center'}>

                                                {item.description}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Affiliations;
