import React from 'react';
import data from '../data';
import Product from '../components/Product';

const HomeScreen = () => {
  const { products } = data;
  console.log(products);
  return (
    <div>
      <div className='row center'>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
