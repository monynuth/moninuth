import React from 'react'
import HomeHeader from '../Component/Home/HomeHeader'
import HomePreloader from '../Component/Home/HomePreloader'
import AboutBreadcrum from '../Component/About/AboutBreadcrum'
import AboutArea from '../Component/About/AboutArea'
import AboutService from '../Component/About/AboutService'
import AboutSearchModel from '../Component/About/AboutSearchModel'
import AboutSroll from '../Component/About/AboutSroll'
import HomeBottomFooter from '../Component/Home/HomeBottomFooter'
import HomeFooterStart from '../Component/Home/HomeFooterStart'
import HomeItems from '../Component/Home/HomeItems'

const About = () => {
  return (
    <body class="full-wrapper">
        <HomePreloader/>
        <HomeHeader/>
    <main>
        <AboutBreadcrum/>
        <AboutArea/>
        <HomeItems/>
        <AboutService/>
    </main>
        <HomeFooterStart/>
        <HomeBottomFooter/>
        <AboutSearchModel/>
        <AboutSroll/>

</body>
  )
}

export default About