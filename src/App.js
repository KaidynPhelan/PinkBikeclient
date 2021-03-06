//App.js Called from Index Main DOM page

import './App.css';
import HomeScreen from './pages/HomeScreen';
import React from 'react';

function App() {
  return (
    <div className="d-flex flex-column site-container">

      {/* Header */}
      <header className="header">
        PinkBike Articles
      </header>

      {/* Main Content */}
      <main>
        <HomeScreen></HomeScreen>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer">PinkBike Coding Challenge: Automaton Job Opportunity</div>
      </footer>

    </div>
  );
}

export default App;
