import React from 'react'
import './Service.css'
import { motion } from "framer-motion";
const Service = () => {
  return (
    <div  className=' border-bottom border-secondary '>
        <div class="container-section pt-5 pb-5 card ">
              <div class="card-section ">
                <div class="box p-3">
                    <div class="row justify-content-center align-items-center">
                        <motion.div animate={{ rotate: 360 }}   transition={{ duration: 1, repeat: Infinity, ease: "linear" }} class="col-4 hvr-rotate" ><img class="w-100 card-img" src="img/ser-1.png" alt=""/></motion.div>
                        <div class="col-8 ">
                            <h6 data-aos="flip-left">Free Shipping</h6>
                            <p data-aos="flip-right">Free Shipping All Order</p>
                        </div>
                    </div>
                </div>
                <div class="box p-3">
                    <div class="row justify-content-center align-items-center">
                        <motion.div animate={{ rotate: 360 }}   transition={{ duration: 1, repeat: Infinity, ease: "linear" }} class="col-4 hvr-rotate" ><img class="w-100 card-img " src="img/ser-2.png" alt=""/></motion.div>
                        <div class="col-8 ">
                            <h6 data-aos="flip-left">Quality Support</h6>
                            <p data-aos="flip-right">Contact us Anytime</p>
                        </div>
                    </div>
                </div>
                <div class="box p-3">
                    <div class="row justify-content-center align-items-center">
                        <motion.div animate={{ rotate: 360 }}   transition={{ duration: 1, repeat: Infinity, ease: "linear" }} class="col-4 hvr-rotate" ><img class="w-100 card-img" src="img/ser-3.png" alt=""/></motion.div>
                        <div class="col-8">
                            <h6 data-aos="flip-left">Money Return </h6>
                            <p data-aos="flip-right">30 days for free return</p>
                        </div>
                    </div>
                </div>
                <div class="box p-3">
                    <div class="row justify-content-center align-items-center">
                        <motion.div animate={{ rotate: 360 }}   transition={{ duration: 1, repeat: Infinity, ease: "linear" }} class="col-4 hvr-rotate" ><img class="w-100 card-img" src="img/ser-4.png" alt=""/></motion.div>
                        <div class="col-8">
                            <h6 data-aos="flip-left">Secure payment</h6>
                            <p data-aos="flip-right">Payement card are secure</p>
                        </div>
                    </div>
                </div>
              </div>
        </div>

    </div>
  )
}

export default Service
