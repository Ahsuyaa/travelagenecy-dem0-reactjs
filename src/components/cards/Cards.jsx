// src/components/CardGrid.js

import React from 'react';
import guided from "../../images/guided.png"
import plan from "../../images/plan.png"
import happy from "../../images/happy.png"
import epay from "../../images/epay.png"
import explore from "../../images/explore.png"
import travel from "../../images/travel.png"
const Cards = () => {
  const cards = [
    { id: 1, title: 'Guided Tour', content: 'Lorem ipsum dolor sit amet.', imageUrl:guided  },
    { id: 2, title: 'Plan Your Tour', content: 'Consectetur adipiscing elit.', imageUrl: plan },
    { id: 3, title: '+1000 Happy Travellers', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl: happy },
    { id: 4, title: 'Easy payment', content: 'Lorem ipsum dolor sit amet.', imageUrl:epay },
    { id: 5, title: 'Explore Beauty', content: 'Consectetur adipiscing elit.', imageUrl: explore },
    { id: 6, title: 'Safe Travel', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl: travel},
    // Add more cards with imageUrls
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 my-10 container mx-auto">
      {cards.map((card) => (
        <div key={card.id} className=" p-6 ">
       <div className='flex justify-center'>
       <img className="w-20 mb-4" src={card.imageUrl} alt={`Image for ${card.title}`} />
        </div>
          <h2 className="text-xl font-semibold mb-4 text-center">{card.title}</h2>
          <p className='text-center'>{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
