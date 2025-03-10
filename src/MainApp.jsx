import React, { useState, useEffect, Suspense } from 'react';
import Home from './components/Home';
import endpoints from './constants/endpoints';

function MainApp() {

  return (
    <div className="MainApp">
      <Home />
    </div>
  );
}

export default MainApp;
