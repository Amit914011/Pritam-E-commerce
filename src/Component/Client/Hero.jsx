import React from 'react';
import Card from './Card';
import Trendingsection from '../Trendingsection';
// import h1 from '../assets/h1.jpg'
// import h2 from '../assets/h2.jpg'
// import h3 from '../assets/h3.jpg'
// import Hotelpackage from './Hotelpackage';

const Hero = () => {
  return (
    <>
    <div className="relative h-screen w-full overflow-hidden -z-[999]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        // Provide the correct video path
        autoPlay
        loop
        muted
      >
        <source src="https://cdn.pixabay.com/video/2019/06/01/24114-340421422_tiny.mp4"  type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        {/* Content over the video */}
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg mb-6">Experience the beauty of stunning visuals with immersive content.</p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
    <div className='z-50'>
      
   
    </div>
    <Card/>
    <Trendingsection/>
    
   
    
    </>
  );
};

export default Hero;
