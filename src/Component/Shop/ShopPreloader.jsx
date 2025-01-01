import React from 'react'
import loader from '../img/logo/loder.png'

const ShopPreloader = () => {
  return (
    <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                    <img src={loader} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopPreloader