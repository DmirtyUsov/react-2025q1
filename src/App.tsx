import { BrowserRouter } from 'react-router';
import { AppRoutes } from './AppRoutes';
import { ErrorBoundary, Layout, ThemeProvider } from './components';
import { useTheme } from './hooks';

const App = () => {
  const { isDarkTheme } = useTheme();
  console.log(isDarkTheme);
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary>
          <Layout>
            <AppRoutes />
          </Layout>
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;
