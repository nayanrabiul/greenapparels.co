import React from "react";

const Contactus = () => {
  return (
    <div className="text-white py-16 md:py-32" id={'Contactus'}>
      <div className="container mx-auto my-4 px-4 lg:px-20 flex justify-center items-center ">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12  rounded-2xl shadow-2xl">
          <div className="flex">
            <h2 className="font-bold uppercase text-second text-center ">Contact with us</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              className="w-full bg-fourth text-third mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name*"
            />
            <input
              className="w-full bg-fourth text-third mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name*"
            />
            <input
              className="w-full bg-fourth text-third mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
            />
            <input
              className="w-full bg-fourth text-third mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Phone*"
            />
          </div>
          <div className="my-4">
            <textarea
              placeholder="Message*"
              className="w-full h-32 bg-fourth text-third mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="my-2 w-1/2 lg:w-1/4">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-fourth text-third p-3 rounded-lg w-full
                      focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
