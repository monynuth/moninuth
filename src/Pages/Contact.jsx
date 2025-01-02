import React from 'react'
import HomePreloader from '../Component/Home/HomePreloader'
import HomeHeader from '../Component/Home/HomeHeader'
import ContactBreadcrum from '../Component/Contact/ContactBreadcrum'
import HomeSearchModelBegin from '../Component/Home/HomeSearchModelBegin'
import AboutSroll from '../Component/About/AboutSroll'
import ContactArea from '../Component/Contact/ContactArea'
import ContactFooter from '../Component/Contact/ContactFooter'
import ContactBottomArea from '../Component/Contact/ContactBottomArea'
 import withPreloader from '../Component/withPreloader'

const Contact = () => {
  return (
    <body class="full-wrapper">
    {/* <HomePreloader/> */}
    <header>
        <HomeHeader/>
    </header>
    <main>
        <ContactBreadcrum/>
        <ContactArea/>
    </main>
    <footer>
        <ContactFooter/>
        <ContactBottomArea/>
    </footer>
        <HomeSearchModelBegin/>
        <AboutSroll/>

</body>
  )
}

export default withPreloader(Contact)