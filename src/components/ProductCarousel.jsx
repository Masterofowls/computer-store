import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProductCarousel = () => (
    <Swiper spaceBetween={50} slidesPerView={3}>
        {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
                <div style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd' }}>
                    <img src={`/path/to/product${index + 1}.jpg`} alt={`Product ${index + 1}`} style={{ width: '100%' }} />
                    <h3>Product {index + 1}</h3>
                    <p>$100.00</p>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
);

export default ProductCarousel;
