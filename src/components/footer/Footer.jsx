import React from 'react';
import affilated from "../../images/affilated.png"
const Footer = () => {
  return (
    <footer>
    <div className="bg-teal-600 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">QUICK LINKS</h3>
            <ul>
              <li>Company Profile</li>
              <li>About Us</li>
              <li>FAQ</li>
              {/* Add other links here */}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">TOURS IN NEPAL</h3>
            <ul>
              <li>Best of Nepal Tour</li>
              <li>Classical Nepal Tour</li>
              <li>Kathmandu Valley Tour</li>
              <li>Pokhara Tour</li>
              <li>Chitwan Safari</li>
              
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">TREKS IN NEPAL</h3>
            <ul>
              <li>Ghorepani Poonhill Trek</li>
              <li>Annapurna Base Camp Trek</li>
              <li>Mardi Base Camp Trek</li>
              <li>Tshorolpa Trek</li>
              <li>Langtang Valley Trek</li>
              <li>Everest Base Camp Trek</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">CONTACT DETAILS</h3>
            <p> Kathmandu, Nepal</p>
            <p>Tel: +977-1-44000000 , 442000</p>
   
          </div>
        </div>
        <div>
          <h2  className='text-2xl my-4 '>We are Affilated</h2>
          <div className='flex justify-center'>   <img src={affilated} alt="aff"/></div>
       
        </div>
      </div>
    </div>
    <div className='bg-teal-700 py-4'>
      <div className=' container mx-auto text-lg text-white flex justify-between'>
        <p>Copyright 2023,  Travel and Tours</p>
        <p>Design and developed by Aayusha</p>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
