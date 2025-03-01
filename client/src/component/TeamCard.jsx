import React from "react";
import dp from '../../../Design/card-image.png';

const Cards = ({ cards }) => {
  return (
    <div className="p-12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 justify-center w-fit ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="m-2 bg-slate-400 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl"
        >
          <div className="flex items-center justify-center">
            <img src={dp} alt="alt" className="w-32 h-32 object-cover rounded-full shadow-xl" />
          </div>
          <h1 className="font-bold text-white my-4">{card}</h1>
          <p className="font-thin text-white my-4">Text</p>
          <p className=" text-white font-bold my-4">Social Links</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;