import { AppRoutes } from './AppRoutes';
import { Footer, Header } from './components';
import { useTheme } from './hooks';

const App = () => {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className="min-h-screen bg-slate-50 dark:bg-black dark:text-white"
      data-theme={isDarkTheme ? 'dark' : ''}
    >
      <Header title="Task2: React Routing. Tests."></Header>
      <AppRoutes />
      <Footer />
    </div>
  );
};
export default App;
