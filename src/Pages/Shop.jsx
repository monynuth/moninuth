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
import withPreloader from '../Component/withPreloader'

const Shop = () => {
    const [showCart, setShowCart] = useState(false);
  return (
    <body class="full-wrapper">
    {/* <HomePreloader/> */}
    <HomeHeader setShowCart={setShowCart} />
    {showCart && <HomeCart setShowCart={setShowCart} />}

    <main>
        <ShopBreadcrumb/>
        <ShopListingArea/>
        <HomeItems/>
        <ShopServiceArea/>
    </main>

    <footer>
        <HomeFooterStart/>
        <HomeFooterBottomArea/>
    </footer>
        <HomeSearchModelBegin/>
        <AboutSroll/>

</body>
  )
}

export default withPreloader(Shop)