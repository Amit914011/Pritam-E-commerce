import React from 'react';
import product1 from '../assets/Product1.jpg'
import product2 from '../assets/Product2.jpg'
import product3 from '../assets/Product3.jpg'
import product4 from '../assets/Product4.jpg'
import product11 from '../assets/Product11.jpg'
import product12 from '../assets/Product12.jpg'
import product06 from '../assets/Product06.jpg'
import product60 from '../assets/Product60.jpg'

const Trendingsection = () => {
  // Data for cards
  const cards = [
    { id: 1, title: 'Card 1', img1: product1, img2: product4 },
    { id: 2, title: 'Card 2', img1: product3, img2: product2 },
    { id: 3, title: 'Card 3', img1: product11, img2: product12 },
    { id: 4, title: 'Card 4', img1: product06, img2: product60 },
  ];

  return (
    <section className="p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Trending</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="relative group overflow-hidden rounded-lg shadow-lg">
            {/* Image */}
            <img
              src={card.img1}
              alt={card.title}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Image */}
            <img
              src={card.img2}
              alt={card.title}
              className="absolute top-0 left-0 w-full h-[88.5%] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            {/* Title */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trendingsection;
