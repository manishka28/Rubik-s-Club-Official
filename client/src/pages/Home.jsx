import React from 'react';
import { NavLink } from "react-router-dom";
import rub from '../../../Design/RUBIKS_WHITE_REMOVEBG.png';
import './Home.scss'; // Import the SCSS file
import Header from '../component/Header';
import Footer from '../component/Footer';
import About from './About';
import Gallery from '../component/Gallery';
import Events from '../component/Events';
// import Teams from './Teams';
import TeamIntroduction from '../component/TeamIntroduction';
import TeamSlider from '../component/TeamSlider';
import TeamMembers from '../component/TeamMembers';


function Home() {
  return (
    <div className="home">
      {/* <Header /> */}
      {/**Welcome Text */}
      <section className="homepage text-white overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/**Rubiks Information */}
            <div className="info w-full md:w-1/2 mb-12 md:mb-0">
              <h1 className="title font-extrabold text-6xl bg-gradient-to-b from-slate-200 to-slate-400 bg-clip-text text-transparent">
                Welcome To Rubik's CLUB
              </h1>
              <div className="description w-auto py-5">
                <p className="text text-2xl font-thin w-93 p-4">
                Welcome to Rubik Club, the cultural hub of the MCA branch at Maulana Azad National Institute of Technology (MANIT). Our club aims to promote and nurture various talents among the students, providing them with a platform to showcase their skills and creativity.
                </p>
              </div>
              <div className="register-button bg-red-600 w-40 h-16 flex justify-center items-center my-8 rounded-md backdrop-blur-lg mx-4">
                <NavLink
                  className="font-semibold text-lg uppercase font-normal"
                  to="/register"
                >
                  View More
                </NavLink>
              </div>
            </div>

            {/**Image information */}
            <div className="image-info w-full md:w-1/2 md:pl-12">
              <div className="image-container bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                <img src={rub} alt="Event" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Events></Events>
      <Gallery></Gallery>
      <TeamIntroduction></TeamIntroduction>
      <TeamMembers></TeamMembers>
      {/* <TeamSlider></TeamSlider> */}
      <About/>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;



// import React from 'react';
// import './Home.scss';
// import rub from '../../../Design/RUBIKS_WHITE_REMOVEBG.png';
// import Header from '../component/Header';
// import Footer from '../component/Footer';
// import About from '../component/About';

// const Home = () => {
//   return (
//     <>
//       <div className="Home">
//           <Header></Header>
//           <div className="homepage">
//           <div className="content">
//               <h1>Welcome To RUBIK'S CLUB</h1>
//               <p>Welcome to Rubik Club, the cultural hub of the MCA branch at Maulana Azad National Institute of Technology (MANIT). Our club aims to promote and nurture various talents among the students, providing them with a platform to showcase their skills and creativity.</p>
//               <button className="view-more">View More</button>
//           </div>
//           <div className="image-placeholder">
//               <img src={rub} alt="Event" />
//           </div>
//           </div>
//           <About></About>
//           <Footer></Footer>
//       </div>
//     </>
//   );
// }

// export default Home;
