import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "../contexts/ThemeContext";

export const App = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark') 
                                       ? JSON.parse(localStorage.getItem('isDark')) 
                                       : false);

  useEffect(() => {
    if(isDark) {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [isDark])

  return (
    <ThemeContextProvider value={{ isDark, setIsDark }}>
      <Header />
      <Outlet />
    </ThemeContextProvider>
  );
};

export default App;
