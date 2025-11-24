import React from "react";
import "./Watch.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import videos from "./videoData";
const Watch = () => {
  return (
    <div>
      <div className="container-section mt-5 mb-5">
        <div className="text-center pt-3 pb-5">
          <h2 data-aos="fade-up">Watch & Shop Reels</h2>
        </div>
        <div>
          <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop:false
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 2,
          },
          762: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
      >
       {videos.map(video =>(
         <SwiperSlide key={video.id}>
          <div data-aos="zoom-out" data-aos-duration="1000" class="video1">
                        <div>
                            <video autoPlay loop  muted playsInline class="w-100 video-auto ">
                            <source src={video.screen} type="video/mp4"/>
                            </video>
                        </div>
                        <div class="p-3 video-abs">
                          <div class="row text-white justify-content-center align-items-center">
                            <div class="col-4 "><img class="w-100 video-img" src="img/video-back.webp" alt=""/></div>
                            <div class="col-8">
                                <h6>{video.headtext}</h6>
                                 <span class="fw-bold">{`Rs: ${video.value}`}</span>
                            </div>
                         </div>
                         <div class="mt-3 ">
                              <button class="btn4">Add to cart</button>
                         </div>
                       </div>
                    </div>
        </SwiperSlide>
       ))}
      </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Watch;
