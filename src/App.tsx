import { BrowserRouter } from 'react-router';
import { AppRoutes } from './AppRoutes';
import { ErrorBoundary, Layout, ThemeProvider } from './components';
import { useTheme } from './hooks';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  const { isDarkTheme } = useTheme();
  console.log(isDarkTheme);
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary>
          <Provider store={store}>
            <Layout>
              <AppRoutes />
            </Layout>
          </Provider>
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;
