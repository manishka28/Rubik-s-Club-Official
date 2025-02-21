import React, { useState } from 'react';
import './Tales.scss';
import talesData from '../../public/json/talesData.json';

const Tales = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === talesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? talesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="tales-container">
      <h1 className="mt-10 mb-10 text-center text-5xl font-extrabold bg-gradient-to-b from-slate-200 to-slate-400 bg-clip-text text-transparent">
          Tales From The Past
      </h1>
      <p className="subtitle">
        At Rubik's Club of MANIT, we're passionate about twisting, turning, and solving the colorful enigmas of Rubik's Cubes. Our team is a blend of diverse talents, each bringing a unique perspective and expertise to the table. Get to know the faces behind the cubes.
      </p>
      <div className="carousel">
        <div className="tales-content">
          <button onClick={prevSlide} className="arrow arrow-left">❮</button>
          <div className="card">
            <div className="image-placeholder">
              <img src={talesData[currentIndex].image} alt="Member's Photo" />
            </div>
            <h2 className="member-name">{talesData[currentIndex].name}</h2>
            <p className="description">{talesData[currentIndex].description}</p>
          </div>
          <button onClick={nextSlide} className="arrow arrow-right">❯</button>
        </div>
      </div>
    </div>
  );
};

export default Tales;
