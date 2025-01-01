import React from 'react'
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

const Home = () => {
  return (
    <body class="full-wrapper">
    <HomePreloader/>
    <HomeHeader/>
    <main>
        <HomeHeroArea/>
        <HomeItems/>
        <HomeNewArrival/>
        <HomeCollection/>
{/* <!-- End collection --> */}
{/* <!--? Popular Locations Start 01--> */}
        <HomePopular/>
{/* <!-- Popular Locations End --> */}
{/* <!--? Services Area Start --> */}
        <HomeServices/>
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
</body>
  )
}

export default Home