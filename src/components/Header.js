import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userAction';

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSign = useSelector((state) => state.user);
  const { userInfo } = userSign;

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <header className='row'>
      <div>
        <Link className='brand' to='/'>
          Amazona
        </Link>
      </div>
      <div>
        <Link to='/cart'>
          Cart
          {cartItems.length > 0 && (
            <span className='badge'>{cartItems.length}</span>
          )}
        </Link>
        {userInfo ? (
          <div className='dropdown'>
            <Link to='#'>
              {userInfo.name} <i className='fa fa-caret-down'></i>
            </Link>
            <ul className='dropdown-content'>
              <Link to='#signout' onClick={signoutHandler}>
                Sign Out
              </Link>
            </ul>
          </div>
        ) : (
          <Link to='/signin'>Sign In</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
