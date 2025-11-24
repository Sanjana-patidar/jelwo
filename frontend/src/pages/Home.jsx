import React from 'react'
import './Home.css'
import Mainheader from '../Mainheader'
import Service from '../Service'
import Categories from '../Categories'
import Arrival from '../Arrival'
import Luxury from '../Luxury'
import Brand from '../Brand'
import Video from '../Video'
import Card from '../Card'
import Customber from '../Customber'
import Watch from '../Watch'
import { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  useEffect(()=>{
      const timer = setTimeout(() => {
        setShow(true);
      }, 4000); // 2 seconds delay
   return ()=> clearTimeout(timer);
  },[]);
  return (
    <div>
      <Mainheader/>
      <Service/>
      <Categories/>
      <Arrival/>
      <Luxury/>
      <Brand/>
      <Video/>
      <Card/>
      <Customber/>
      <Watch/>
      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
              <div >
                  <div className="ps-5 pe-5">
                    <h5 class="text-center">Don't miss a thing</h5>
                    <div class="text-center"><h1>Join Our newsletter and get 10% off off your first order</h1></div>
                    <div class="search-bar">
                        <div class="subrel">
                            <input type="text" placeholder="enter your name"/>
                            <div class="subs"><button class="subs-btn">SUBSCRIBE</button></div>
                        </div>
                    </div>
                  </div>
                  <div className='p-2'>
                    <img  class="w-100 rounded-3"src="img/modalimg.webp" alt=""/>
                  </div>
               </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default home
