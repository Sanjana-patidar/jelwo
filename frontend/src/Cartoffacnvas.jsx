import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useCart } from "./Context/CartContext";
const Cartoffacnvas = () => {
  const { cart, showCart, closeCart, removeFromCart,totalQty } = useCart();

  return (
    <>
      <Offcanvas
        show={showCart}
        onHide={closeCart}
        scroll={true}
        backdrop={false}
        placement="end"
      >
          <Offcanvas.Body>
           {cart.length === 0?(
            <>
            <div className="d-flex justify-content-between p-4">
                <div>
                 <p className="text-danger ">No item added in cart</p>
               </div>
               <div>
                <button className="close" onClick={closeCart}>
                  <i class="fa-solid fa-xmark"></i>
                </button>
               </div>
            </div>
            </>
           ):
           (
           <>
           <div className="off-top pt-3 pb-3  text-center">
              <span>
                New customers save 10% with code{" "}
                <span className="fw-bold">WELCOME10</span>
              </span>
            </div>
            <div className="shop d-flex justify-content-between p-3">
              <div>
                <span>My Shopping Cart</span>
              </div>
              <div>
                <button className="close" onClick={closeCart}>
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
           {cart.map(item =>(
             <div className="cards border-bottom pb-3">
              <div className="row p-3 align-items-center ">
                <div className="col-4">
                  <div>
                    <img
                      className="w-100 rounded"
                      src={`http://localhost:5000/uploads/${item.frontImg}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="mb-4 ">
                    <span>{item.title}</span>
                    <br />
                    <span className="text-danger">
                      {`Rs: ${item.price}`}<del className="text-secondary ms-3">{`Rs: ${item.discount}`}</del>
                    </span>
                    <br />
                    <span>Size: 28,</span>
                    <br />
                    <span>color: Gold</span>
                    <br />
                  </div>
                  <i onClick={() => removeFromCart(item._id)} class="fa-solid fa-trash text-danger  ms-3"></i>
                </div>
              </div>
            </div>
           ))}
            <div className="view-cart p-3">
              <div className="fw-bold d-flex justify-content-between">
                <div>Subtotal</div>
                <div>Subtotal: Rs.{cart.reduce((total, item) => total + item.price, 0)}</div>
              </div>
              <div className="fw-bold d-flex justify-content-between">
                <div>Total Quantity</div>
                <div>{totalQty}</div>
              </div>
              <div className="mt-2 mb-2">
                <span>
                  {" "}
                  Taxes, discounts and shipping calculated at checkout.
                </span>
              </div>
              <div className=" gap-3  mt-4 d-block d-sm-flex ">
                <button className="w-100 mb-2 mb-sm-0 p-2 rounded-5 bg-danger text-white ">
                  VIEW CART
                </button>
                <button className="w-100 p-2 rounded-5 bg-secondary text-white">
                  <Link to='/buynow' className="text-decoration-none"> CHECKOUT</Link>
                </button>
              </div>
            </div>
           </>
           )
           }
          </Offcanvas.Body>
      </Offcanvas>
      {/* inner offcanvas end */}
    </>
  );
};

export default Cartoffacnvas;
