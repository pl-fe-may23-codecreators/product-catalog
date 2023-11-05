// Inny plik w aplikacji

import React from 'react';
import Main from '../components/Main/Main'; // Importuj nowy komponent
import '../components/Main/Main.scss';
import '../components/Main/ResponsiveMain.scss';

const App = () => {
  return (
    <div>
      {/* Inna zawartość aplikacji */}
      <Main /> {/* Użyj komponentu strony głównej */}
    </div>
  );
};

export default App;
