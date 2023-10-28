import './App.css';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PhonesPage from './pages/PhonesPage';
import ErrorPage from './pages/ErrorPage';

const router = createHashRouter([
  {path: '/', element: <HomePage />, errorElement: <ErrorPage />},
  {path: '/phones', element: <PhonesPage />}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;