import React from 'react';
import RandomUsers from './components/RandomUsers';
import './App.css';

function App() {
  return (
    <>
      <RandomUsers pages={10} />
    </>
  );
}

export default App;
