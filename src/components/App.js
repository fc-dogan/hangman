import React from 'react';
import './App.css';
import Header from './Header';
import GameControl from './GameControl';
import {Container, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <Jumbotron>
        <Header  className="highlight"/>
      </Jumbotron>
      <Container>
        <GameControl />
      </Container>
    </React.Fragment>
  );
}

export default App;


