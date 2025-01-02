import React, {useState, useEffect} from 'react'
import { useCart } from '../CartContext';

const ShopListingArea = () => {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            } catch (error) { console.error("Error fetching products:", error); }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

  return (
    <div>
        <div class="category-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-7 col-lg-8 col-md-10">
                        <div class="section-tittle mb-50">
                            <h2>Shop with us</h2>
                            <p>Browse from {products.length} latest items</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-4 ">
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-8 ">
                        <div class="new-arrival new-arrival2">
                            <div class="row">
                                {products.map((product, index) => (
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                        <div class="single-new-arrival mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                            <div class="popular-img">
                                                <img src={product.image} alt="" style={{ width: '250px', height: '300px', objectFit: 'contain' }} />
                                                <div onClick={() => { handleAddToCart(product); }} class="favorit-items">
                                                    <img src="assets/img/gallery/favorit-card.png" alt="" />
                                                </div>
                                            </div>
                                            <div class="popular-caption">
                                                <h3><a style={{ fontSize: '14px' }}>{product.title}</a></h3>
                                                <div class="rating mb-10">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span>$ {product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    {/* <!--? New Arrival End --> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopListingArea