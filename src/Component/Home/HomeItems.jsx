import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const HomeItems = () => {
    const [images, setImages] = useState([]);

    const fetchProductsByIds = async (ids) => {
        try {
            const urls = ids.map((id) => `https://fakestoreapi.com/products/${id}`);
            const productPromises = urls.map((url) =>
                fetch(url).then((response) => response.json())
            );
            const products = await Promise.all(productPromises);

            const productImages = products.map((product) => product.image);
            setImages(productImages);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProductsByIds([3, 5, 14, 15]);
    }, []);

    console.log(images)

  return (
    <div>
        <div>
            <div class="popular-items pt-50">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-popular-items mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <div class="popular-img">
                                <img src={images[0]} alt="" style={{ height: '300px', width: '250px', objectFit: 'contain' }} />
                                <div class="img-cap">
                                    <span>Men's clothing</span>
                                </div>
                                <div class="favorit-items">
                                    <Link to="/shop" class="btn">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-popular-items mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <div class="popular-img">
                                <img src={images[1]} alt="" style={{height: '300px', width: '250px', objectFit: 'contain'}}/>
                                <div class="img-cap">
                                    <span>Jewelery</span>
                                </div>
                                <div class="favorit-items">
                                    <Link to="/shop" class="btn">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-popular-items mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <div class="popular-img">
                                <img src={images[2]} alt="" style={{ height: '300px', width: '250px', objectFit: 'contain' }} />
                                <div class="img-cap">
                                    <span>Electronics</span>
                                </div>
                                <div class="favorit-items">
                                    <Link to="/shop" class="btn">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-popular-items mb-50 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <div class="popular-img">
                                <img src={images[3]} alt="" style={{ height: '300px', width: '250px', objectFit: 'contain' }} />
                                <div class="img-cap">
                                    <span>Women's clothing</span>
                                </div>
                                <div class="favorit-items">
                                    <a href="shop.html" class="btn">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HomeItems