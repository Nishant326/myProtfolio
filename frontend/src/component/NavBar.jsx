import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BuilderIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12m0 0l-9-5m9 5l9-5" />
  </svg>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="bg-orange-600 p-2 rounded-xl shadow-lg shadow-orange-500/20">
               <BuilderIcon />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Nishant Rawani
            </span>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle (Matches ChaiCode style) */}
            {/* <button className="p-2 text-gray-300 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3v18M12 3a9 9 0 0 1 0 18" fill="currentColor" />
              </svg>
            </button> */}

            {/* Menu Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none transition-transform duration-200 active:scale-90"
            >
              {isOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Dropdown Menu (Matches your screenshot) */}
      {isOpen && (
        <div className="absolute right-40 top-16 w-52 py-3  backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50">
          <div className="flex flex-col">
            <Link 
                to="/projects" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white  transition-colors"
            >
              <span className="text-lg opacity-70">🚀</span>
              <span className="font-medium">Projects</span>
            </Link>
            
            <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white  transition-colors"
            >
              <span className="text-lg opacity-70">📩</span>
              <span className="font-medium">Contact Me</span>
            </Link>

            {/* Added extra links to match the screenshot "Cohort, Udemy" look */}
            <div className="border-t border-white/5 mt-2 pt-2">
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-white text-sm">
                    <span>⭐</span>
                    <span>Reviews</span>
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;