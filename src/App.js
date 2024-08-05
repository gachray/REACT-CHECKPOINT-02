
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1675802756329-145bac875bf7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3Jhc3MlMjB0ZXh0dXJlfGVufDB8fDB8fHww)', backgroundSize: 'cover', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Navbar />
      <PlayersList />
    </div>
  );
}

export default App;