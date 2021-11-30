import Product from './components/Product';
import data from './data';

function App() {
  const { products } = data;
  console.log(products);
  return (
    <div className='grid-container'>
      <header className='row'>
        <div>
          <a className='brand' href='index.html'>
            Amazona
          </a>
        </div>
        <div>
          <a href='cart.html'>Cart</a>
          <a href='signin.html'>Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className='row center'>
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <footer className='row center'>All right reserved</footer>
    </div>
  );
}

export default App;
