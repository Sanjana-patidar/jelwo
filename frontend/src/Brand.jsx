import React from 'react'
import './Brand.css'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Autoplay} from 'swiper/modules';

const Brand = () => {
  return (
    <div className='brand'>
        <div data-aos="fade-up" class="container-section  pt-5 pb-5 ">
          {/* brand swiper */}
                  <Swiper modules={[ Autoplay]}
                                  autoplay={{
                                    delay:2000,
                                    disableOnInteraction:false,
                                  }}
                                  spaceBetween={30}
                                  slidesPerView={5}
                                  breakpoints={{
                                    320:{
                                     slidesPerView:1,
                                  },
                                    375:{
                                        slidesPerView:2,
                                    },
                                    762:{
                                   slidesPerView:3,
                                    },
                                   900:{
                                        slidesPerView:4,
                                    },
                                    1200:{
                                        slidesPerView:5,
                                    },
                              
                          }}
                                  loop
                                className="mySwiper">
                    <SwiperSlide>
                        <div  class="brand-card">
                            <div class="brand-hover text-center">
                              <span class="brand-span">new! Jewelry</span>
                            </div>
                            <div><img class="w-100 brand-img" src="img/brand-1.png" alt=""/></div>
                        </div>  
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="brand-card">
                            <div class="brand-hover text-center">
                              <span class="brand-span">new! Jewelry</span>
                            </div>
                            <div><img class="w-100 brand-img" src="img/brand-2.webp" alt=""/></div>
                        </div>  
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="brand-card">
                            <div class="brand-hover text-center">
                              <span class="brand-span">Big! Sale</span>
                            </div>
                            <div><img class="w-100 brand-img" src="img/brand-3.avif" alt=""/></div>
                        </div>  
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="brand-card">
                            <div class="brand-hover text-center">
                              <span class="brand-span">FLate 10% off</span>
                            </div>
                            <div><img class="w-100 brand-img" src="img/brand-4.webp" alt=""/></div>
                        </div>  
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="brand-card">
                            <div class="brand-hover text-center">
                              <span class="brand-span">new! arrival</span>
                            </div>
                            <div><img class="w-100 brand-img" src="img/brand-5.png" alt=""/></div>
                        </div>  
                    </SwiperSlide>
                     <SwiperSlide>
                        <div class="brand-card">
                            <div class="brand-hover text-center">
                              <span class="brand-span">Delas! inside</span>
                            </div>
                            <div><img class="w-100 brand-img" src="img/brand-6.png" alt=""/></div>
                        </div>  
                    </SwiperSlide>
                     <SwiperSlide>
                        <div class="brand-card">
                            <div class="brand-hover text-center">
                              <span class="brand-span">New! arrivals</span>
                            </div>
                            <div><img class="w-100 brand-img" src="img/brand-7.webp" alt=""/></div>
                        </div>  
                    </SwiperSlide>
                  </Swiper>             
        </div>
    </div>
  )
}

export default Brand
