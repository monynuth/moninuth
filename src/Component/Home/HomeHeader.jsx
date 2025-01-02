import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo/logo.png'
import { useCart } from '../CartContext'

const HomeHeader = ({ setShowCart }) => {
    const { cart } = useCart();
  return (
    <header>
        {/* <!-- Header Start --> */}
        <div class="header-area ">
            <div class="main-header header-sticky">
                <div class="container-fluid">
                    <div class="menu-wrapper d-flex align-items-center justify-content-between">
                        <div class="header-left d-flex align-items-center">
                            {/* <!-- Logo --> */}
                            <div class="logo">
                                <a href="index.html"><img src={logo} alt=""/></a>
                            </div>
                            {/* <!-- Main-menu --> */}
                            <div class="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><Link to="/home">Home</Link></li>
                                        <li><Link to="/shop">Shop</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="header-right1 d-flex align-items-center">
                            {/* <!-- Social --> */}
                            <div class="header-social d-none d-md-block">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="https://bit.ly/sai4ull"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-pinterest-p"></i></a>
                            </div>
                            {/* <!-- Search Box --> */}
                            <div class="search d-none d-md-block">
                                <ul class="d-flex align-items-center">
                                    <li class="mr-15">
                                        <div class="nav-search search-switch">
                                            <i class="ti-search"></i>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="card-stor" onClick={() => setShowCart(true)}>
                                            <img src="assets/img/gallery/card.svg" alt=""/>
                                            <span>{cart.length}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Mobile Menu --> */}
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
    </header>
  )
}

export default HomeHeader