import React, {useState} from 'react'
import HomePreloader from '../Component/Home/HomePreloader'
import HomeHeader from '../Component/Home/HomeHeader'
import HomeFooterStart from '../Component/Home/HomeFooterStart'
import HomeFooterBottomArea from '../Component/Home/HomeFooterBottomArea'
import HomeSearchModelBegin from '../Component/Home/HomeSearchModelBegin'
import AboutSroll from '../Component/About/AboutSroll'
import { Link } from 'react-router-dom'
import ShopListingArea from '../Component/Shop/ShopListingArea'
import ShopServiceArea from '../Component/Shop/ShopServiceArea'
import HomeItems from '../Component/Home/HomeItems'
import HomeCart from '../Component/Home/HomeCart'
import ShopBreadcrumb from '../Component/Shop/ShopBreadcrum'

const Shop = () => {
    const [showCart, setShowCart] = useState(false);
  return (
    <body class="full-wrapper">
    <HomePreloader/>
    <HomeHeader setShowCart={setShowCart} />
    {showCart && <HomeCart setShowCart={setShowCart} />}
    {/* <!-- header end --> */}
    <main>
        {/* <!-- breadcrumb Start--> */}
        <ShopBreadcrumb/>
        {/* <!-- listing Area Start --> */}
    <ShopListingArea/>
{/* <!-- listing-area Area End --> */}
{/* <!--? Popular Items Start --> */}
    {/* <ShopPopularItems/> */}
    <HomeItems/>
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