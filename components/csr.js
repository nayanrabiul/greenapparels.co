import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Csr = () => {
  return (
    <div className="bg-[#C1C1C1]">
      <div className="container p-4">
        <h2>CSR ACCREDITIONS</h2>
        <div className="w-full">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={2400}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            focusOnSelect={false}
            infinite
            itemClass=""
            minimumTouchDrag={80}
            customLeftArrow={<div />}
            customRightArrow={<div />}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            pauseOnHover={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 6,
              },

              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 3,
              },
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div className="p-4 mb-5" key={i}>
                <Image
                  className="w-full h-[60px] lg:h-[100px] object-contain shadow-lg"
                  src={`/csr/${i}.png`}
                  alt="alt"
                  height={224}
                  width={224}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Csr;
