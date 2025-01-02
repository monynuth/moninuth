import React from 'react'
import HomePreloader from '../Component/Home/HomePreloader'
import HomeHeader from '../Component/Home/HomeHeader'
import HomeSearchModelBegin from '../Component/Home/HomeSearchModelBegin'
import AboutSroll from '../Component/About/AboutSroll'
import BlogBreadcrum from '../Component/Blog/BlogBreadcrum'
import HomeBottomFooter from '../Component/Home/HomeBottomFooter'
import BlogArea from '../Component/Blog/BlogArea'
import BlogFooter from '../Component/Blog/BlogFooter'
import withPreloader from '../Component/withPreloader'

const Blog = () => {
  return (
    <body class="full-wrapper">
    {/* <HomePreloader/> */}
    <header>
        <HomeHeader/>
    </header>
    <main>
        <BlogBreadcrum/>
        <BlogArea/>
    </main>
    <footer>
        <BlogFooter/>
        <HomeBottomFooter/>
    </footer>
        <HomeSearchModelBegin/>
        <AboutSroll/>
</body>
  )
}

export default withPreloader(Blog)