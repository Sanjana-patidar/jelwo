import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Luxury.css";
import "./Navbar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Offcanvas from "react-bootstrap/Offcanvas";
import axios from "axios";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useCart } from "./Context/CartContext";
// whislist context
import { WishlistContext } from "./Context/WhishlistContext";
import { useNavigate } from "react-router-dom";
import { useBuynow } from './Context/BuynowContext';
const Card = () => {
  const {addBuyNow} = useBuynow();
  const navigate = useNavigate();
  const [value, setValue] = useState({});
  const [show, setShow] = useState(false);
  const [innershow, setInnershow] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [size, setSize] = useState("2-12");
  // state for send data  in cart
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  //whistlist provider
  const { wishlist, toggleWishlist, wishlistCount } =
    useContext(WishlistContext);
  //  state to hold products from API
  const [luxuries, setLuxuries] = useState([]);
  const { addToCart, openCart,  increaseQty,  decreaseQty, cart} = useCart();
  // Fetch products from backend
  useEffect(() => {
    axios
      .get("https://jelwo.onrender.com/api/products") //  your API URL
      .then((res) => {
        setLuxuries(res.data); // assuming your backend returns array
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  // function for rating 
  
  const handleClose = () => {
    setShow(false);
    setSelectedProduct(null);
    setSize("2-12");
    // Reset thumbs swiper to prevent destroyed reference
    setThumbsSwiper(null);
  };
  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
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
  // find product already in cart (if exists)
const cartItem = selectedProduct
  ? cart.find((item) => item._id === selectedProduct._id)
  : null;

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop={false}
        scroll={true}
        placement="bottom"
      >
        <button onClick={handleClose} className="cross1">
          <i className="fa-solid fa-xmark fs-4"></i>
        </button>
        <Offcanvas.Body>
          {show && selectedProduct ? (
            <div key={selectedProduct._id} className="row p-4">
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
                      if (thumbsSwiper && thumbsSwiper.destroyed) {
                        setThumbsSwiper(null);
                      }
                    }}
                  >
                    {[`https://jelwo.onrender.com/uploads/${selectedProduct.frontImg}`,
  `https://jelwo.onrender.com/uploads/${selectedProduct.backImg}`]
                      .filter(Boolean)
                      .flatMap((img) => [img, img])
                      .map((img, idx) => (
                        <SwiperSlide key={idx} className="swiper-slide1">
                          <img src={img} alt={`Product view ${idx + 1}`} />
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
                    {[`https://jelwo.onrender.com/uploads/${selectedProduct.frontImg}`,
  `https://jelwo.onrender.com/uploads/${selectedProduct.backImg}`]
                      .filter(Boolean)
                      .flatMap((img) => [img, img])
                      .map((img, idx) => (
                        <SwiperSlide key={idx} className="swiper-slide1">
                          <img src={img} alt={`Thumb ${idx + 1}`} />
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
                      {`Rs ${selectedProduct.price + selectedProduct.discount}`}
                    </del>
                    <button className="sale">
                      {`Sale ${selectedProduct.discountPercentage}%`}
                    </button>
                    <br />
                    <span>Tax included. Shipping calculated at checkout.</span>
                    <div>
                      <span className="circle-1 me-2"></span>
                      <span>16 in Stock</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <span>
                    Care for fiber: 30% more recycled polyester. We label
                    garments manufactured using environmentally friendly
                    technologies and raw materials with the Join Life label.
                  </span>

                  <div className="mt-3">
                    <span className="fw-bold me-3">Size:</span>
                    <span className="text-grey">{size}</span>
                    <div className="mt-3">
                      {["2-12", "2-14", "2-16"].map((s) => (
                        <button
                          key={s}
                          onClick={() => setSize(s)}
                          className={`size ${size === s ? "set" : ""}`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-2 mb-4">
                    <span className="fw-bold fs-4">Color:</span>{" "}
                    <span>Gold</span>
                  </div>
                   <div className="count-btn">
                    <button
                      className="counter"
                      onClick={() => cartItem && increaseQty(cartItem._id)}
                      // disabled={!cartItem}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>

                    <span className="ps-3 pe-3">{cartItem ? cartItem.qty : 0}</span>

                    <button
                      className="counter"
                      onClick={() => cartItem && decreaseQty(cartItem._id)}
                      // disabled={!cartItem || cartItem.qty <= 1}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                  </div>
                  <div className="add-buy mt-5 d-flex gap-4">
                    <div className="w-100">
                      <button className="w-100 add1" onClick={handleAdd} >
                        ADD TO CART
                      </button>
                    </div>
                    <div className="w-100">
                        <button onClick={() => selectedProduct && handleBuyNow(selectedProduct)} className="w-100 add">BUY IT NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Product is not selected</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      <div>
        <div className="container-section border-bottom">
          <div className="text-center luxury-top pt-4 pb-4">
            <h2 data-aos="fade-up">New Arrivals</h2>
          </div>
          <div className="luxury-bottom pb-5 ">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={false}
              spaceBetween={30}
              slidesPerView={4}
              breakpoints={{
                320: { slidesPerView: 1 },
                450: { slidesPerView: 1},
                562: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              className="mySwiper"
            >
              {luxuries.map((luxurie) => (
                <SwiperSlide key={luxurie._id}>
                  <div data-aos="zoom-in" data-aos-duration="2000" className="design-card p-3">
                    <Link to={`/product/${luxurie._id}`}>
                      <div className="img-content">
                        <img
                          className="w-100 front-img"
                          src={`https://jelwo.onrender.com/uploads/${luxurie.frontImg}`}
                          alt=""
                        />
                        <img
                          className="w-100 back-img"
                          src={`https://jelwo.onrender.com/uploads/${luxurie.backImg}`}
                          alt=""
                        />
                        <div className="offer text-start">
                          <span className="pre-inc">{`${luxurie.discountPercentage} %`}</span>
                        </div>
                        <div className="heart-icon">
                          <div className="mb-4">
                            <a
                              href=""
                              onClick={(e) => {
                                e.preventDefault();
                                toggleWishlist(luxurie);
                              }}
                            >
                              <i className="fa-regular fa-heart"></i>
                            </a>
                          </div>
                          <div>
                            <a href="">
                              <i className="fa-regular fa-eye"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="design-content text-center mt-4">
                      <p className="m-0 ">{luxurie.title}</p>
                      <span className="text-danger">
                        {` From Rs:${luxurie.price}`}{" "}
                        <del className="text-secondary">{`Rs${
                          luxurie.price + luxurie.discount
                        }`}</del>
                      </span>
                      <div>
                        <Box sx={{ '& > legend': { mt: 2 } }}>
                          <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Box>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            handleShow(luxurie);
                          }}
                          className="btn-add w-100 mt-3"
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
