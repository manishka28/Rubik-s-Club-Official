import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
// import events from '../json/events.json';

function Events() {
  const [events, setEvents] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch('./json/events.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setEvents(data))
      .catch(error => console.error('There was a problem with the fetch operation:', error));
  }, []);

  const gradientStyle = {
    background: 'linear-gradient(179.6deg, #FFFFFF 0.35%, rgba(255, 255, 255, 0.38) 122.8%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.13)',
    //backdropFilter: 'blur(16.5px)',
    borderRadius: '24px',
    
  };

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

  return (
    <div className='w-full overflow-hidden'>
      <div className='absolute inset-0 blur-21px'></div>
      <div className='relative flex flex-col items-center justify-center w-full h-full mb-10'>
        <h2 className='text-6xl font-extrabold text-center' style={gradientStyle}>
          Events
        </h2>
        <div className='flex flex-row gap-4 mt-8 justify-center'>
          <button className='bg-primaryRed text-white rounded-lg px-4 py-2 mb-2'>
            Past Events
          </button>
        </div>
        <div className='flex flex-row gap-4 mt-4 justify-center'>
          <button
            onClick={() => sliderRef.current.slickPrev()}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid white',
              cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
              fontSize: '24px',
              color: currentSlide === 0 ? 'rgba(255, 255, 255, 0.3)' : 'white',
              border: currentSlide === 0 ? 'none' : '2px solid white'

            }}
            disabled={currentSlide === 0}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: currentSlide >= events.length - settings.slidesToShow ? 'not-allowed' : 'pointer',
              fontSize: '24px',
              color: currentSlide >= events.length - settings.slidesToShow ? 'rgba(255, 255, 255, 0.3)' : 'white',
              border: currentSlide >= events.length - settings.slidesToShow ? 'none' : '2px solid white',

            }}
            disabled={currentSlide >= events.length - settings.slidesToShow}
          >
            <i className="fas fa-chevron-right"></i> 
          </button>
        </div>
      </div>
      
      <div className='relative mx-4 lg:mx-28 my-10 items-center'>
        <Slider ref={sliderRef} {...settings}>
          {events.map((event, index) => (
            <div key={index} className='px-2'>
              <div className='card shadow-xl py-10 px-5 my-10 mx-10 transform transition-transform duration-300 hover:translate-y-[-2rem] hover:shadow-2xl hover:bg-gray-800' style={cardStyle}>
                <figure className='px-4 pt-4'>
                  <img
                    src={event.image}
                    alt={event.title}
                    className='rounded-xl w-full h-60 object-cover'
                  />
                </figure>
                <div className='card-body text-white items-center px-5 my-5'>
                  <h2 className='card-title text-lg font-bold'>{event.title}</h2>
                  <p className='text-sm my-3'>{event.description}</p>
                  <div className='card-actions'>
                    <button className='bg-primaryRed text-white font-normal rounded-lg mt-5 px-8 py-2'>
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Events;
