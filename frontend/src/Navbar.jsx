import React from 'react'
import { useState,useContext } from 'react';
import { Collapse } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css'
import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { Navigation , Autoplay} from 'swiper/modules';
import "swiper/css/navigation";
import { WishlistContext } from "./Context/WhishlistContext";
import { useCart } from "./Context/CartContext";
import { useNavigate } from 'react-router-dom'; 
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from 'axios';
const Navbar = () => {
    // state for admin email and password store
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();
    const { openCart,cart } = useCart();
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const {  wishlistCount } = useContext(WishlistContext);
    const cartTotal = cart.reduce((sum, item) => sum + item.qty, 0);

    // admin login function
     const submit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:5000/api/admin/login", {
      email,
      password,
    });

    if (res.data.msg === "Login success") {
      alert("Admin Login Successful");
      document.body.classList.remove("modal-open");
      document.querySelector(".modal-backdrop")?.remove();
      document.body.style.overflow = "auto";
      navigate("/admin");
    }

  } catch (error) {
    // axios catches 400, so handle here
    if (error.response) {
      alert(error.response.data.msg); 
      
    } else {
      alert("Server error");
    }
  }
};


  return (
   <>
    <div>   
<header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="search1 d-none d-md-block">
      <form class="d-flex">
        <input class="form-control " type="search" placeholder="Search products..." aria-label="Search"/>
      </form>
      <div class="search-icon1"><i class="fa-solid fa-magnifying-glass text-danger"></i></div>
    </div>
   <div class=" text-center "> <a class="navbar-brand " href="#"><img class="w-50" src="/img/logo.avif" alt=""/></a></div>
    <div class="">
        <div class=" d-flex gap-4 ">
           <div data-bs-toggle="modal" data-bs-target="#exampleModal1" ><span className='text-danger cursor-pointer'><i class="fa-solid fa-lock"></i>Admin</span></div>
           <div>
            <Link to='/' className='whish-count'><span> <i class="fa-solid fa-user-plus"></i></span></Link>
            </div>
           <div>
            <Link to="/wishlist" className='text-decoration-none whish-count'>
           <span> <i class="fa-solid fa-heart-circle-plus"></i>{`(${wishlistCount})`}</span>
           </Link>
           </div>
           <div onClick={openCart}><span> <i class="fa-solid fa-bag-shopping"></i>{`(${cartTotal})`}</span></div>
        </div>
    </div>
  </div>
</nav>
<div className="header-bootom  ">
        <div class="row m-0 p-2 justify-content-center ">
            <div class="col-4">
                <div><span class="text-danger">Free</span> uk standard delivery on all orders.</div>
            </div>
            <div class="col-4">
                <div>
                    <ul class="list-unstyled d-flex gap-3 align-items-center unorder">
                        <li class="nav-item dropdown">
                           <Link to='/home' className='text-decoration-none '> <span >Home</span></Link>
                             <a class="nav-link dropdown-toggle d-inline" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                               <i class="fa-solid fa-angle-down"></i>
                            </a>
                            <div class="dropdown-menu ps-3 pe-3 p-5 " aria-labelledby="navbarDropdown">
                               <div class="dropdown-content">
                                 <div class="d-flex gap-3">
                                    <div>
                                        <div class=" banner-img"><img  src="/img/demo-menu-banner-6.webp" alt=""/></div>
                                        <div class="text-center pt-3 "><p>06 Classical Jewelry</p></div>
                                    </div>
                                    <div>
                                         <div class=" banner-img"><img  src="/img/demo-menu-banner-1.webp" alt=""/></div>
                                        <div class="text-center pt-3 "><p>01 Unique jewelry</p></div>
                                    </div>
                                    <div>
                                         <div class=" banner-img"><img src="/img/demo-menu-banner-2.webp" alt=""/></div>
                                        <div class="text-center pt-3 "><p>02 Modern jewelry</p></div>
                                    </div>
                                    <div>
                                         <div class=" banner-img"><img src="/img/demo-menu-banner-3.webp" alt=""/></div>
                                        <div class="text-center pt-3 "><p>03 Traditional jewelry</p></div>
                                    </div>
                                    <div>
                                         <div class=" banner-img"><img src="/img/demo-menu-banner-4.webp" alt=""/></div>
                                        <div class="text-center pt-3 "><p>04 Luxury jewellary</p></div>
                                    </div>
                                    <div>
                                         <div class=" banner-img"><img src="/img/demo-menu-banner-5.webp" alt=""/></div>
                                        <div class="text-center pt-3 "><p>06 Classical Jewelry</p></div>
                                    </div>
                                    
                                 </div>
                               </div>
                            </div>
                        </li>
                
                        <li class="  nav-item dropdown">
                            <Link to='/shop' className='text-decoration-none '> <span>Shop</span></Link>
                            <a class="nav-link dropdown-toggle d-inline" href="" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                             <i class="fa-solid fa-angle-down"></i>
                            </a>
                            <div  class="dropdown-menu ps-3 pe-3 p-5" aria-labelledby="navbarDropdown">
                                <div class="row">
                                    <div class="col earing ">
                                        <p class="fw-bold">Earnings</p>
                                        <ul class="list-unstyled shop-content">
                                            <li>Blue heavy t-shirt</li>
                                            <li>Brown sunglassess</li>
                                            <li>Bucket shoes</li>
                                            <li>lamond rashmi ring</li>
                                            <li>Floral gold bangle</li>
                                            <li>Glitter diamond ring</li>
                                        </ul>
                                    </div>
                                    <div class="col earing ps-4">
                                        <p class="fw-bold">Necklace</p>
                                        <ul class="list-unstyled shop-content">
                                            <li>Rose gold rings</li>
                                            <li>Brown sunglasses</li>
                                            <li>Bucket shoes</li>
                                            <li>Color print sandal</li>
                                            <li>Floral gold bangle</li>
                                            <li>Simple Pearl earning</li>
                                        </ul>
                                    </div>
                                    <div class="col earing ps-4">
                                        <p class="fw-bold">Rings</p>
                                        <ul class="list-unstyled shop-content">
                                            <li>Blue heavy t-shirt</li>
                                            <li>Brown sunglasses</li>
                                            <li>Dark sunglasses</li>
                                            <li>Half sleeve tshirt</li>
                                            <li>Formal shirt</li>
                                            <li>Gold nose pin</li>
                                        </ul>
                                    </div>
                                    <div class="col ps-4">
                                        <p class="fw-bold">Bracelets</p>
                                        <ul class="list-unstyled shop-content">
                                            <li>Blue heavy t-shirt</li>
                                            <li>Brown sunglasses</li>
                                            <li>Formal shoes</li>
                                            <li>Formal shirt</li>
                                            <li>Blue heavy t-shirt</li>
                                            <li>Brown sunglasses</li>
                                        </ul>
                                    </div>
                                    <div class="col">
                                       <div class="banner-img banner-img-2">
                                        <img src="/img/jelwo-6-menu-banner.webp" alt=""/>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li class="nav-item dropdown ">
                            <a class="nav-link dropdown-toggle hvr-underline-from-center " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <a href="shop.html" class="text-decoration-none hvr-underline-from-center">Products <i class="fa-solid fa-angle-down"></i></a>
                            </a>
                            <div class="dropdown-menu ps-3 pe-3 p-5" aria-labelledby="navbarDropdown">
                               <div class="row">
                                <div class="col-8">
                                    <div class="row">
                                        <div class="col earing ">
                                        <p class="fw-bold">Earnings</p>
                                        <ul class="list-unstyled shop-content">
                                            <li>Blue heavy t-shirt</li>
                                            <li>Brown sunglassess</li>
                                            <li>Bucket shoes</li>
                                            <li>lamond rashmi ring</li>
                                            <li>Floral gold bangle</li>
                                            <li>Glitter diamond ring</li>
                                        </ul>
                                    </div>
                                    <div class="col earing ps-4">
                                        <p class="fw-bold">Necklace</p>
                                        <ul class="list-unstyled shop-content">
                                            <li>Rose gold rings</li>
                                            <li>Brown sunglasses</li>
                                            <li>Bucket shoes</li>
                                            <li>Color print sandal</li>
                                            <li>Floral gold bangle</li>
                                            <li>Simple Pearl earning</li>
                                        </ul>
                                    </div>
                                    <div class="col earing ps-4">
                                        <p class="fw-bold">Rings</p>
                                        <ul class="list-unstyled shop-content">
                                            <li>Blue heavy t-shirt</li>
                                            <li>Brown sunglasses</li>
                                            <li>Dark sunglasses</li>
                                            <li>Half sleeve tshirt</li>
                                            <li>Formal shirt</li>
                                            <li>Gold nose pin</li>
                                        </ul>
                                    </div>
                                    <div class="col ps-4">
                                        <p class="fw-bold">Bracelets</p>
                                        <ul class="list-unstyled shop-content">
                                            <li>Blue heavy t-shirt</li>
                                            <li>Brown sunglasses</li>
                                            <li>Formal shoes</li>
                                            <li>Formal shirt</li>
                                            <li>Blue heavy t-shirt</li>
                                            <li>Brown sunglasses</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div>
                                        <div class="top d-flex justify-content-between mb-3">
                                            <div><h5>Popular collection</h5></div>
                                            <div class="d-flex gap-2">
                                                <div class="custom-next" onClick={(e)=> e.stopPropagation()}>
                                                    <i class="fa-solid fa-arrow-left"></i>
                                                </div>
                                                |
                                                <div class=" custom-prev" onClick={(e)=> e.stopPropagation()}>
                                                    <i class="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom">
                                            {/* swiper*/ }

                                            <Swiper  modules={[Navigation, Autoplay]}
                                              navigation={{
                                                prevEl:".custom-next",
                                                nextEl:".custom-prev",
                                              }}
                                              autoplay={{
                                                delay:1000,
                                                disableOnInteraction:false,
                                              }}
                                              spaceBetween={20}
                                              slidesPerView={2}
                                              loop ={false}
                                            className="mySwiper">
                                                <SwiperSlide>
                                                     <div class="swiper-img">
                                                        <img class="w-100 rounded-3" src="/img/jewelry-pro-1.webp" alt=""/>
                                                        <div class="new">New</div>
                                                    </div>
                                                    <div class="swiper-content text-center pt-2 pb-2">
                                                        <span>Rs.15.00 <del>Rs.20.00</del></span>
                                                        <div>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                        </div>
                                                    </div>

                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div class="swiper-img">
                                                        <img class="w-100 rounded-3" src="/img/jewelry-pro-6.webp" alt=""/>
                                                        <div class="new">45%</div>
                                                    </div>
                                                    <div class="swiper-content text-center pt-2 pb-2">
                                                        <span>Rs.15.00 <del>Rs.20.00</del></span>
                                                        <div>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star "></span>
                                                        </div>
                                                    </div>

                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div class="swiper-img">
                                                        <img class="w-100 rounded-3" src="/img/jewelry-pro-11.webp" alt=""/>
                                                        <div class="new">25%</div>
                                                    </div>
                                                    <div class="swiper-content text-center pt-2 pb-2">
                                                        <span>Rs.15.00 <del>Rs.20.00</del></span>
                                                        <div>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star "></span>
                                                            <span class="fa fa-star "></span>
                                                        </div>
                                                    </div>

                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div class="swiper-img">
                                                        <img class="w-100 rounded-3" src="/img/jewelry-pro-21.webp" alt=""/>
                                                        <div class="new">New</div>
                                                    </div>
                                                    <div class="swiper-content text-center pt-2 pb-2">
                                                        <span> For Rs.15.00 To<del>Rs.20.00</del></span>
                                                        <div>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star "></span>
                                                        </div>
                                                    </div>

                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div class="swiper-img">
                                                        <img class="w-100 rounded-3" src="/img/jewelry-pro-56.webp" alt=""/>
                                                        <div class="new">old</div>
                                                    </div>
                                                    <div class="swiper-content text-center pt-2 pb-2">
                                                        <span>Rs.15.00 <del>Rs.20.00</del></span>
                                                        <div>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star "></span>
                                                        </div>
                                                    </div>

                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div class="swiper-img">
                                                        <img class="w-100 rounded-3" src="/img/jewelry-pro-31.webp" alt=""/>
                                                    </div>
                                                    <div class="swiper-content text-center pt-2 pb-2">
                                                        <span> For Rs.15.00 To<del>Rs.20.00</del></span>
                                                        <div>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star "></span>
                                                        </div>
                                                    </div>

                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div class="swiper-img">
                                                        <img class="w-100 rounded-3" src="/img/jewelry-pro-1.webp" alt=""/>
                                                        <div class="new">New</div>
                                                    </div>
                                                    <div class="swiper-content text-center pt-2 pb-2">
                                                        <span>Rs.15.00 <del>Rs.20.00</del></span>
                                                        <div>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                        </div>
                                                    </div>

                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div class="swiper-img">
                                                        <img class="w-100 rounded-3" src="/img/jewelry-pro-6.webp" alt=""/>
                                                        <div class="new">45%</div>
                                                    </div>
                                                    <div class="swiper-content text-center pt-2 pb-2">
                                                        <span>Rs.15.00 <del>Rs.20.00</del></span>
                                                        <div>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star "></span>
                                                        </div>
                                                    </div>

                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div class="swiper-img">
                                                        <img class="w-100 rounded-3" src="/img/jewelry-pro-11.webp" alt=""/>
                                                        <div class="new">25%</div>
                                                    </div>
                                                    <div class="swiper-content text-center pt-2 pb-2">
                                                        <span>Rs.15.00 <del>Rs.20.00</del></span>
                                                        <div>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star checked"></span>
                                                            <span class="fa fa-star "></span>
                                                            <span class="fa fa-star "></span>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                            {/* swiper end*/ }
                                        </div>
                                    </div>
                                </div>
                               </div>
                            </div>
                        </li>
                        
                        <li class="nav-item dropdown ">
                                <Link className='text-decoration-none hvr-underline-from-center' to="blog">Blog</Link>
                        </li>
                      
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle hvr-underline-from-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages <i class="fa-solid fa-angle-down"></i>
                            </a>
                            <div class="dropdown-menu last-dropdown" aria-labelledby="navbarDropdown">
                                  <ul class="list-unstyled order">
                                    <Link className='text-decoration-none' to='/aboutus'><li>About Us</li></Link>
                                    <Link className='text-decoration-none' to='/contact'><li>Contact</li></Link>
                                    <Link className='text-decoration-none' to='/faqpage'><li>FAQ</li></Link>
                                    <Link className='text-decoration-none' to="/privacy"><li>Privacy policy</li></Link>
                                    <li>Refund policy</li>
                                    <Link className='text-decoration-none' to='/storelocation'><li>Store location</li></Link>
                                    <li>Shipping & return</li>
                                    <Link className='text-decoration-none' to='/term'><li>Terms & Condition</li></Link>
                                  </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
               
            <div class="col-4">
              <div class="d-flex gap-5 justify-content-end">
                <div><i class="fa-regular fa-house text-danger"></i> Free try at home</div>
              </div>
            </div>
        </div>
</div>
</header>
{/*offcanvas for navbar */}
    <div class="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header off">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark text-white fs-4"></i></button>
  </div>
  <div class="offcanvas-body">
    <div>
      <div>
      <div class="d-flex justify-content-between border p-3 ">
        <div><Link to='/home' className='text-decoration-none fw-bold'>Home</Link></div>
        <div onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
           <FontAwesomeIcon icon={open ? faMinus : faPlus}/>
        </div>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <ul class="list-unstyled list">
           <div class="border p-2"><a href="" class="text-decoration-none text-secondary"><li>01 Classical Jwelery</li></a></div>
           <div class="border p-2"><a href="" class="text-decoration-none text-secondary"><li>02 Modern Jwelery</li></a></div>
           <div class="border p-2"><a href="" class="text-decoration-none text-secondary"><li>03 Traditional Jewelry</li></a></div>
           <div class="border p-2"><a href="" class="text-decoration-none text-secondary"><li>04 Unique Jwelery</li></a></div>
           <div class="border p-2"><a href="" class="text-decoration-none text-secondary"><li>05 Luxury Jwelery</li></a></div>
           <div class=" p-2"><a href="" class="text-decoration-none text-secondary"><li>06 Classical Jwelery</li></a></div>
        </ul>
        </div>
      </Collapse>
  </div>
  </div>
  <div>
      <div class="d-flex justify-content-between border p-3 ">
        <div><Link to='/shop' className='text-decoration-none  fw-bold'>Shop</Link></div>
        <div
             onClick={() => setOpen1(!open1)}
             aria-controls="example-collapse-text"
             aria-expanded={open1}>
           <FontAwesomeIcon icon={open1 ? faMinus : faPlus}/>
        </div>
      </div>
         <Collapse in={open1}>
        <div id="example-collapse-text">
          <ul class="list-unstyled list">
           <div class="border p-2"><a href="" class="text-decoration-none text-secondary"><li>Earings</li></a></div>
           <div class="border p-2"><a href="" class="text-decoration-none text-secondary"><li>Necklace</li></a></div>
           <div class="border p-2"><a href="" class="text-decoration-none text-secondary"><li>Rings</li></a></div>
           <div class=" p-2"><a href="" class="text-decoration-none text-secondary"><li>Bracelets</li></a></div>
        </ul>
        </div>
      </Collapse>
  </div>
  <div>
      <div class="d-flex justify-content-between border p-3 ">
        <div><Link to='/shop' className='text-decoration-none fw-bold'>Product</Link></div>
        <div 
             onClick={() => setOpen2(!open2)}
             aria-controls="example-collapse-text"
             aria-expanded={open2}>
           <FontAwesomeIcon icon={open2 ? faMinus : faPlus}/>
        </div>
      </div>
    <Collapse in={open2}>
        <div id="example-collapse-text">
          <ul class="list-unstyled list">
           <div class="border p-2"><a href="" class="text-decoration-none text-secondary"><li>Earings</li></a></div>
           <div class="border p-2"><a href="" class="text-decoration-none text-secondary"><li>Necklace</li></a></div>
           <div class="border p-2"><a href="" class="text-decoration-none text-secondary"><li>Rings</li></a></div>
           <div class=" p-2"><a href="" class="text-decoration-none text-secondary"><li>Bracelets</li></a></div>
        </ul>
        </div>
      </Collapse>
    
  </div>
  <div>
      <div class=" border p-3 ">
        <div><Link to='/blog' className='text-decoration-none  '>Blog</Link></div>
  </div>
  <div>
      <div class="d-flex justify-content-between border p-3 ">
        <div className='fw-bold'>Pages</div>
        <div 
         onClick={() => setOpen3(!open3)}
             aria-controls="example-collapse-text"
             aria-expanded={open3}>
           <FontAwesomeIcon icon={open3 ? faMinus : faPlus}/>
        </div>
      </div>
      <Collapse in={open3}>
        <div id="example-collapse-text">
          <ul class="list-unstyled list">
           <div class="border p-2"><Link to='/aboutus' className='text-decoration-none p-2'>About Us</Link></div>
           <div class="border p-2"><Link to='/contact' className='text-decoration-none p-2'>Contact</Link></div>
           <div class="border p-2"><Link to='/storelocation' className='text-decoration-none p-2'>Store Location</Link></div>
           <div class="border p-2"><Link to='/faqpage' className='text-decoration-none p-2'>faq's</Link></div>
           <div class="border p-2"><Link to='/term' className='text-decoration-none p-2'>Terms & conditions</Link></div>
           <div class="p-2"><Link to='/privacy' className='text-decoration-none p-2'>Privacy Policy</Link></div> 
        </ul>
        </div>
      </Collapse>
  </div>
  <div>
      <div class="d-flex justify-content-between border inr p-3 ">
        <div>INR</div>
        <div data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample"><i class="fa-solid fa-angle-down"></i></div>
      </div>
    <div class="collapse" id="collapseExample5">
        <ul class="list-unstyled list">
           <div class=" p-2"><a href="" class="text-decoration-none text-secondary"><li>50rs</li></a></div>
           <div class=" p-2"><a href="" class="text-decoration-none text-secondary"><li>100rs</li></a></div>
           <div class=" p-2"><a href="" class="text-decoration-none text-secondary"><li>200rs</li></a></div>
           <div class=" p-2"><a href="" class="text-decoration-none text-secondary"><li>3000rs</li></a></div>
        </ul>
        </div>
  </div>
    </div>
    </div>
</div>
{/*offcanvas for navbar end */}

    </div>
{/* modal for admin login */}
   
<div class="modal  fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="false">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content ">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> <i class="fa-regular fa-user"></i> Admin Login </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <form onSubmit={submit} >
         <div className='admin-field'>
            <input 
            type="text" 
            placeholder=' Enter email '
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
             />
         </div>
         <div className='admin-field mt-3'>
            <input 
            type="text"
            placeholder='Enter password ' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
         </div>
        <div className='text-end mt-4'>
             <button type="submit" class="btn btn-danger"> <i class="fa-solid fa-lock"></i> Login</button>
        </div>
       </form>
      </div>
    </div>
  </div>
</div>
{/* modal end */}

   </>
  )
}

export default Navbar
