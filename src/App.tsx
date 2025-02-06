import { Footer, Header } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header title="Task2: React Routing. Tests."></Header>

      <Home />

      <Footer />
    </div>
  );
};
export default App;
