import { ReactNode, useState } from 'react';
import { ThemeContext } from '../hooks';

const getInitTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

type Props = { children: ReactNode };
export const ThemeProvider = ({ children }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getInitTheme);

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
