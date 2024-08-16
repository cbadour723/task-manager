// src/App.js
import React from 'react';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
