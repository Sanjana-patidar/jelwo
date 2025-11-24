import React, { useEffect, useState } from 'react'
import './Categories.css'
import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { Autoplay} from 'swiper/modules';
import Spinner from 'react-bootstrap/Spinner';
import {motion} from "framer-motion"
import axios from 'axios';
const Categories = () => {
  //state for store data
  const [items, setItem] = useState([]);
  //state for loading when data is not display
  const [loading, setLoading] = useState(true);
  //fetch items from backend
 useEffect(() =>{
     const fetchData =  async ()=>{
        try{
        const res = await axios.get("http://localhost:5000/api/jewelry");
        setItem(res.data);
        }
        catch(err){
         console.log("Fetching errro while access the error",err);
        }
        finally{
      setLoading(false);
        }
     };
     fetchData();
 },[]);
  if(loading) return <div className='text-center pt-2 pb-2'> 
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner></div>;
    
  return (
    <div>
      <div className="conatiner-section ">
         <div class="text-center pb-4">
            <h1 data-aos="fade-up">Jwelery Categories</h1>
         </div>
         <Swiper modules={[Autoplay]}
        autoplay={{
        delay:2000,
        disableOnInteraction:false,
        }}
        loop:false
        spaceBetween={30}
        slidesPerView={5}
        breakpoints={{
            320:{
                slidesPerView:1,
            },
            370:{
                 slidesPerView:2,
            },
            600:{
                 slidesPerView:3,
            },
            900:{
                 slidesPerView:4,
            },
            1200:{
                 slidesPerView:5,
            },
        }}
         className="mySwiper">
            {items.map(item =>(
                <SwiperSlide key={item._id}>
                        <div data-aos="zoom-in" data-aos-duration="1000"  class="card-banner text-center">
                            <img class="w-100 back " src="img/cat-bg.avif" alt=""/>
                            <Link to='/showmore'>
                            <div class="card-content">
                                <img  class="w-100 " src={`http://localhost:5000/uploads/${item.image}`} alt=""/>
                            </div>
                            </Link>
                            <div class="fs-4"><span class="name">{item.name}</span></div>
                            <div class="pre-count">{`${item.item} + items`}</div>
                    </div>
              </SwiperSlide>
                ))
            }
      </Swiper>   
     </div>
    </div>
  )
}

export default Categories
