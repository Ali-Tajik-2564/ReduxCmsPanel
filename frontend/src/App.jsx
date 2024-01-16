import { useState } from 'react';
import React from 'react';

import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import Sidebar from './components/Sidebar/Sidebar';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const router = useRoutes(routes);
  return (
    <div className="w-full flex">
      <div className="w-62 h-screen">
        <Sidebar />
      </div>
      <div className="w-297 bg-primaryBody">
        <MainHeader />
        {router}
      </div>
    </div>
  );
}

export default App;
