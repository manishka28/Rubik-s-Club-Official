import React, { useState, useEffect, useRef } from 'react';

const items = [
  { type: 'Video', title: 'Video 1', date: 'Date-Event', src: 'https://videos.pexels.com/video-files/1858314/1858314-sd_640_360_30fps.mp4' },
  { type: 'Video', title: 'Video 2', date: 'Date-Event', src: 'https://videos.pexels.com/video-files/1858314/1858314-sd_640_360_30fps.mp4' },
  { type: 'Video', title: 'Video 3', date: 'Date-Event', src: 'https://videos.pexels.com/video-files/1858314/1858314-sd_640_360_30fps.mp4' },
  { type: 'Video', title: 'Video 4', date: 'Date-Event', src: 'https://videos.pexels.com/video-files/1858314/1858314-sd_640_360_30fps.mp4' },
  { type: 'Video', title: 'Video 5', date: 'Date-Event', src: 'https://videos.pexels.com/video-files/1858314/1858314-sd_640_360_30fps.mp4' },
  { type: 'Video', title: 'Video 6', date: 'Date-Event', src: 'https://videos.pexels.com/video-files/1858314/1858314-sd_640_360_30fps.mp4' },
];

const Video = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallOrMediumScreen, setIsSmallOrMediumScreen] = useState(window.innerWidth < 1024);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallOrMediumScreen(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    if (isSmallOrMediumScreen) {
      if (currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      if (currentIndex < items.length - 3) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const handlePrev = () => {
    if (isSmallOrMediumScreen) {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = isSmallOrMediumScreen 
    ? currentIndex >= items.length - 1 
    : currentIndex >= items.length - 3;

  return (
    <div className="relative min-h-screen flex flex-col items-center py-10">
      <h1 className="text-5xl font-extrabold text-white mb-10">Videos</h1>
      <div className="flex justify-center items-center mb-10 space-x-4">
        <button 
          onClick={handlePrev} 
          className={`text-white ${isPrevDisabled ? 'text-gray-500 cursor-not-allowed' : 'hover:text-gray-300'}`} 
          disabled={isPrevDisabled}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <div className={`grid ${isSmallOrMediumScreen ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'} gap-16`}>
          {items.slice(currentIndex, currentIndex + (isSmallOrMediumScreen ? 1 : 3)).map((item, index) => (
            <div
              key={index}
              className={`relative border-2 border-gray-500 bg-transparent rounded-lg p-4 flex flex-col items-center transform transition duration-500 ${
                index === 1 && !isSmallOrMediumScreen ? 'z-10 scale-110 shadow-lg' : 'scale-100'
              } ${isSmallOrMediumScreen ? '' : (index === 1 ? 'blur-none' : 'blur-sm opacity-50')} hover:blur-none`}
            >
              <div className="relative w-72 h-[300px] bg-gradient-to-b from-[#262627] to-transparent rounded-lg overflow-hidden">
                <video 
                  ref={videoRef}
                  src={item.src} 
                  className="w-full h-full object-cover rounded-lg cursor-pointer" 
                  onClick={handlePlayPause} 
                  controls
                />
              </div>
              <h2 className="text-white text-xl font-bold mt-4">{item.type} {item.title}</h2>
              <p className="text-gray-400">{item.date}</p>
            </div>
          ))}
        </div>

        <button 
          onClick={handleNext} 
          className={`text-white ${isNextDisabled ? 'text-gray-500 cursor-not-allowed' : 'hover:text-gray-300'}`} 
          disabled={isNextDisabled}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Video;
