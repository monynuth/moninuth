import React, { useState } from 'react'
import HomePreloader from '../Component/Home/HomePreloader'
import HomeHeader from '../Component/Home/HomeHeader'
import HomeHeroArea from '../Component/Home/HomeHeroArea'
import HomeItems from '../Component/Home/HomeItems'
import HomeNewArrival from '../Component/Home/HomeNewArrival'
import HomeCollection from '../Component/Home/HomeCollection'
import HomePopular from '../Component/Home/HomePopular'
import HomeServices from '../Component/Home/HomeServices'
import HomeFooterStart from '../Component/Home/HomeFooterStart'
import HomeFooterBottomArea from '../Component/Home/HomeFooterBottomArea'
import HomeSearchModelBegin from '../Component/Home/HomeSearchModelBegin'
import HomeCart from '../Component/Home/HomeCart'
import withPreloader from '../Component/withPreloader'
const Home = () => {

  const [showCart, setShowCart] = useState(false);

  return (
    <body class="full-wrapper">
    {/* <HomePreloader/> */}
      <HomeHeader setShowCart={setShowCart} />
      {showCart && <HomeCart setShowCart={setShowCart} />}
      <HomeHeroArea />
      <HomeItems />
      <HomeNewArrival />
      <HomeCollection />
      <HomePopular />
      <HomeServices />
    <footer>
        <HomeFooterStart/>
        <HomeFooterBottomArea/>
    </footer>
        <HomeSearchModelBegin/>
</body>
  )
}

export default withPreloader(Home)