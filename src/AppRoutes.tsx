import { Route, Routes } from 'react-router';
import { Home, NotFound } from './pages';
import { Details } from './components';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Details />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
