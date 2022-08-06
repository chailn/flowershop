import React from "react";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";
// import required modules
import { Navigation, Pagination } from "swiper";
// import data
import { products } from "../data";

const ProductSlider = () => {
  const { pages } = products;
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="productSlider min-h-[900px]"
    >
      {pages.map((page, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-[30px]">
              {page.productList.map((product, index) => {
                const { image, name } = product;
                return (
                  <div
                    className="w-full max-w-[290px] h-[380px] text-left"
                    key={index}
                  >
                    <div className="border hover:border-accent overflow-hidden rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center mb-[15px] relative transition">
                      <img
                        className=" h-[380px] rounded-[18px] "
                        src={image.type}
                        alt=""
                      />
                    </div>
                    <div className="font-semibold  text-center lg:text-xl">
                      {name}
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;
