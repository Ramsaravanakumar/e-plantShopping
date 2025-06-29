import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartCount = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="header">
      <div className="header-content">
        <h1>Green Haven</h1>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link cart-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartCount}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
