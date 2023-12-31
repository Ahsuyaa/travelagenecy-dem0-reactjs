// src/components/Carousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 2000,

   
  };
  


  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide-item ">
            <img className="w-full h-[500px] object-cover" src={image} alt={`Slide ${index + 1}`} />
       
          </div>
        ))}
        
      </Slider>
    
 
    </div>
  );
};

export default Carousel;
