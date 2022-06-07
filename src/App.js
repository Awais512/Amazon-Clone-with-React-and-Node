import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CartScreen from './screen/CartScreen';
import SigninScreen from './screen/SigninScreen';

import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import RegisterScreen from './screen/RegisterScreen';
import ShippingAddressScreen from './screen/ShippingAddressScreen';

function App() {
  return (
    <div className='grid-container'>
      <Header />
      <main>
        <Route path='/product/:id' component={ProductScreen}></Route>
        <Route path='/signin' component={SigninScreen}></Route>
        <Route path='/register' component={RegisterScreen}></Route>
        <Route path='/shipping' component={ShippingAddressScreen}></Route>
        <Route path='/' component={HomeScreen} exact></Route>
        <Route path='/cart/:id?' component={CartScreen} exact></Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
