import React from 'react';
import './App.css';
import MainApp from './MainApp';

function App() {
  window.matchMedia = null;

  return (
            <MainApp />
  );
}

export default App;


// npm run deploy - to deploy the app
// npm run build -  to build the app
