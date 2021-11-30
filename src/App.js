import { Route } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';

import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';

function App() {
  return (
    <div className='grid-container'>
      <Header />
      <main>
        <Route path='/product/:id' component={ProductScreen}></Route>
        <Route path='/' component={HomeScreen} exact></Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
