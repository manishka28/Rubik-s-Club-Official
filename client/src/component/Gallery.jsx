import React, { useState, useEffect } from 'react';

const items = [
  { type: 'Image', title: 'Image 1', date: 'Date - Event', src: 'https://tse2.mm.bing.net/th?id=OIP.D1yYV1CbDWM8RR3uUukhwwHaE7&pid=Api&P=0&h=180' },
  { type: 'Video', title: 'Video 1', date: 'Date-Event', src: 'https://tse2.mm.bing.net/th?id=OIP.D1yYV1CbDWM8RR3uUukhwwHaE7&pid=Api&P=0&h=180' },
  { type: 'Image', title: 'Image 2', date: 'Date - Event', src: 'https://tse2.mm.bing.net/th?id=OIP.D1yYV1CbDWM8RR3uUukhwwHaE7&pid=Api&P=0&h=180' },
  { type: 'Video', title: 'Video 2', date: 'Date-Event', src: 'https://tse2.mm.bing.net/th?id=OIP.D1yYV1CbDWM8RR3uUukhwwHaE7&pid=Api&P=0&h=180' },
  { type: 'Image', title: 'Image 3', date: 'Date - Event', src: 'img1.JPG' },
  { type: 'Video', title: 'Video 3', date: 'Date-Event', src: 'img1.JPG' },
];

const gradientStyle = {
  background: 'linear-gradient(179.6deg, #FFFFFF 0.35%, rgba(255, 255, 255, 0.38) 122.8%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
};

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(4);
      }
    };

    updateVisibleItems();

    window.addEventListener('resize', updateVisibleItems);

    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < items.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= items.length - visibleItems;

  return (
    <div className="relative min-h-screen flex flex-col items-center py-10">
      <div className="absolute inset-0 pointer-events-none">
        {/* <div className="absolute inset-0 bg-[#18457C] blur-[100px] opacity-30"></div> */}
      </div>
      <h1 className="text-6xl font-extrabold text-white mb-10 pb-5" style={gradientStyle}>Gallery</h1>
      <div className="flex space-x-4 mb-10">
        <button 
          onClick={handlePrev} 
          className={`text-white ${isPrevDisabled ? 'text-gray-500' : 'hover:text-gray-300'}  border-2 border-white rounded-full p-2`} 
          disabled={isPrevDisabled}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button 
          onClick={handleNext} 
          className={`text-white ${isNextDisabled ? 'text-gray-500' : 'hover:text-gray-300'} border-2 border-white rounded-full p-2`} 
          disabled={isNextDisabled}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.slice(currentIndex, currentIndex + visibleItems).map((item, index) => (
          <div
            key={index}
            className="relative border-2 border-gray-600 p-4 bg-transparent rounded-xl flex flex-col items-center transform transition duration-500 hover:scale-105 shadow-md"
          >
            <div className="relative w-56 h-[250px] bg-gradient-to-b from-[#262627] to-transparent rounded-lg overflow-hidden">
              <img src={item.src} alt={item.title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <h2 className="text-white text-xl font-bold mt-4">{item.type} {item.title}</h2>
            <p className="text-gray-400">{item.date}</p>
          </div>
        ))}
      </div>
      <br/>
      <div className="flex justify-center gap-5 mt-4">
        {Array(visibleItems).fill().map((_, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 w-64 h-[4rem] bg-gradient-to-b from-[#262627] to-transparent rounded-lg overflow-hidden shadow-lg"
            
          ></div>
        ))}
      </div>

      <button className="mt-10 px-6 py-2 bg-primaryRed text-white font-normal rounded-lg shadow-lg">View More...</button>
    </div>
  );
};

export default Gallery;
