import React from 'react'
import { Container } from 'react-bootstrap'
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import HomeScreen from './screens/HomeScreen';

const App= () => {
  return (
    <>
      <HeaderComp/>
      <main className="py-3">
          <Container>
            <HomeScreen/>
          </Container>
      </main> 
      <FooterComp/>
    </>
  );
}

export default App;
