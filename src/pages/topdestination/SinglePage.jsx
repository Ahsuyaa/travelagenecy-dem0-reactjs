// SinglePage.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
  const { id } = useParams();

  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    tripDate: '',
    numTravelers: 1,
    country: '',
    pickupDetails: '',
    termsAccepted: false,
    // Add more fields as needed
  });

  // State to manage order details
  const [orderDetails, setOrderDetails] = useState({
    tripName: 'pokhara',
    duration: '5 days',
    tripStart: '2023-12-31', // Replace with actual start date
    pricePerPerson: 300,
    advancePaymentPercentage: 0.2, // 20%
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your booking logic here, including using the destination id
    console.log('Form submitted for destination ID', id, 'with data:', formData);
    // You can add API calls or other logic for handling the booking
  };

  // Calculate order details
  const totalPrice = orderDetails.pricePerPerson * formData.numTravelers;
  const advancePayment = totalPrice * orderDetails.advancePaymentPercentage;

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-center text-4xl">Book Now</h2>
      <form className="mt-5 sm:mx-20" onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="tripDate" className="block text-gray-700 text-sm font-bold mb-2">
            Trip Date
          </label>
          <input
            type="date"
            id="tripDate"
            name="tripDate"
            value={formData.tripDate}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numTravelers" className="block text-gray-700 text-sm font-bold mb-2">
            No. of Travelers
          </label>
          <input
            type="number"
            id="numTravelers"
            name="numTravelers"
            value={formData.numTravelers}
            onChange={handleInputChange}
            min="1"
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
            Country Code + Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
            Select Your Country
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
            required
          >
            <option value="">---- Select Your Country ----</option>
            {/* Add your country options here */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="pickupDetails" className="block text-gray-700 text-sm font-bold mb-2">
            Pickup Details/Extra Requirements
          </label>
          <textarea
            id="pickupDetails"
            name="pickupDetails"
            value={formData.pickupDetails}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            I accept terms and conditions
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              className="ml-2"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-teal-400 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Order details */}
      <div className="mt-5  sm:mx-20">
        <h3 className="text-xl font-bold mb-2">Review Order Details</h3>
        <p>{orderDetails.tripName}</p>
        <p>Duration: {orderDetails.duration}</p>
        <p>Trip Start: {orderDetails.tripStart}</p>
        <p>No. of Traveler: {formData.numTravelers} Person(s)</p>
        <p>Advance Payable: US${advancePayment.toFixed(2)} ({(orderDetails.advancePaymentPercentage * 100).toFixed(0)}% of total amount)</p>
        <p>Total Price: US${totalPrice.toFixed(2)}</p>
        <p>Payable Now: US${advancePayment.toFixed(2)}</p>
        <p>The balance of US${(totalPrice - advancePayment).toFixed(2)} is payable upon arrival.</p>
      </div>
    </div>
  );
};

export default SinglePage;

