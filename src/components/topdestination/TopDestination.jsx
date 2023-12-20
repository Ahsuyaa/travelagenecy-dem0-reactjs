import React from 'react';
import { Link } from 'react-router-dom';

const TopDestination = ({ destinations }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-4xl">TOP DESTINATION</h2>
      <div className="grid md:grid-cols-3 my-10">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="relative flex-1 m-5 overflow-hidden hover:scale-105 transform transition-transform duration-300 ease-in-out"
            
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <img
              src={destination.image}
              alt={destination.alt}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <h4 className='text-3xl my-5 text-white'> 
                  {destination.pname}
                </h4>
                <Link
                  to={`/single/${destination.id}`}
                  className={`bg-teal-400 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDestination;
