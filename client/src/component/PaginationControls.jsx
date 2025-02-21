// src/component/PaginationControls.jsx
import React from 'react';

const PaginationControls = ({ handlePrev, handleNext, startIndex, cardsDataLength }) => (
  <div className="mb-5">
    <button
      onClick={handlePrev}
      className={`mr-2 px-4 py-2 text-white rounded ${
        startIndex === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-500"
      }`}
      disabled={startIndex === 0}
    >
      Previous
    </button>
    <button
      onClick={handleNext}
      className={`px-4 py-2 text-white rounded ${
        startIndex + 8 >= cardsDataLength
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-gray-500"
      }`}
      disabled={startIndex + 8 >= cardsDataLength}
    >
      Next
    </button>
  </div>
);

export default PaginationControls;
