// src/components/CTA.js
import React from 'react';
import PropTypes from 'prop-types';

const Cta = ({ backgroundImage, heading, subtitle, buttonText, buttonColor }) => {
  return (
    <div className="flex items-center justify-center relative my-20 py-20">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full opacity-60"
      />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-transparent to-teal-900"></div>
      <div className="text-white text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4">{heading}</h1>
        <p className="text-lg m-6">{subtitle}</p>
        <button
          className={`bg-teal-400 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};


export default Cta;
