import React, { use } from "react";
import { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import "./Showmore.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Slider from "@mui/material/Slider";
import Button from "react-bootstrap/Button";
import { useCart } from "../Context/CartContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { useBuynow } from "../Context/BuynowContext";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { WishlistContext } from "../Context/WhishlistContext";
const Showmore = () => {
  const navigate = useNavigate();
  const {addBuyNow } = useBuynow();
  const { addToCart, openCart } = useCart();
  const {  wishlist, toggleWishlist, wishlistCount } = useContext(WishlistContext);
  const [value, setValue] = useState([0, 300]);
  const [value1, setValue1] = React.useState(3);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [size, setSize] = useState("2-12");
  const [count, setCount] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [products, setProducts] = useState([]);
  // state for send data  in cart
  const [selectedProduct, setSelectedProduct] = useState(null);
  //offcanvas usestate
// function for sort data
const handleSort = (value)=> {
    let sortedProducts = [...products];
    switch(value) {
    case "price-asc":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-dsc":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "name-dsc":
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      break;
  }
    setProducts(sortedProducts);
}
  const handleShow1 = (product) => {
    setSelectedProduct(product);
    setShow1(true);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () =>{
    setShow(false);
  }
  const handleClose1 = () => {
    setShow1(false);
    setCount(0);
    setSelectedProduct(null);
    setSize("2-12");
    // Reset thumbs swiper to prevent destroyed reference
    setThumbsSwiper(null);
  };
  // functions for count
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
const handleAdd = () => {
  if (selectedProduct) {
    addToCart(selectedProduct);
    openCart(); // open global offcanvas
  }
};
const handleBuyNow = (item) => {
   addBuyNow(item); // store clicked product
    navigate("/buynow");      // move to buynow page
  };
  //useEffect for dipaly the data from api
  useEffect(() => {
    axios
      .get("https://jelwo.onrender.com/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("data fething erro", err);
      });
  }, []);
  //filter logic to display the cards
  const filterProducts = products.filter(
    (product) => product.price >= value[0] && product.price <= value[1]
  );
  return (
    <div>
      <div className="container-section text-center showmore text-white pt-5 pb-5">
        <span>HOME - CHAIN</span>
        <h2>CHAIN</h2>
      </div>
      {/*  col */}
      <div className="row">
        <div className=" col-12 col-xl-3 d-none d-xl-block">
          <div className="categories p-3 border-bottom ">
            <h4>Categories</h4>
            <ul className="list-unstyled categories-list m-0  p-0">
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="15k"
                  />
                  <label for="vehicle1"> 14k, 58.3 %</label>
                  <br />
                </div>
                <div>(12)</div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="18k"
                  />
                  <label for="vehicle1">18k, 75.0 % </label>
                  <br />
                </div>
                <div>(12)</div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="22k"
                  />
                  <label for="vehicle1"> 22k, 91.7 %</label>
                  <br />
                </div>
                <div>(12)</div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="24k"
                  />
                  <label for="vehicle1">24k,99.99%</label>
                  <br />
                </div>
                <div>(12)</div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1">Bangle</label>
                  <br />
                </div>
                <div>(12)</div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1">Best seller</label>
                  <br />
                </div>
                <div>(12)</div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1">Braclets</label>
                  <br />
                </div>
                <div>(12)</div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1">Brooch</label>
                  <br />
                </div>
                <div>(12)</div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1">Chain</label>
                  <br />
                </div>
                <div>(12)</div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1">Diamond</label>
                  <br />
                </div>
                <div>(12)</div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1">Earring</label>
                  <br />
                </div>
                <div>(12)</div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1">Gold</label>
                  <br />
                </div>
                <div>(12)</div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1">Jwelery</label>
                  <br />
                </div>
                <div>(12)</div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1">Necklace</label>
                  <br />
                </div>
                <div>(12)</div>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1">New products</label>
                  <br />
                </div>
                <div>(12)</div>
              </li>
            </ul>
          </div>
          <div className="filter p-3 border-bottom">
            <h3>Filter</h3>
          </div>
          <div class="border-bottom p-3">
            <h4>Availability</h4>
            <div class="d-flex justify-content-between align-items-center mt-3 mb-4">
              <div>0 selected</div>
              <div>
                <u>Reset</u>
              </div>
            </div>
            <ul class="list-unstyled p-0 mt-3 ">
              <li className="pb-2">
                <div class="d-flex justify-content-between">
                  <div>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1">In stock</label>
                    <br />
                  </div>
                  <div>
                    <span>(12)</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-flex justify-content-between">
                  <div>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1">Out of stock</label>
                    <br />
                  </div>
                  <div>
                    <span>(1)</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/*price filter */}
          <div className="range p-3 border-bottom">
            <h4>Price</h4>
            <div class="d-flex justify-content-between align-items-center mt-3 mb-4">
              <div>The Highest price in Rs.28.00</div>
              <div onClick={() => setValue([0, 300])} className="reset">
                <u>Reset</u>
              </div>
            </div>
            <div>
              <Slider
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
                valueLabelDisplay="off"
                min={0}
                max={300}
                step={1}
              />
              <div className="d-flex gap-4">
                <div>
                  <label>From</label>
                  <input
                    className="border"
                    type="number"
                    onChange={(e) =>
                      setValue([value[0], Number(e.target.value)])
                    }
                    value={value[0]}
                  />
                </div>

                <div>
                  <label>To</label>
                  <input
                    className=" border"
                    type="number"
                    onChange={(e) =>
                      setValue([value[1], Number(e.target.value)])
                    }
                    value={value[1]}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* color */}
          <div class="color-section border-bottom p-3">
            <h4>Color</h4>
            <div class="d-flex justify-content-between align-items-center ">
              <div>0 selected</div>
              <div>
                <u>Reset</u>
              </div>
            </div>
            <div className="colorcheckbox mt-4">
              <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                <div>
                  <input type="checkbox" />
                  <span className="circle beige "></span>
                  Beige
                </div>
                <div>
                  {" "}
                  <span className="num">(3)</span>
                </div>
              </label>
              <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                <div>
                  <input type="checkbox" />
                  <span className="circle bronze"></span>
                  Bronze
                </div>
                <div>
                  {" "}
                  <span className="num">(5)</span>
                </div>
              </label>
              <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                <div>
                  <input type="checkbox" />
                  <span className="circle bronze"></span>
                  Brown
                </div>
                <div>
                  {" "}
                  <span className="num">(5)</span>
                </div>
              </label>
              <label className="color-option d-flex justify-content-between mb-2  me-2 ">
                <div>
                  <input type="checkbox" />
                  <span className="circle gold1"></span>
                  Gold
                </div>
                <div>
                  {" "}
                  <span className="num">(6)</span>
                </div>
              </label>
              <label className="color-option d-flex justify-content-between  mb-2 me-2  ">
                <div>
                  <input type="checkbox" />
                  <span className="circle silver"></span>
                  Silver
                </div>
                <div>
                  {" "}
                  <span className="num">(9)</span>
                </div>
              </label>
              <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                <div>
                  <input type="checkbox" />
                  <span className="circle yellow"></span>
                  Yellow
                </div>
                <div>
                  {" "}
                  <span className="num">(5)</span>
                </div>
              </label>
              <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                <div>
                  <input type="checkbox" />
                  <span className="circle red"></span>
                  Red
                </div>
                <div>
                  {" "}
                  <span className="num">(15)</span>
                </div>
              </label>
              <label className="color-option d-flex justify-content-between  mb-2 me-2  ">
                <div>
                  <input type="checkbox" />
                  <span className="circle bronze"></span>
                  Pink
                </div>
                <div>
                  {" "}
                  <span className="num">(5)</span>
                </div>
              </label>
              <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                <div>
                  <input type="checkbox" />
                  <span className="circle bronze"></span>
                  Bronze
                </div>
                <div>
                  {" "}
                  <span className="num">(5)</span>
                </div>
              </label>
              <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                <div>
                  <input type="checkbox" />
                  <span className="circle bronze"></span>
                  Bronze
                </div>
                <div>
                  {" "}
                  <span className="num">(5)</span>
                </div>
              </label>
              <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                <div>
                  <input type="checkbox" />
                  <span className="circle bronze"></span>
                  Bronze
                </div>
                <div>
                  {" "}
                  <span className="num">(5)</span>
                </div>
              </label>
            </div>
            <div class=" pt-4">
              <div class="side">
                <img class="w-100 " src="./img/side-banner.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className=" col-12 col-xl-9 p-3">
          <div>
            <h4>Best Seller</h4>
            <div class="mb-3">
              <img
                class=" coll w-100"
                src="img/collection-banner1.webp"
                alt=""
              />
            </div>
            <span>
              Care for fiber: 30% more recycled polyester. We label garments
              manufactured using environmentally friendly technologies and raw
              materials with the Join Life label.
            </span>
            <div class="d-flex flex-wrap justify-content-between align-items-center mt-3 border-bottom pb-4">
              <div class="list">
                <ul class="nav nav-tabs " id="myTab" role="tablist">
                  <li class="nav-item net pe-3 d-lg-none" role="presentation">
                    <span onClick={handleShow}>
                      <i class="fa-solid fa-filter"></i> Filters
                    </span>
                  </li>
                  <li class="nav-item net pe-3" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      <i class="fa-solid fa-table-cells-large"></i>
                    </button>
                  </li>
                  <li class="nav-item net" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      <i class="fa-solid fa-list"></i>
                    </button>
                  </li>
                </ul>
              </div>
              <div class="d-flex flex-wrap mt-3 mt-lg-0">
                <div>
                  <span class="pe-3">12 products</span>
                </div>
                <div>
                  {" "}
                  <span class="pe-3">Sort by:</span>
                  <span>
                    <select name=""onChange={(e) => handleSort(e.target.value)} >
                      <option value="best selling">Best selling</option>
                      <option value="featured">Featured</option>
                      <option value="name-asc">Alphabetically, A-Z</option>
                      <option value="name-dsc">Alphabetically, Z-A</option>
                      <option value="price-asc">Price low to high</option>
                      <option value="price-dsc">Price,heigh to low</option>
                    </select>
                  </span>
                </div>
              </div>
            </div>

            <div class="tab-content" id="myTabContent">
              <div
                class="mt-4 tab-pane fade show active "
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="grid-layout">
                  {filterProducts.length > 0 ? (
                    filterProducts.map((product) => (
                      <div class="design-card p-3" key={product._id}>
                        <Link to={`/product/${product._id}`}>
                          <div class="img-content">
                            <img
                              class="w-100 front-img"
                              src={`${import.meta.env.VITE_API_IMAGE}/${product.frontImg}`}
                              alt=""
                            />
                            <img
                              class="w-100 back-img"
                              src={`${import.meta.env.VITE_API_IMAGE}/${product.backImg}`}
                              alt=""
                            />
                            <div class="offer text-start">
                              <span class="pre-inc">{`${product.discount}%`}</span>
                            </div>
                            <div class="heart-icon">
                              <div class="mb-4">
                                <a href="" onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}>
                                  <i class="fa-regular fa-heart"></i>
                                </a>
                              </div>
                              <div>
                                <a href="">
                                  <i class="fa-regular fa-eye"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div class="design-content text-center mt-4">
                          <p class="m-0">{product.title}</p>
                          <span class="text-danger">
                            {`Rs: ${product.price}`}{" "}
                            <del class="text-secondary">{`Rs: ${product.discountPercentage}`}</del>
                          </span>
                          <div>
                            <Box sx={{ "& > legend": { mt: 2 } }}>
                              <Rating
                                name="simple-controlled"
                                value={product.rating}
                                readOnly
                              />
                            </Box>
                          </div>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              handleShow1(product);
                            }}
                            class="btn-add w-100 mt-3"
                          >
                            Read More <i class="fa-solid fa-arrow-right"></i>
                          </button>
                        </div>
                        <div>
                          <Offcanvas
                            show={show1}
                            onHide={handleClose1}
                            backdrop={false}
                            scroll={true}
                            placement="bottom"
                          >
                            <button onClick={handleClose1} className="cross1">
                              <i className="fa-solid fa-xmark fs-4"></i>
                            </button>
                            <Offcanvas.Body>
                              {show1 && selectedProduct ? (
                                <div
                                  key={selectedProduct._id}
                                  className="row p-4"
                                >
                                  {/* LEFT IMAGE SECTION */}
                                  <div className="col-12 col-lg-6">
                                    <div>
                                      {/* MAIN Swiper */}
                                      <Swiper
                                        key={selectedProduct._id + "-main"}
                                        loop={false}
                                        spaceBetween={10}
                                        navigation={{
                                          prevEl: ".prev",
                                          nextEl: ".next",
                                        }}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper3"
                                        onInit={(swiper) => {
                                          // Safety check for destroyed thumbs
                                          if (
                                            thumbsSwiper &&
                                            thumbsSwiper.destroyed
                                          ) {
                                            setThumbsSwiper(null);
                                          }
                                        }}
                                      >
                                        {[
                                         `${import.meta.env.VITE_API_IMAGE}/${selectedProduct.frontImg}`,
  `${import.meta.env.VITE_API_IMAGE}/${selectedProduct.backImg}`
                                        ]
                                          .filter(Boolean)
                                          .flatMap((img) => [img, img])
                                          .map((img, idx) => (
                                            <SwiperSlide
                                              key={idx}
                                              className="swiper-slide1"
                                            >
                                              <img
                                                src={img}
                                                alt={`Product view ${idx + 1}`}
                                              />
                                            </SwiperSlide>
                                          ))}

                                        <div className="swiper-button-prev prev">
                                          <i className="fa-solid fa-arrow-left"></i>
                                        </div>
                                        <div className="swiper-button-next next">
                                          <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                      </Swiper>

                                      {/* THUMBNAIL Swiper */}
                                      <Swiper
                                        key={selectedProduct._id + "-thumbs"}
                                        onSwiper={setThumbsSwiper}
                                        loop={false}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper1"
                                      >
                                        {[
                                         `${import.meta.env.VITE_API_IMAGE}/${selectedProduct.frontImg}`,
  `${import.meta.env.VITE_API_IMAGE}/${selectedProduct.backImg}`
                                        ]
                                          .filter(Boolean)
                                          .flatMap((img) => [img, img])
                                          .map((img, idx) => (
                                            <SwiperSlide
                                              key={idx}
                                              className="swiper-slide1"
                                            >
                                              <img
                                                src={img}
                                                alt={`Thumb ${idx + 1}`}
                                              />
                                            </SwiperSlide>
                                          ))}
                                      </Swiper>
                                    </div>
                                  </div>

                                  {/* RIGHT DETAILS SECTION */}
                                  <div className="col-12 col-lg-6 pt-3">
                                    <div className="border-bottom pb-4">
                                      <h3>{selectedProduct.title}</h3>
                                      <Box sx={{ "& > legend": { mt: 2 } }}>
                                        <Rating
                                          name="simple-controlled"
                                          value={selectedProduct.rating}
                                          readOnly
                                        />
                                      </Box>
                                      <div>
                                        <span className="fs-1 text-danger me-2">
                                          {`Rs: ${selectedProduct.price}`}
                                        </span>
                                        <del className="me-2 fs-4">
                                          {`Rs ${
                                            selectedProduct.price +
                                            selectedProduct.discount
                                          }`}
                                        </del>
                                        <button className="sale">
                                          {`Sale ${selectedProduct.discountPercentage}%`}
                                        </button>
                                        <br />
                                        <span>
                                          Tax included. Shipping calculated at
                                          checkout.
                                        </span>
                                        <div>
                                          <span className="circle-1 me-2"></span>
                                          <span>16 in Stock</span>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mt-3">
                                      <span>
                                        Care for fiber: 30% more recycled
                                        polyester. We label garments
                                        manufactured using environmentally
                                        friendly technologies and raw materials
                                        with the Join Life label.
                                      </span>

                                      <div className="mt-3">
                                        <span className="fw-bold me-3">
                                          Size:
                                        </span>
                                        <span className="text-grey">
                                          {size}
                                        </span>
                                        <div className="mt-3">
                                          {["2-12", "2-14", "2-16"].map((s) => (
                                            <button
                                              key={s}
                                              onClick={() => setSize(s)}
                                              className={`size ${
                                                size === s ? "set" : ""
                                              }`}
                                            >
                                              {s}
                                            </button>
                                          ))}
                                        </div>
                                      </div>

                                      <div className="mt-2 mb-4">
                                        <span className="fw-bold fs-4">
                                          Color:
                                        </span>{" "}
                                        <span>Gold</span>
                                      </div>

                                      {/* <div className="count-btn">
                                        <button
                                          className="counter"
                                          onClick={increment}
                                        >
                                          <i className="fa-solid fa-plus"></i>
                                        </button>
                                        <span className="ps-3 pe-3">
                                          {count}
                                        </span>
                                        <button
                                          className="counter"
                                          onClick={decrement}
                                        >
                                          <i className="fa-solid fa-minus"></i>
                                        </button>
                                      </div> */}

                                      <div className="add-buy mt-5 d-flex gap-4">
                                        <div className="w-100">
                                          <button onClick ={()=>handleAdd(selectedProduct)} className="w-100 add1">
                                            ADD TO CART
                                          </button>
                                        </div>
                                        {/* <div className="w-100">
                                            <Link to='/buynow'><button onClick={() => selectedProduct && handleBuyNow(selectedProduct)} className="w-100 add">
                                              BUY IT NOW
                                            </button></Link>
                                           
                                        </div> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <p>Product is not selected</p>
                              )}
                            </Offcanvas.Body>
                          </Offcanvas>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center mt-5 w-100">
                      <h6>😊😊</h6>
                      <h1>No Products Found</h1>
                      <p className="text-danger">
                        There are no products matching from selection, please
                        select fewer or clear all.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div
                class="list-layout tab-pane fade show"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                {filterProducts.length > 0 ? (
                  filterProducts.map((product) => (
                    <div class="row border rounded-3 m-3 justify-content-center align-items-center pt-3 pb-3  bg-white mt-3">
                      <div class="col-12 col-sm-4">
                        <Link to={`/product/${product._id}`}>
                          <div class="img-content">
                            <img
                              class=" w-100 front-img"
                              src={`${import.meta.env.VITE_API_IMAGE}/${product.frontImg}`}
                              alt=""
                            />
                            <img
                              class="w-100 back-img"
                              src={`${import.meta.env.VITE_API_IMAGE}/${product.backImg}`}
                              alt=""
                            />
                          </div>
                        </Link>
                      </div>
                      <div class="col-12 col-sm-8">
                        <span>{product.heading}</span>
                        <h6 class="text-danger">{`Rs: ${product.price}`}</h6>
                        <div>
                          <Box sx={{ "& > legend": { mt: 2 } }}>
                            <Rating
                              name="simple-controlled"
                              value={product.rating}
                              readOnly
                            />
                          </Box>
                        </div>
                        <p>
                          Product Specifications Care for fiber: 30% more
                          recycled polyester. We label garments manufactured
                          using environmentally friendly technologies and raw
                          materials with the Join Life label. Washing
                          Instructions Iron maximum 100ºC. Do not bleach/bleach.
                          Do not...
                        </p>
                        <div>
                          <a class="icon-1" href="" onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}>
                            <i class="fa-regular fa-heart"></i>
                          </a>
                          <span
                            onClick={() => {
                              handleShow1(product);
                            }}
                            class="icon-1"
                          >
                            <i class="fa-solid fa-bag-shopping"></i>
                          </span>
                          <a class="icon-1" href="">
                            <i class="fa-solid fa-eye"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center mt-5 ">
                    <h6>😊😊</h6>
                    <h1>No Products Found</h1>
                    <p className="text-danger">
                      There are no products matching from selection, please
                      select fewer or clear all.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* offcanvas filter */}
        <div>
          <Offcanvas show={show} onHide={handleClose}>
            <span className="cross" onClick={handleClose}>
              <i class="fa-solid fa-xmark"></i>
            </span>
            <Offcanvas.Body>
              <div className="categories p-3 border-bottom ">
                <h4>Categories</h4>
                <ul className="list-unstyled categories-list m-0  p-0">
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1"> 14k,58.3 %</label>
                      <br />
                    </div>
                    <div>(12)</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">18k, 75.0 %</label>
                      <br />
                    </div>
                    <div>(12)</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">22k, 91.7%</label>
                      <br />
                    </div>
                    <div>(12)</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">24k,99.99%</label>
                      <br />
                    </div>
                    <div>(12)</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1"> Bangle</label>
                      <br />
                    </div>
                    <div>(12)</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">Best sellar</label>
                      <br />
                    </div>
                    <div>(12)</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">Braclets</label>
                      <br />
                    </div>
                    <div>(12)</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">Brooch</label>
                      <br />
                    </div>
                    <div>(12)</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">Chain</label>
                      <br />
                    </div>
                    <div>(12)</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">Diamond</label>
                      <br />
                    </div>
                    <div>(12)</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">Earring</label>
                      <br />
                    </div>
                    <div>(12)</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">Gold</label>
                      <br />
                    </div>
                    <div>(12)</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">jwelery</label>
                      <br />
                    </div>
                    <div>(12)</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">Neclace</label>
                      <br />
                    </div>
                    <div>(12)</div>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">New products</label>
                      <br />
                    </div>
                    <div>(12)</div>
                  </li>
                </ul>
              </div>
              <div className="filter p-3 border-bottom">
                <h3>Filter</h3>
              </div>
              <div class="border-bottom p-3">
                <h4>Availability</h4>
                <div class="d-flex justify-content-between align-items-center mt-3 mb-4">
                  <div>0 selected</div>
                  <div>
                    <u>Reset</u>
                  </div>
                </div>
                <ul class="list-unstyled p-0 mt-3 ">
                  <li className="pb-2">
                    <div class="d-flex justify-content-between">
                      <div>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label for="vehicle1">In stock</label>
                        <br />
                      </div>
                      <div>
                        <span>(12)</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex justify-content-between">
                      <div>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label for="vehicle1">Out of stock</label>
                        <br />
                      </div>
                      <div>
                        <span>(1)</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
               {/*price filter */}
          <div className="range p-3 border-bottom">
            <h4>Price</h4>
            <div class="d-flex justify-content-between align-items-center mt-3 mb-4">
              <div>The Highest price in Rs.28.00</div>
              <div onClick={() => setValue([0, 300])} className="reset">
                <u>Reset</u>
              </div>
            </div>
            <div>
              <Slider
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
                valueLabelDisplay="off"
                min={0}
                max={300}
                step={1}
              />
              <div className="d-flex gap-4">
                <div>
                  <label>From</label>
                  <input
                    className="border"
                    type="number"
                    onChange={(e) =>
                      setValue([value[0], Number(e.target.value)])
                    }
                    value={value[0]}
                  />
                </div>

                <div>
                  <label>To</label>
                  <input
                    className=" border"
                    type="number"
                    onChange={(e) =>
                      setValue([value[1], Number(e.target.value)])
                    }
                    value={value[1]}
                  />
                </div>
              </div>
            </div>
          </div>
              {/* color */}
              <div class="color-section border-bottom p-3">
                <h4>Color</h4>
                <div class="d-flex justify-content-between align-items-center ">
                  <div>0 selected</div>
                  <div>
                    <u>Reset</u>
                  </div>
                </div>
                <div className="colorcheckbox mt-4">
                  <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                    <div>
                      <input type="checkbox" />
                      <span className="circle beige"></span>
                      Beige
                    </div>
                    <div>
                      {" "}
                      <span className="num">(3)</span>
                    </div>
                  </label>
                  <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                    <div>
                      <input type="checkbox" />
                      <span className="circle bronze"></span>
                      Bronze
                    </div>
                    <div>
                      {" "}
                      <span className="num">(5)</span>
                    </div>
                  </label>
                  <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                    <div>
                      <input type="checkbox" />
                      <span className="circle bronze"></span>
                      Brown
                    </div>
                    <div>
                      {" "}
                      <span className="num">(5)</span>
                    </div>
                  </label>
                  <label className="color-option d-flex justify-content-between mb-2  me-2 ">
                    <div>
                      <input type="checkbox" />
                      <span className="circle gold1"></span>
                      Gold
                    </div>
                    <div>
                      {" "}
                      <span className="num">(6)</span>
                    </div>
                  </label>
                  <label className="color-option d-flex justify-content-between  mb-2 me-2  ">
                    <div>
                      <input type="checkbox" />
                      <span className="circle silver"></span>
                      Silver
                    </div>
                    <div>
                      {" "}
                      <span className="num">(9)</span>
                    </div>
                  </label>
                  <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                    <div>
                      <input type="checkbox" />
                      <span className="circle yellow"></span>
                      Yellow
                    </div>
                    <div>
                      {" "}
                      <span className="num">(5)</span>
                    </div>
                  </label>
                  <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                    <div>
                      <input type="checkbox" />
                      <span className="circle red"></span>
                      Red
                    </div>
                    <div>
                      {" "}
                      <span className="num">(15)</span>
                    </div>
                  </label>
                  <label className="color-option d-flex justify-content-between  mb-2 me-2  ">
                    <div>
                      <input type="checkbox" />
                      <span className="circle bronze"></span>
                      Pink
                    </div>
                    <div>
                      {" "}
                      <span className="num">(5)</span>
                    </div>
                  </label>
                  <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                    <div>
                      <input type="checkbox" />
                      <span className="circle bronze"></span>
                      Bronze
                    </div>
                    <div>
                      {" "}
                      <span className="num">(5)</span>
                    </div>
                  </label>
                  <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                    <div>
                      <input type="checkbox" />
                      <span className="circle bronze"></span>
                      Bronze
                    </div>
                    <div>
                      {" "}
                      <span className="num">(5)</span>
                    </div>
                  </label>
                  <label className="color-option d-flex justify-content-between  mb-2 me-2 ">
                    <div>
                      <input type="checkbox" />
                      <span className="circle bronze"></span>
                      Bronze
                    </div>
                    <div>
                      {" "}
                      <span className="num">(5)</span>
                    </div>
                  </label>
                </div>
                <div class=" pt-4">
                  <div class="side">
                    <img class="w-100 " src="./img/side-banner.webp" alt="" />
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  );
};

export default Showmore;
