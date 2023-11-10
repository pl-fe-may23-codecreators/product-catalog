import { Routes, Route } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';

function App() {
  return (
    <Routes>
      {/* inne ścieżki */}
      <Route path="*" element={<ErrorPage />} />{' '}
      {/* ścieżka dla strony błędu */}
    </Routes>
  );
}

export default App;
