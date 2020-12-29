import React from 'react'
import { Component, Container } from 'react-bootstrap'
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';

function App() {
  return (
    <>
      <HeaderComp/>
      <main className="py-3">
        <Container>
          <h1> Welcome to ProShop  </h1>
        </Container>
      </main> 
      <FooterComp/>
    </>
  );
}

export default App;
