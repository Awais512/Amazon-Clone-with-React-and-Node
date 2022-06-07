import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../actions/cartActions';

const ShippingAddressScreen = ({ history }) => {
  const userSignin = useSelector((state) => state.user);
  const { userInfo } = userSignin;
  if (!userInfo) {
    history.push('/signin');
  }

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    history.push('/payment');
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form onSubmit={submitHandler} className='form'>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor='fullName'>FullName</label>
          <input
            type='text'
            id='fullName'
            placeholder='Enter Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            id='address'
            placeholder='Enter Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='city'>City</label>
          <input
            type='text'
            id='city'
            placeholder='Enter City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='postalCode'>Postal Code</label>
          <input
            type='text'
            id='postalCode'
            placeholder='Enter Full Name'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='country'>Country</label>
          <input
            type='text'
            id='country'
            placeholder='Enter Country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div>
          <button className='primary' type='submit'>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddressScreen;
