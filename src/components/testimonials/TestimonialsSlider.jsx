import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./teestimonialslider.css"
import quotes from "../../images/quotes.png"
const TestimonialsSlider = () => {
  const testimonialsData = [
    {
      id: 1,
      author: 'aaisa',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
      id: 2,
      author: 'AAYUSHA',
      text: 'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.',
    },
    {
        id: 3,
        author: 'aaisa',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      },
      {
        id: 4,
        author: 'AAYUSHA',
        text: 'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.',
      },
      {
        id: 5,
        author: 'aaisa',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      },
   
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display two testimonials at once
    slidesToScroll: 1,
   
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
  };

  return (
   <div className="p-12 container mx-auto">
     
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div className='px-3 pt-6 relative '>
            <div key={testimonial.id} className="p-6 rounded-lg border border-black">
              <div className="absolute top-0 right-10 w-10 color-teal-500 mt-2 mr-2"><img src={quotes} alt="quotes"/></div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="text-gray-800 font-bold">{testimonial.author}</p>
            </div>
            </div>
          ))}
        </Slider>

    </div>
  );
};

export default TestimonialsSlider;
