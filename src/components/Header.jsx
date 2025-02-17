import React from "react";
import { Link } from "react-router-dom";
import useTheme from "../../contexts/ThemeContext";

const Header = () => {
  const {isDark, setIsDark} = useTheme();
  
  const handleClickEvent = () => {
    setIsDark(!isDark);
    localStorage.setItem('isDark', !isDark);
  }

  return (
    <main>
        <div className="font-bold text-2xl px-11 py-4 shadow-md flex justify-between items-center dark:bg-gray-900 dark:border-b dark:border-white transition-all duration-300">
          <Link to='/'>
            <div><i className="ri-map-2-fill" style={{fontSize: '1.5rem'}}></i> Flagged!</div>
          </Link>
          <button 
          className="bg-gray-800 dark:bg-white dark:text-black text-white text-sm h-8 w-8 rounded-lg hover:cursor-pointer"
          onClick={handleClickEvent}>
            {
              isDark ? <i className="ri-sun-line"></i> : <i className="ri-moon-line"></i>
            }
          </button>
        </div>
    </main>
  );
};

export default Header;
