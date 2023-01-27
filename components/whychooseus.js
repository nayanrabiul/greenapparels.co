import Image from "next/image";
import React from "react";

const data = [
  {
    icon: "/whychooseus/1.svg",
    title: "Trusted PartnerShip",
    description:
      "We will provide the best price for you. from the beat quality we give we will give you a special price compared to other places, and we will give you other bonuses",
  },
  {
    icon: "/whychooseus/2.svg",
    title: "Integrity",
    description:
      "We will provide the best price for you. from the beat quality we give we will give you a special price compared to other places, and we will give you other bonuses",
  },
  {
    icon: "/whychooseus/3.svg",
    title: "stability",
    description:
      "We will provide the best price for you. from the beat quality we give we will give you a special price compared to other places, and we will give you other bonuses",
  },
  {
    icon: "/whychooseus/4.svg",
    title: "Greater Flexibility",
    description:
      "We will provide the best price for you. from the beat quality we give we will give you a special price compared to other places, and we will give you other bonuses",
  },
];

const Whychooseus = () => {
  return (
    <div className="w-full mt-12">
      <div className="container text-white ">
        <h2 className="text-center text-[#395144]  md:text-6xl md:font-bold  md:mt-16 lg:mt-20">Why Choose Us</h2>

        <div className="py-4 md:py-8 lg:p-8 flex flex-wrap justify-center">
          {data.map((item, index) => (
            <div className="w-1/2  p-2 flex flex-col items-center space-y-4 text-center" key={index}>
              <Image
                src={item.icon}
                alt="logo"
                className="w-[48px] h-[48px]"
                width={1}
                height={1}
              />
              <h4  className={'text-center text-[#AA8B56]'}>{item.title}</h4>
              <p className="w-[65%] text-center text-[#F0EBCE]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;
