import React, { useState } from 'react'
import './Buynow.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HouseIcon from '@mui/icons-material/House';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Collapse from 'react-bootstrap/Collapse';
import Badge from '@mui/material/Badge';
import { useBuynow } from '../Context/BuynowContext';
const Buynow = () => {
    const {selectedBuy, clearBuyNowItems} = useBuynow();
    //state for collapse
     const [open, setOpen] = useState(false);
    // state for radio input
    const [selected, setSelected] = useState("ship");
    // state for select country
      const [country, setCountry] = useState("India");
      const handleChange = (e)=>{
        setCountry(e.target.value)
      }
      // state for state
       const [state, setState] = useState("Gujrat");
      const handleChange1 = (e)=>{
        setState(e.target.value)
      }
  return (
    <div className=' p-4 p-md-5'>
       <div className='border-bottom pt-2 pb-2 ps-2 ps-md-5'>
        <h3>Jelwo</h3>
       </div>
       <div className="row ">
           <div className="col-12 col-md-6  border-end border-grey  p-4 p-md-5 pb-0">
            <div className='contact-detail mb-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h5>Contact</h5>
                    <a href="" className='text-primary'>Sign in</a>
                </div>
                <div className='mt-2 mb-2 contact1'>
                    <input type="email" placeholder='Email or mobile phone number'/>
                </div>
                <label>
                    <input type="checkbox"/>
                    Email me with news and offers
                </label>
            </div>
            <div className="delivery-section mt-5 mb-5">
                <h5>Delivery</h5>
               <div> 
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="ship"
                        name="radio-buttons-group"
                    >
                        <div  className={`d-flex align-items-center justify-content-between w-100 border p-1 ship ${selected === "ship" ? "active1" : ""}`}>
                            <div><FormControlLabel onClick={(e)=>setSelected(e.target.value)} value="ship" control={<Radio />} label="Ship" /></div>
                            <div><LocalShippingIcon style={{color:"blue"}}/></div>
                        </div>
                         <div className={`d-flex align-items-center justify-content-between w-100 border p-1 pick ${selected === "pickup" ? "active1" : ""}`}>
                            <div><FormControlLabel onClick={(e)=>setSelected(e.target.value)} value="pickup" control={<Radio />} label="Pick up" /></div>
                            <div><HouseIcon style={{color:"blue"}}/></div>
                        </div>
                    </RadioGroup>
               </div>
            </div>
             <h5>Country</h5>
            <div>
              <select value={country} onChange={handleChange}  id="select">
                <option value="Algeria">Algeria</option>
                <option value="China">China</option>
                <option value="India" >India</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United Sate">United Sate</option>
            </select>
            </div>
            <div className="form mt-4 mb-4">
                <form >
                   <div className='fields d-flex gap-3 '>
                    <div className='w-100'><input type="text" placeholder='First name' className='w-100' /></div>
                    <div className='w-100'><input type="text" placeholder='Last name' className='w-100'  /></div>
                   </div>
                   <div className='mt-3 mb-3 fields'>
                    <input type="text" placeholder='Address'/>
                   </div>
                   <div className='mt-3 mb-3 fields'>
                    <input type="text" placeholder='Apartment,suite, etc. (optional) '/>
                   </div>
                   <div className='mt-3 mb-3 fields d-flex gap-3 '>
                     <div className='w-100'><input type="text" placeholder='City' className='w-100' /></div>
                      <div className='w-100'>
                        <select value={state} onChange={handleChange1}  id="select">
                            <option value="Andaman and Nicobar Island">Andaman and Nicobar Island</option>
                            <option value="AndraPradesh">AndraPradesh</option>
                            <option value="Arunachal Pradesh" >Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandhigarh</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Goa">Goa</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Madhya pradesh">Madhya pradesh</option>
                            <option value="uttar pradesh">Uttar pradesh</option>
                            <option value="Gujrat">Gujrat</option>
                        </select>
                      </div>
                     <div className='w-100'><input type="text" placeholder='PIN Code' className='w-100' /></div>
                   </div>
                    <label>
                    <input type="checkbox"/>
                    Save this information for next time.
                </label>
                </form>
            </div>
            <div>
                <h5>Shipping Address</h5>
                <div className='w-100 fields field '><input type="text" placeholder='Enter your shipping address to view available shipping methods.' className='w-100 bg-secondary opacity-25' /></div>
            </div>
            <div className='mt-4'>
                <h5>Payment</h5>
                <p>All Transaction are secure and encrypted.</p>
                <div className="paymentcard border border-2 rounded-top ">
                    <div className='d-flex justify-content-between border p-3 active rounded-top'>
                        <div>credit card</div>
                        <div><CreditCardIcon style={{color:"brown"}}/></div>
                    </div>
                     <div className='payment-card2 p-3'>
                        <div className='w-100 fields mt-3 '>
                         <input type="number" placeholder='Card Number' className='w-100' />
                       </div>
                       <div className='d-flex gap-3'>
                        <div className='fields mt-3 mb-3 w-100'>
                             <input type="text" placeholder='Expiration date(MM/YY)' className='w-100' />
                        </div>
                        <div className='w-100 fields mt-3 '>
                         <input type="number" placeholder='Security code' className='w-100' />
                       </div>
                       </div>
                       <div className='w-100 fields  mb-3'>
                         <input type="text" placeholder='Name on Code' className='w-100' />
                       </div>
                      <label>
                            <input type="checkbox"  onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}/>
                          Use shipping address as billing address.
                        </label>
                        <Collapse in={open} className='mt-4'>
                            <div id="example-collapse-text">
                                <h5>Billing Address</h5>
                                <div>
                                <select value={country} onChange={handleChange}  id="select">
                                    <option value="Algeria">Algeria</option>
                                    <option value="China">China</option>
                                    <option value="India" >India</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United Sate">United Sate</option>
                                </select>
                                </div>
                                <div className='fields d-flex gap-3 mt-3 mb-3 '>
                                    <div className='w-100'><input type="text" placeholder='First name' className='w-100' /></div>
                                    <div className='w-100'><input type="text" placeholder='Last name' className='w-100'  /></div>
                                </div>
                                 <div className='mt-3 mb-3 fields'>
                                    <input type="text" placeholder='Address'/>
                                </div>
                                 <div className='mt-3 mb-3 fields'>
                                    <input type="text" placeholder='Apartment,suite, etc. (optional) '/>
                                </div>
                                <div className='mt-3 mb-3 fields d-flex gap-3 '>
                                <div className='w-100'><input type="text" placeholder='City' className='w-100' /></div>
                                <div className='w-100'>
                                    <select value={state} onChange={handleChange1}  id="select">
                                        <option value="Andaman and Nicobar Island">Andaman and Nicobar Island</option>
                                        <option value="AndraPradesh">AndraPradesh</option>
                                        <option value="Arunachal Pradesh" >Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chandigarh">Chandhigarh</option>
                                        <option value="Daman and Diu">Daman and Diu</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Madhya pradesh">Madhya pradesh</option>
                                        <option value="uttar pradesh">Uttar pradesh</option>
                                        <option value="Gujrat">Gujrat</option>
                                    </select>
                                </div>
                                <div className='w-100'><input type="text" placeholder='PIN Code' className='w-100' /></div>
                            </div>
                            </div>
                        </Collapse>
                        <div className='mt-3 mb-3'>
                            <button className='pay'>Pay Now</button>
                        </div>
                     </div>
                </div>
                 <div className='mt-3'>
                     <a href="" className='text-primary '>Privacy policy</a>
                 </div>
            </div>
           </div>
           <div className="col-12 col-md-6 total-card ">
               <div className='total-section p-2 p-md-5 '>
                 <div className=" buynow-card ">
                    {selectedBuy.length === 0 ? ( <h5 className='text-primary'>No product add</h5>):(
                        selectedBuy.map((item, index) =>(
                        <div key={item._id || index} className='d-flex gap-3 flex-wrap'>
                            <div className='d-flex gap-3 flex-wrap'>
                                <div>
                                <img src={`http://localhost:5000/uploads/${item.frontImg}`} alt="" className='w-100 rounded img-2' />
                                </div>
                                <div>
                                    <p className='m-0'>{item.title}</p>
                                    <span className='text-secondary'>2-12/Gold</span>
                                </div>
                            </div>
                            <div>{`Rs:${item.price}`}</div>
                        </div>
                    ))
                    )}
                </div>
                <div onClick={clearBuyNowItems} className='text-white mt-5 btn btn-primary'>Clear all product</div>
                <div className='mt-4 d-flex  justify-content-between'>
                    <div>Subtotal</div>
                    <div>Rs:{selectedBuy.reduce((total, item) => total + item.price, 0)}</div>
                </div>
                <div className='mt-1 d-flex  justify-content-between'>
                    <div>Shipping</div>
                    <div>Enter shipping address</div>
                </div>
                  <div className='mt-1 d-flex  justify-content-between'>
                    <div>Total</div>
                    <div><span>INR</span> <span className='fw-bold'>Rs:{selectedBuy.reduce((total, item) => total + item.price, 0)}</span></div>
                </div>
               </div>
           </div>
       </div>
    </div>
  )
}

export default Buynow
