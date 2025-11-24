import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import React, {  useState,useEffect } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import './Product.css'
import { useCart } from "../Context/CartContext";

const Product = () => {
     const { openCart,cart,addToCart } = useCart();
    //useParams
    //state for product
     const [product, setProduct] = useState(null);
    //state for rating
    const [value, setValue] = useState(0);
      // function for increment
  const increment = () =>{
     setCount(count + 1);
  }
  // function for decrement
  const decrement = () =>{
     if(count > 0){
          setCount(count - 1);
     }
  }
  const handleAdd = () => {
  if (product) {
    addToCart(product);
    openCart(); // open global offcanvas
  }
};
   // state for a size
    const [size, setSize] = useState("2-12")
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // state for count
     const [count, setCount] = useState(0);
     const { id } = useParams();
      useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p className="p-5">Loading...</p>;
  return (
    <div>
        <div class="container-section ">
            <div><p class="mt-5 mb-3">{`HOME / ${product.title}`}</p></div>
                <div class="row mb-5 ">
                    <div class="col-12 col-lg-6 ">
                        <div>
                           <Swiper
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={{
                                                prevEl:".prev1",
                                                nextEl:".next1",
                                              }}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation,  Thumbs]}
                                    className="mySwiper2"
                                >
                                    <SwiperSlide className='swiper-slide1'>
                                    <img src={`http://localhost:5000/uploads/${product.frontImg}`}/>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide1'>
                                    <img src={`http://localhost:5000/uploads/${product.backImg}`} />
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide1'>
                                    <img src={`http://localhost:5000/uploads/${product.frontImg}`} />
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide1'>
                                    <img src={`http://localhost:5000/uploads/${product.backImg}`} />
                                    </SwiperSlide>
                                    <div class="swiper-button-prev prev1 fs-5">
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                    <div class="swiper-button-next next1 fs-5">
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide className='swiper-slide1'>
                                    <img src={`http://localhost:5000/uploads/${product.frontImg}`} />
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide1'>
                                    <img src={`http://localhost:5000/uploads/${product.backImg}`} />
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide1'>
                                     <img src={`http://localhost:5000/uploads/${product.frontImg}`} />
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide1'>
                                     <img src={`http://localhost:5000/uploads/${product.backImg}`} />
                                    </SwiperSlide>
                                </Swiper>
                         </div>
                     </div>  

                     <div class="col-12 col-lg-6  ps-3 ps-lg-5">
                    
                        <h4 class="mb-2">{product.title}</h4>
                        <div>
                             <Box sx={{ "& > legend": { mt: 2 } }}>
                                    <Rating
                                    name="simple-controlled"
                                    value={product.rating}
                                    readOnly
                                    />
                                </Box>
                            <span>{`${product.rating} rating`}</span>
                            <div class="mt-3 "><h2 class="text-danger">{` Rs: ${product.price}`}</h2></div>
                            <span>Tax included. Shipping calculated at checkout</span><br/>
                              <div class="border-bottom pt-3 pb-3">
                                <div class="color"></div>
                               <span>16 in stocks</span>
                            </div>
                            <p class="mt-3 mb-3">
                                Care for fiber: 30% more recycled polyester. We label garments manufactured using environmentally friendly technologies and raw materials with the Join Life label.
                            </p>
                            <div class="count mt-2 mb-2">
                                <h6>Hurry up! Sales ends in : 1817D:05:18:56</h6>
                            </div>
                           <div className="mt-3">
                                <span className="fw-bold me-3">Size:</span>
                                <span className="text-grey">{size}</span>
                                <div className="mt-3">
                                  <button onClick={() =>{setSize("2-12")}} className={`size ${ size === "2-12" ? "set" : ""}`}>2-12</button>
                                  <button onClick={() =>{setSize("2-14")}} className={`size ${ size === "2-14" ? "set" : ""}`}>2-14</button>
                                  <button onClick={() =>{setSize("2-16")}} className={`size ${ size === "2-16" ? "set" : ""}`}>2-16</button>
                                </div>
                              </div>
                            <div class="counter-btn mt-3">
                                <button class="btn-3" onClick={increment}><i class="fa-solid fa-plus"></i></button>
                                <span id="count">{count}</span>
                                <button class="btn-3" onClick={decrement}><i class="fa-solid fa-minus"></i></button>
                            </div>
                            <div class="mt-3 mb-3 d-flex gap-3 flex-column flex-md-row">
                                <div class="w-100"><button onClick={()=> handleAdd(product)} class="add w-100 ">ADD TO CART</button></div>
                                <div class="w-100"><Link to="/buynow"><button class="add w-100">BUY IT NOW</button></Link></div>
                            </div>
                            <div class="mt-3 mb-3">
                                <ul class="list-unstyled brand d-flex  justify-content-between flex-wrap">
                                    <li> <i class="fa-regular fa-heart"></i> WHISLIST</li>
                                    <li> <i class="fa-solid fa-book"></i> SIZEGUIDE</li>
                                    <li> <i class="fa-solid fa-book-open-reader"></i> QUESTION</li>
                                    <li> <i class="fa-solid fa-share-nodes"></i>SHARE</li>
                                </ul>
                            </div>
                            <div>
                                <p class="m-0"><span class="fw-bold">Delivery: </span>Estimated delivery time: 5-7 days</p>
                                <p class="m-0"><span class="fw-bold">Returns: </span>Within 45 days of purchase</p>
                                <p><span class="fw-bold">Sku: </span>445</p>
                            </div>
                            <div class="payment-card">
                               <h6>Payment & Security</h6>
                               <ul class="list-unstyled d-flex  gap-3 payment">
                                <li><img src="/img/visa.png" alt=""/></li>
                                <li><img src="/img/paypal.png" alt=""/></li>
                                <li><img src="/img/contactless.png" alt=""/></li>
                                <li><img src="/img/discover.png" alt=""/></li>
                               </ul>
                               <p>Your payment information is processed securely. We do not store credit card details nor have access to your credit card information.</p>
                            </div>
                            <div class="icon-card d-flex justify-content-between">
                                <div class="text-center">
                                    <span><i class="fa-solid fa-location-dot fs-2"></i></span>
                                    <h6>Order tracking</h6>
                                </div>
                                <div class="text-center">
                                    <span><i class="fa-solid fa-rotate-left fs-2"></i></span>
                                    <h6>90 days return</h6>
                                </div>
                                <div class="text-center">
                                    <span><i class="fa-solid fa-dollar-sign fs-2"></i></span>
                                    <h6>Money guarantee</h6>
                                </div>
                            </div>
                        </div>
                        </div>  
               </div>
        </div>
    </div>
        
  )
}

export default Product
