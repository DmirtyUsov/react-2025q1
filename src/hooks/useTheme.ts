import { createContext, useContext } from 'react';

type ThemeContextParams = { isDarkTheme: boolean; toggleTheme(): void };
export const ThemeContext = createContext<ThemeContextParams>({
  isDarkTheme: true,
  toggleTheme: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};
