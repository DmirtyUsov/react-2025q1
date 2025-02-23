import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useTheme } from '../hooks';

type Props = { children: ReactNode };
export const Layout = ({ children }: Props) => {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className="min-h-screen bg-slate-50 dark:bg-black dark:text-white"
      data-theme={isDarkTheme ? 'dark' : ''}
    >
      <Header title="Task3: Redux, Context"></Header>
      {children}
      <Footer />
    </div>
  );
};
