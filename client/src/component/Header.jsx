// src/component/Header.jsx
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Header.scss';
import logo from '../../../Design/rubikx-logo-transparent.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust the scroll position as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="flex justify-between items-center p-2 mx-4">
        <div className="flex items-center">
      <img src={logo} alt="Logo" className="w-16 h-10 mr-2" />
        <h1 className="font-extrabold bg-gradient-to-b from-slate-200 to-slate-400 bg-clip-text text-transparent text-4xl">
          <NavLink to="/">Rubik's</NavLink>
        </h1>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <ul className="hidden md:flex gap-4 mr-10">
          <li className="text-white font-bold w-full md:w-1/2 md:pl-12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-2 pl-4 pr-4  shadow-4xl"
                  : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-white font-bold w-full md:w-1/2 md:pl-12">
            <NavLink
              to="/event"
              className={({ isActive }) =>
                isActive
                  ? "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-2 pl-4 pr-4 shadow-2xl"
                  : undefined
              }
            >
              Event
            </NavLink>
          </li>
          <li className="text-white font-bold w-full md:w-1/2 md:pl-12">
            <NavLink
              to="/teams"
              className={({ isActive }) =>
                isActive
                  ? "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-2  pl-4 pr-4 shadow-2xl"
                  : undefined
              }
            >
              Teams
            </NavLink>
          </li>
          <li className="text-white font-bold w-full md:w-1/2 md:pl-12">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-2 pl-4 pr-4 shadow-2xl"
                  : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li className="text-white font-bold w-full md:w-1/2 md:pl-12">
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-2 pl-4 pr-4 shadow-2xl"
                  : undefined
              }
            >
              Gallery
            </NavLink>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-start gap-4 p-3">
            <li className="text-white font-bold w-full">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-2 pl-4 pr-4 shadow-2xl"
                    : undefined
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="text-white font-bold w-full">
              <NavLink
                to="/event"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-2 pl-4 pr-4 shadow-2xl"
                    : undefined
                }
                onClick={() => setIsOpen(false)}
              >
                Event
              </NavLink>
            </li>
            <li className="text-white font-bold w-full">
              <NavLink
                to="/teams"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-2 pl-4 pr-4 shadow-2xl"
                    : undefined
                }
                onClick={() => setIsOpen(false)}
              >
                Teams
              </NavLink>
            </li>
            <li className="text-white font-bold w-full">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-2 pl-4 pr-4 shadow-2xl"
                    : undefined
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="text-white font-bold w-full">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-2 pl-4 pr-4 shadow-2xl"
                    : undefined
                }
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
