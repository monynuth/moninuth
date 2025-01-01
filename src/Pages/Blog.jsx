import React from 'react'
import HomePreloader from '../Component/Home/HomePreloader'
import HomeHeader from '../Component/Home/HomeHeader'
import AboutBreadcrum from '../Component/About/AboutBreadcrum'
import HomeSearchModelBegin from '../Component/Home/HomeSearchModelBegin'
import AboutSroll from '../Component/About/AboutSroll'
import BlogBreadcrum from '../Component/Blog/BlogBreadcrum'
import HomeBottomFooter from '../Component/Home/HomeBottomFooter'
import BlogArea from '../Component/Blog/BlogArea'

const Blog = () => {
  return (
    <body class="full-wrapper">
    <HomePreloader/>
    <header>
        <HomeHeader/>
    </header>
    <main>
        <BlogBreadcrum/>
        {/* <AboutBreadcrum/> */}
        {/* <!-- breadcrumb End--> */}
        {/* <!-- Hero Area End--> */}
        {/* <!--? Blog Area Start--> */}
        <BlogArea/>
        {/* <!-- Blog Area End --> */}
    </main>
    <footer>
        {/* <!-- Footer Start--> */}
        <div class="footer-area footer-padding">
            <div class="container-fluid ">
                <div class="row d-flex justify-content-between">
                    <div class="col-xl-3 col-lg-3 col-md-8 col-sm-8">
                     <div class="single-footer-caption mb-50">
                       <div class="single-footer-caption mb-30">
                          {/* <!-- logo --> */}
                          <div class="footer-logo mb-35">
                           <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""/></a>
                       </div>
                       <div class="footer-tittle">
                           <div class="footer-pera">
                               <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                           </div>
                       </div>
                       {/* <!-- social --> */}
                       <div class="footer-social">
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="https://bit.ly/sai4ull"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-pinterest-p"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
            <div class="single-footer-caption mb-50">
                <div class="footer-tittle">
                    <h4>Quick links</h4>
                    <ul>
                        <li><a href="#">Image Licensin</a></li>
                        <li><a href="#">Style Guide</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
            <div class="single-footer-caption mb-50">
                <div class="footer-tittle">
                    <h4>Shop Category</h4>
                    <ul>
                        <li><a href="#">Image Licensin</a></li>
                        <li><a href="#">Style Guide</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4">
            <div class="single-footer-caption mb-50">
                <div class="footer-tittle">
                    <h4>Pertners</h4>
                    <ul>
                        <li><a href="#">Image Licensin</a></li>
                        <li><a href="#">Style Guide</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4">
            <div class="single-footer-caption mb-50">
                <div class="footer-tittle">
                    <h4>Get in touch</h4>
                    <ul>
                        <li><a href="#">(89) 982-278 356</a></li>
                        <li><a href="#">demo@colorlib.com</a></li>
                        <li><a href="#">67/A, Colorlib, Green road, NYC</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
{/* <!-- footer-bottom area --> */}
        <HomeBottomFooter/>
  {/* <!-- Footer End--> */}
</footer>
{/* <!--? Search model Begin --> */}
        <HomeSearchModelBegin/>
{/* <!-- Search model end --> */}
{/* <!-- Scroll Up --> */}
        <AboutSroll/>
</body>
  )
}

export default Blog