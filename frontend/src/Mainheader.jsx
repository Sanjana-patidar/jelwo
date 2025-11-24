import React from 'react'
import { Link } from 'react-router-dom'
import './Mainheader.css'
const Mainheader = () => {
  return (
    <div>
    <section>
        <div className="main-section">
                <div className="main-relative"><img class="w-100 h-100" src="img/jelwo-6-slider-1.webp" alt=""/>
                   <div className="container-section main-absolute ">
                      <div className="row">
                        <div className="col">
                           <h1 data-aos="fade-right" data-aos-duration="1000">Luxury in <br/> Every details</h1>
                           <p data-aos="fade-left"  data-aos-duration="1000">Golden deals you can't miss !</p>
                           <div>
                            <Link to='/showmore'><button data-aos="fade-right" data-aos-duration="2500" className="btn btn-danger">SHOP NOW</button></Link>
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
        </div>
    </section>
    </div>
  )
}

export default Mainheader
