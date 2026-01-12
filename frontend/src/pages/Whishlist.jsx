import React from 'react'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import './Whishlist.css'
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
//import whishlist context
import { WishlistContext } from "../Context/WhishlistContext";
const Whishlist = () => {
  //stating for rating
   const [value, setValue] = useState(0);
   //whist list
    const {  wishlist, toggleWishlist, wishlistCount } = useContext(WishlistContext);
  return (
    <div>
       <div className="whishlist pt-4 pb-4 text-white text-center">
          <span>HOME - WISHLIST</span>
          <h1 className='mt-3'>Wishlist</h1>
       </div>
       <div className="whish-grid pt-5 pb-5 ">
                {wishlist.length === 0 ? (
                  <p className='text-center text-danger'>No item found in wishlist ✌️</p>
                ) : (
                  wishlist.map((item)=>(
                   <div key={item._id} className="design-card p-3">
                    <Link to="/showmore">
                      <div className="img-content">
                        <img
                          className="w-100 front-img"
                          src={`${import.meta.env.VITE_API_IMAGE}/${item.frontImg}`}
                          alt=""
                        />
                        <img
                          className="w-100 back-img"
                          src={`${import.meta.env.VITE_API_IMAGE}/${item.backImg}`}
                          alt=""
                        />
                        <div className="offer text-start">
                          <span className="pre-inc">{`${item.discountPercentage} %`}</span>
                        </div>
                        <div className="heart-icon">
                          <div className="mb-4">
                            <a href="" onClick={(e) => { e.preventDefault(); toggleWishlist(item); }}>
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
                      <p className="m-0 ">{item.title}</p>
                      <span className="text-danger">
                        {` Rs:${item.price}`}
                        <del className="text-secondary">
                          {` Rs${item.price + item.discount}`}
                      </del>
                      </span>
                      <div>
                       <Box sx={{ "& > legend": { mt: 2 } }}>
                          <Rating
                            name="simple-controlled"
                            value={item.rating}
                            readOnly
                          />
                        </Box>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            handleShow(item);
                          }}
                          className="btn-add w-100 mt-3"
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                ))
                )}
       </div>
    </div>
  )
}

export default Whishlist
