

import React from 'react';
import Sliders from '../../components/slider/Slider';
import Logo from "../../images/Tour Travel Business Logo.png"
import kalapathar from "../../images/kalapathar.jpg"
import tal from "../../images/tal.jpg"
import chitwan from "../../images/chitwan.jpg"
import Cards from '../../components/cards/Cards';
import voucher from "../../images/voucher.jpg"
import voucher2 from "../../images/voucher2.jpg"
import Cta from '../../components/cta/Cta';
import cta1 from "../../images/cta.jpg"
import TopDestination from '../../components/topdestination/TopDestination';
import image from "../../images/kalapathar.jpg";
import TestimonialsSlider from '../../components/testimonials/TestimonialsSlider';
const Home = () => {
  const carouselImages = [
 kalapathar,
    tal,
    chitwan,
  ];
  const destinations = [
    { id: 1, image: image, alt: 'Destination 1' },
    { id: 2, image: image, alt: 'Destination 2' },
    { id: 3, image: image, alt: 'Destination 3' },
    
  
  ];

  return (
    <div className=''>
   
       
 <div className='md:grid md:grid-cols-3 text-white'>
  <div className=' bg-teal-700 p-4  flex justify-center items-center '>
    <div>
    <h2 className='text-5xl my-5'>
      Make your life adventours
    </h2>
    <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum ipsum mollitia, tempore adipisci maxime amet consequatur ipsam vitae et aut. Id blanditiis animi voluptatum? Nesciunt tenetur dignissimos nulla provident magnam?
    </p>
    <button className={`bg-teal-100 hover:bg-teal-900 text-teal-700 hover:text-white font-bold py-2 px-4 rounded  my-5`}>
              Book Now
            </button>
  </div>
  </div>
  <div className="md:block hidden">
  <Sliders  images={carouselImages} />
  </div>
  <div  className='grid grid-cols-2 md:grid-cols-1'>
    <div className='text-5xl text-center flex justify-center items-center bg-teal-500 p-4 '>
      +1000 happy customer
    </div>
    <div className='text-5xl text-center flex justify-center items-center bg-teal-800 p-4'>
  +100 place to explore
    </div>
  </div>
 </div>

  

    <Cards/>
    <div className='flex  flex-col md:flex-row items-center justify-center container mx-auto '>
    <div className=''>
        <img src={voucher} alt='voucher' className='h-72 mb-5' />
    </div>
    <div className=''>
        <img src={voucher2} alt='voucher' className='h-72 mb-5' />
    </div>
    </div>
    <Cta
        backgroundImage={cta1}
        heading="BEST VALUE WITH BEST VIEW & LOCATION"
        subtitle="Discover amazing content and features.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatem facere sunt nostrum perspiciatis ab quasi tempora earum vitae beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatem facere sunt nostrum perspiciatis ab quasi tempora earum vitae beatae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatem facere sunt nostrum "
        buttonText="Get Started"
       
      />
      <TopDestination destinations={destinations}/>
      <TestimonialsSlider/>
    </div>
  );
};

export default Home;
