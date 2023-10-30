import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PhonesPage from './pages/PhonesPage';
import ErrorPage from './pages/ErrorPage';
import RootElement from './pages/RootElement';

const router = createHashRouter([
  {
    path: '/',
    element: <RootElement />,
    children: [
      { path: '*', element: <ErrorPage /> },
      { path: '/', element: <HomePage /> },
      { path: '/phones', element: <PhonesPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
