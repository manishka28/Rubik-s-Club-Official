import { useState } from "react";
import TeamSlider from "../component/TeamSlider";
import Cards from "../component/TeamCard";
import './Teams.scss';
import Header from "../component/Header";
import Footer from "../component/Footer";
import Tales from "../component/Tales";

const Teams = () => {
  const options = [
    "All",
    "Web Development",
    "Dance & Music",
    "Design",
    "Photography",
  ];

  // Create 20 cards
  const cardsData = Array.from(
    { length: 20 },
    (_, index) => `Card ${index + 1}`
  );

  // State for selected option and card index
  const [selectedOption, setSelectedOption] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedOption(index);
    setStartIndex(0); // Reset to the first page of cards when selecting a new option
  };

  const handleNext = () => {
    if (startIndex + 8 < cardsData.length) {
      setStartIndex((prevIndex) => prevIndex + 8);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 8);
    }
  };
  const displayedCards = cardsData.slice(startIndex, startIndex + 8);

  return (
    <div className="team">
      {/* <Header></Header> */}
      <div className="text-center p-4 teams-page">
        <h1 className="mt-10 text-center text-6xl font-extrabold bg-gradient-to-b from-slate-200 to-slate-400 bg-clip-text text-transparent">
          Meet The Team
        </h1>
        <div className="w-full md:w-1/2 mb-12 md:mb-0 mx-auto">
          <div className="w-auto py-5">
            <p className="text-white text-xl font-thin">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              autem repellendus, placeat vitae natus tempora iure ad illum, soluta
              eveniet quis aliquam ipsa reprehenderit doloribus, hic atque
              voluptatum nostrum sit?
            </p>
          </div>
        </div>

        <TeamSlider
          options={options}
          onSelect={handleSelect}
          selectedOption={selectedOption}
        />
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
              startIndex + 8 >= cardsData.length
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-500"
            }`}
            disabled={startIndex + 8 >= cardsData.length}
          >
            Next
          </button>
        </div>
        <Cards cards={displayedCards} />
      </div>
      <Tales></Tales>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Teams;