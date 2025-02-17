import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    isDark: false,
    setIsDark: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

const useTheme = () => {
    return useContext(ThemeContext);
};

export default useTheme;