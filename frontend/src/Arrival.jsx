import React from 'react'
import { Link } from 'react-router-dom'
import './Arrival.css'

const Arrival = () => {
  return (
    <div>
        <div class="container-section   pt-4 pb-4">
              <div class="row justify-content-center">
                <div data-aos="zoom-in" data-aos-duration="1000" class="col-12 col-lg-8 p-3">
                    <div class="momentum-top">
                         <picture>
                            <source class="w-100 design" media="(max-width:600px)" srcSet="img/jelwo-6-mobile-since-banner.webp"/>
                            <img class="w-100 design" src="img/momentum.webp" alt=""/>
                            <div class="momentum-bottom  text-white ">
                            <h2 data-aos="fade-up">Moments captured in gold & stone</h2>
                            <p data-aos="fade-up" class="fs-5">Jewelry isn’t just something you wear it’s amemory, a milestone, a message.</p>
                            <div data-aos="flip-right"><Link to='/showmore'><button class="btn1 btn-m">EXPLORENOW</button></Link></div>
                          </div>
                         </picture>
                    </div>
                </div>
                <div class="col-12 col-lg-4 p-3">
                    <div data-aos="zoom-in" data-aos-duration="1000" class="arrival-top ">
                          <img class="w-100 design" src="img/arrival.webp" alt=""/>
                          <div class="arrival-bottom text-center text-white w-100">
                            <p data-aos="fade-up" class="fs-5">jewelry deals that sparkle!</p>
                            <h2 data-aos="fade-up">New arrivals that glow</h2>
                            <div data-aos="flip-left"><Link to='/showmore'><button class="btn1">SHOP NOW</button></Link></div>
                          </div>
                    </div>
                </div>
              </div>
        </div>

    </div>
  )
}

export default Arrival
