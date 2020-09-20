import React from 'react';
import './App.css';
import Header from './Header';
import GameControl from './GameControl';
import {Container, Jumbotron, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Navbar className="bg-light justify-content-center">
        <Header />
      </Navbar>
      <Container>
        <GameControl />
      </Container>
    </React.Fragment>
  );
}

export default App;


