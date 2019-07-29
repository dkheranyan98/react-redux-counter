import React from 'react';
import { Container } from 'reactstrap'
import Header from './components/Header';
import Content from './components/Content';
import './App.css';




function App(props) {
  return (
    <Container fluid>
      <Header />
      <Content />
    </Container>
  );
}

export default App;