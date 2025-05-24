import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import "swiper/css";
function Property({ data }) {
  if (data.length === 0) {
    return (
      <div className="text-center py-8 ">
        {/* <img src="" className="mx-auto h-24" /> */}
        <HomeFilledIcon />
        <p className="mt-2">No properties were found matching your criteria.</p>
      </div>
    );
  }
  return (
    // <div className="overflow-x-auto whitespace-nowrap p-4 space-x-4 flex">
    <div className="flex justify-center gap-4 p-4">
      <Swiper
        spaceBetween={10}
        // slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 2 },
          768: { slidesPerView: 2.5, spaceBetween: 2 },
          1024: { slidesPerView: 3.5, spaceBetween: 2 },
        }}
      >
        {data.map((pro) => (
          <SwiperSlide key={pro.id} className="rounded">
            <Card data={pro} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    // </div>
  );
}

export default Property;
