import React from 'react'
import HomePreloader from '../Component/Home/HomePreloader'
import HomeHeader from '../Component/Home/HomeHeader'
import HomeFooterStart from '../Component/Home/HomeFooterStart'
import HomeFooterBottomArea from '../Component/Home/HomeFooterBottomArea'
import HomeSearchModelBegin from '../Component/Home/HomeSearchModelBegin'
import AboutSroll from '../Component/About/AboutSroll'
import { Link } from 'react-router-dom'
import ShopListingArea from '../Component/Shop/ShopListingArea'
import ShopPopularItems from '../Component/Shop/ShopPopularItems'
import ShopServiceArea from '../Component/Shop/ShopServiceArea'

const Shop = () => {
  return (
    <body class="full-wrapper">
    <HomePreloader/>
    <HomeHeader/>
    {/* <!-- header end --> */}
    <main>
        {/* <!-- breadcrumb Start--> */}
        <div class="page-notification">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center">
                                <li class="breadcrumb-item"><Link href="/home">Home</Link></li>
                                <li class="breadcrumb-item"><a href="#">Shop</a></li> 
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- listing Area Start --> */}
    <ShopListingArea/>
{/* <!-- listing-area Area End --> */}
{/* <!--? Popular Items Start --> */}
    <ShopPopularItems/>
{/* <!-- Popular Items End --> */}
{/* <!--? Services Area Start --> */}
    <ShopServiceArea/>
{/* <!--? Services Area End --> */}
</main>

<footer>
    {/* <!-- Footer Start--> */}
    <HomeFooterStart/>
{/* <!-- footer-bottom area --> */}
    <HomeFooterBottomArea/>
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

export default Shop