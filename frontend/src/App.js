import { Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';


function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>} exact/> //just render the HomeScreen component when the path is '/'
            <Route path='/product/:id' element={<ProductScreen/>}/> //just render the HomeScreen component when the path is '/'

          </Routes>       
        </Container>
      </main>
      <Footer/>
        
    </Router>
    
  );
}

export default App;
