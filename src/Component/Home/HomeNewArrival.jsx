import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';

const HomeNewArrival = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data.slice(0, 8));
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div>
            <div className="new-arrival">
                <div className="container">
                    {/* Section Title */}
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8 col-md-10">
                            <div className="section-tittle mb-60 text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                <h2>new<br />arrival</h2>
                            </div>
                        </div>
                    </div>
                    {/* Products */}
                    <div className="row">
                        {products.map((product, index) => (
                            <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="single-new-arrival mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                    <div className="popular-img">
                                        <img
                                            src={product.image}
                                            alt=""
                                            style={{
                                                width: '250px',
                                                height: '300px',
                                                objectFit: 'contain',
                                            }}
                                        />
                                        <div className="favorit-items" onClick={() => {handleAddToCart(product); }}>
                                            <img src="assets/img/gallery/favorit-card.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a style={{ fontSize: '14px' }}>{product.title}</a>
                                        </h3>
                                        <div className="rating mb-10">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <span>$ {product.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Browse More Button */}
                    <div className="row justify-content-center">
                        <div className="room-btn">
                            <a href="catagori.html" className="border-btn">
                                Browse More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeNewArrival;