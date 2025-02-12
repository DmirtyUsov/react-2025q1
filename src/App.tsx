import { Route, Routes } from 'react-router';
import { Footer, Header } from './components';
import { Home, NotFound } from './pages';
import { useTheme } from './hooks';

const App = () => {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className="min-h-screen bg-slate-50 dark:bg-black dark:text-white"
      data-theme={isDarkTheme ? 'dark' : ''}
    >
      <Header title="Task2: React Routing. Tests."></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
