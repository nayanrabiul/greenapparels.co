import Image from "next/image";
import React, { useState } from "react";
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

const Affiliations = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="w-full mt-16 bg-[#001201] ">
      <div className="container text-white py-8">
        <h2 className="text-center">Our Affiliated Manufactureing Units</h2>
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
          <div className="w-full md:w-[70%]">
            {data.map((item, index) => (
              <div key={index}
                className={`${
                  toggleState === index ? " block " : "hidden"
                } w-full bg-green-900 opacity-80  p-8   rounded-xl `}
              >
                <div className="w-full">
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
                    <div className="w-full md:w-[70%] flex justify-start items-center ml-2">
                      {" "}
                      {item.description}
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
