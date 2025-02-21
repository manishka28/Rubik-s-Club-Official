import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import './index.css';
//Pages
import Home from "./pages/Home";
import Event from "./pages/Event";
import Teams from "./pages/Teams";
// import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Footer from "./component/Footer";
// import Notice from "./pages/Notice";
// import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        {/**Header */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/teams" element={<Teams />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/notice" element={<Notice />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;


// import React from 'react';
// import Header from './component/Header';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Home from './pages/Home';
// // import Gallery from './pages/Gallery';

// function App() {


//   return (
//     <>
//     <div className='bg-black'>
//       <Router>
//         {/* <Header /> */}
//         <Home/>
//       {/* <Gallery/> */}
//     </Router>
//     </div>
//     </>
//   )
// }

// export default App