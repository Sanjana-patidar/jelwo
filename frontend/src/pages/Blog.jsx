import React from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'

const Blog = () => {
  return (
    <div>
        <div class="container-section blog-banner pt-5 pb-5">
             <div class="text-center text-white">
                <p>HOME-NEWS</p>
                <h1>News</h1>
             </div>
        </div>
    <div class="container-section  pt-5 pb-5">
              <div class="grid-card ">
                    <div class=" blog-card p-2">
                        <div class="blog-img">
                            <div class="blog-hvr"><a href="readmore.html"><i class="fa-solid fa-arrow-right"></i></a></div>
                            <img class="w-100" src="img/blog-1.webp" alt=""/>
                        </div>
                         <div class="blog-content pt-3 text-center">
                            <h4 class="text-danger">10 MAR 2025, | By Andrew johns</h4>
                            <p>As part of our mission create space for women to express their sensuality without shame fear or the patriarchal gaze ...</p>
                            <div><button class="read-more1"><Link className='text-decoration-none' to='/readmore'>Read More</Link></button></div>
                         </div>
                    </div>
                    <div class=" blog-card p-2">
                        <div class="blog-img">
                            <div class="blog-hvr"><a href=""><i class="fa-solid fa-arrow-right"></i></a></div>
                            <img class="w-100" src="img/blog2.webp" alt=""/>
                        </div>
                         <div class="blog-content pt-3 text-center">
                            <h4 class="text-danger">10 MAR 2025, | By Andrew johns</h4>
                            <p>As part of our mission create space for women to express their sensuality without shame fear or the patriarchal gaze ...</p>
                            <div><button class="read-more1"><Link className='text-decoration-none' to='/readmore'>Read More</Link></button></div>
                         </div>
                    </div>
                    <div class=" blog-card p-2">
                        <div class="blog-img">
                            <div class="blog-hvr"><a href=""><i class="fa-solid fa-arrow-right"></i></a></div>
                            <img class="w-100" src="img/blog3.webp" alt=""/>
                        </div>
                         <div class="blog-content pt-3 text-center">
                            <h4 class="text-danger">10 MAR 2025, | By Andrew johns</h4>
                            <p>As part of our mission create space for women to express their sensuality without shame fear or the patriarchal gaze ...</p>
                            <div><button class="read-more1"><Link className='text-decoration-none' to='/readmore'>Read More</Link></button></div>
                         </div>
                    </div>
                    <div class=" blog-card p-2">
                        <div class="blog-img">
                            <div class="blog-hvr"><a href=""><i class="fa-solid fa-arrow-right"></i></a></div>
                            <img class="w-100" src="img/blog4.webp" alt=""/>
                        </div>
                         <div class="blog-content pt-3 text-center">
                            <h4 class="text-danger">10 MAR 2025, | By Andrew johns</h4>
                            <p>As part of our mission create space for women to express their sensuality without shame fear or the patriarchal gaze ...</p>
                            <div><button class="read-more1"><Link className='text-decoration-none' to='/readmore'>Read More</Link></button></div>
                         </div>
                    </div>
                    <div class=" blog-card p-2">
                        <div class="blog-img">
                            <div class="blog-hvr"><a href=""><i class="fa-solid fa-arrow-right"></i></a></div>
                            <img class="w-100" src="img/blog5.webp" alt=""/>
                        </div>
                         <div class="blog-content pt-3 text-center">
                            <h4 class="text-danger">10 MAR 2025, | By Andrew johns</h4>
                            <p>As part of our mission create space for women to express their sensuality without shame fear or the patriarchal gaze ...</p>
                            <div><button class="read-more1"><Link className='text-decoration-none' to='/readmore'>Read More</Link></button></div>
                         </div>
                    </div>
                    <div class=" blog-card p-2">
                        <div class="blog-img">
                            <div class="blog-hvr"><a href=""><i class="fa-solid fa-arrow-right"></i></a></div>
                            <img class="w-100" src="img/blog7.webp" alt=""/>
                        </div>
                         <div class="blog-content pt-3 text-center">
                            <h4 class="text-danger">10 MAR 2025, | By Andrew johns</h4>
                            <p>As part of our mission create space for women to express their sensuality without shame fear or the patriarchal gaze ...</p>
                            <div><button class="read-more1"><Link className='text-decoration-none' to='/readmore'>Read More</Link></button></div>
                         </div>
                    </div>
                    <div class=" blog-card p-2">
                        <div class="blog-img">
                            <div class="blog-hvr"><a href=""><i class="fa-solid fa-arrow-right"></i></a></div>
                            <img class="w-100" src="img/blog8.webp" alt=""/>
                        </div>
                         <div class="blog-content pt-3 text-center">
                            <h4 class="text-danger">10 MAR 2025, | By Andrew johns</h4>
                            <p>As part of our mission create space for women to express their sensuality without shame fear or the patriarchal gaze ...</p>
                            <div><button class="read-more1"><Link className='text-decoration-none' to='/readmore'>Read More</Link></button></div>
                         </div>
                    </div>
                    <div class=" blog-card p-2">
                        <div class="blog-img">
                            <div class="blog-hvr"><a href=""><i class="fa-solid fa-arrow-right"></i></a></div>
                            <img class="w-100" src="img/blog9.webp" alt=""/>
                        </div>
                         <div class="blog-content pt-3 text-center">
                            <h4 class="text-danger">10 MAR 2025, | By Andrew johns</h4>
                            <p>As part of our mission create space for women to express their sensuality without shame fear or the patriarchal gaze ...</p>
                            <div><button class="read-more1"><Link className='text-decoration-none' to='/readmore'>Read More</Link></button></div>
                         </div>
                    </div>
              </div>
    </div>
    </div>
  )
}

export default Blog
