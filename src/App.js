import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import { Container, Navbar } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className = "header">
        <Navbar>
          <Container>
            <LinkContainer to = "/">
                <h1>PinkBike Articles</h1>
              </LinkContainer>
            </Container>
          </Navbar>


        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
        <footer>
        <div className="footer">PinkBike Coding Challenge: Automaton Job Opportuniy </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
