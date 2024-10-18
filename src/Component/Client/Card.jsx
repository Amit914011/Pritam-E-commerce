import React from 'react';

const Card = () => {
  const products = [
    {
      id: 1,
      name: 'Elegant Marble Bowl',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/z/k/w/m-r-pink-stoneberg-original-imah555sqze7atry.jpeg?q=70', // Replace with actual image URL
      price: 2999,
    },
    {
      id: 2,
      name: 'Stylish Table Lamp',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/t/k/j/deso-783-tnfart-original-imah4czmuzwsbuaj.jpeg?q=70', // Replace with actual image URL
      price: 4999,
    },
    {
      id: 3,
      name: 'Vintage Wooden Clock',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/q/v/t/1-3240sm02-fastrack-men-original-imah4ncmpgfbfygg.jpeg?q=70', // Replace with actual image URL
      price: 1999,
    },
    {
      id: 4,
      name: 'Modern Desk Chair',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/m/x/3/1-rd-9102-fnb-men-original-imah4jwfzkfuwfhj.jpeg?q=70', // Replace with actual image URL
      price: 7999,
    },
    {
      id: 5,
      name: 'Decorative Wall Art',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/j/p/v/l-os-100-vdorgnl-nvy-veirdo-original-imah256cvtzjwn5r.jpeg?q=70', // Replace with actual image URL
      price: 2999,
    },
    // {
    //   id: 6,
    //   name: 'Elegant Floor Lamp',
    //   image: 'https://via.placeholder.com/400x300', // Replace with actual image URL
    //   price: 8999,
    // },
  ];

  return (
    <div className="container mx-max px-4  py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Loop through the products array and render each product as a card */}
        {products.map((product) => (
          <div key={product.id} className="max-w-xs rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <img className="w-full h-96 object-cover" src={product.image} alt={product.name} />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{product.name}</h2>
              <p className="text-gray-700 text-base mb-4">Price: ₹{product.price}</p>
              {/* <button className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                Add to Cart
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
