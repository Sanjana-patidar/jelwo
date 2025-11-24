import React from 'react'
import './Video.css'
import {Link} from 'react-router-dom'
const Video = () => {
  return (
    <div>
        <div class="container-section  mt-3 mb-3">
             <div class="row justify-content-center pt-4 pb-4">
                    <div class="col-12 col-sm-6 col-lg-4 mb-4 mb-sm-0 order-1">
                        <div class="traditional">
                           <div class="tradition-top">
                            <img class="w-100 top" src="img/traditional.webp" alt=""/>
                           </div>
                           <div class="tradition-bottom">
                            <img class="w-100 bottom" src="img/traditional-back.webp" alt=""/>
                            <div class="tradition-content text-center text-white ps-4 pe-4 w-100">
                                <h4 data-aos="fade-up">Jewelry that tells your story with sparkle</h4>
                                <div><Link to="/showmore" className="text-decoration-none"><button data-aos="fade-up" class="btn1">SHOP NOW</button></Link></div>
                            </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 mb-4 mb-sm-0 order-3 order-sm-2">
                        <div class="traditional">
                           <a href="">
                            <img class="w-100 video" src="img/video.webp" alt=""/>
                           </a>
                           <div class="text-white text-center video-rel">
                           <a href="https://www.youtube.com/watch?v=QaNrBVqmsNc&pp=ygUPamV3ZWxsZXJ5IHZpZGVv"><span class="play-btn "><i class="fa-solid fa-play"></i></span></a> 
                            <h2 data-aos="fade-up" class="mt-5">Watch Video</h2>
                           </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 mt-sm-4 mt-md-0 order-2 order-sm-3 mb-4">
                        <div class="traditional">
                           <div class="tradition-top">
                            <img class="w-100 top" src="img/handcraft.webp" alt=""/>
                           </div>
                           <div class="tradition-bottom">
                            <img class="w-100 bottom" src="img/traditional-back.webp" alt=""/>
                            <div class="tradition-content text-center text-white ps-4 pe-4 w-100">
                                <h4 data-aos="fade-up">A little shine for your biggest moments</h4>
                                <div><Link to="/showmore" className="text-decoration-none"><button data-aos="fade-up" class="btn1">SHOP NOW</button></Link></div>
                            </div>
                           </div>
                        </div>
                    </div>
             </div>
        </div>
    
    </div>
  )
}

export default Video
