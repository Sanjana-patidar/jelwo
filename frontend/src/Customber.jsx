import React, { useState ,useEffect} from "react";
import "./Customber.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import axios from "axios";
const Customber = () => {
const [customers, setCustomer] = useState([]);

// for fetch customer
 useEffect(() => {
  const fetchCustomers = async () => {
    try {
      const res = await axios.get("https://jelwo.onrender.com/api/customers");
      setCustomer(res.data); // res.data should be an array
    } catch (err) {
      console.log("fetching issue", err);
    }
  };
  
  fetchCustomers();
}, []);


  return (
    <div>
      <div class="container-section  pt-5 pb-5 border-top">
        <div class="customer">
          <div data-aos="fade-up" class="text-center  pb-5">
            <h1>Customer love</h1>
          </div>
        </div>
        {/* Customber Swiper*/}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop:false
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            
            762: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {customers.map(customer =>(
            <SwiperSlide key={customer._id}>
            <div data-aos="zoom-in" data-aos-duration="1000" class="user ">
              <div class="row justify-content-center align-items-center p-4">
                <div class="d-flex align-items-center gap-2">
                  <div>
                    <img class="w-100 user-img" src={customer.img} alt="" />
                  </div>
                  <div>
                    <h5>{customer.name}</h5>
                    <Stack spacing={1}>
                      <Rating name="half-rating-read" defaultValue={customer.rating} precision={0.5} readOnly />
                    </Stack>
                  </div>
                </div>
                <div class="mt-3">
                  <p>
                    {customer.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
        <div class="container-section  banner  mt-5 mb-5">
               <div class="row justify-content-center search-banner">
                  <div class="col-12 col-md-6 text-center pt-5 pb-5">
                        <h1>Sign up for our newsletter to receive special offers.</h1>
                        <div class="search-top mt-4 mb-4">
                            <input class="w-100 search-bar" type="text" placeholder="Enter your email"/>
                            <div class="search-bottom">
                                <button class="sub">SUBSCRIBE</button>
                            </div>
                        </div>
                         <div>
                            <input type="checkbox" id="terms" name="terms"/>
                            <label for="terms">I have read and agree with the <span class="fw-bold">Terms and condition</span></label><br/>
                         </div>
                  </div>
               </div>
        </div>
    </div>
  );
};

export default Customber;
