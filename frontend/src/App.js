import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter , Route } from 'react-router-dom'
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

const App= () => {
  return (
    <BrowserRouter>
      <HeaderComp/>
      <main className="py-3">
          <Container>
            <Route exact path='/' component={HomeScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            {/* id is optional in the route below  so put a ?*/}
            <Route path='/cart/:id?' component={CartScreen} />  
          </Container>
      </main> 
      <FooterComp/>
    </BrowserRouter>
  );
}

export default App;



