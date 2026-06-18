import { useState } from 'react';
import { useNavigate } from 'react-router'
import './Header.css';

export function Header({ cart }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  let totalItems = 0;
  cart.forEach((cartItem) => {
   totalItems += cartItem.quantity
  });

  function changeSearch(e) {
   setSearch(e.target.value);
  }

  function searchProduct() {
    navigate(`/?search=${search}`);
  }

  return (
    <header className="ecommerce-header">
      <div className="left-section">
        <a className="index-link" href="/">
          <img
            src="/assets/images/logos/title-logo-white.svg"
            className="title-logo hide-on-mobile"
          />
          <img
            src="/assets/images/logos/logo-white.svg"
            className="title-logo hide-on-desktop"
          />
        </a>
      </div>
      <div className="middle-section">
        <input value={search} onChange={changeSearch} className="search-input" />
        <button onClick={searchProduct} className="search-button">
          <img
            src="/assets/images/icons/header/search-icon.svg"
            className="search-icon"
          />
        </button>
      </div>
      <div className="right-section">
        <a className="filter-button hide-on-mobile">
          <img
            src="/assets/images/icons/header/filter-icon.svg"
            className="filter-icon"
          />
        </a>
        <a href="/orders" className="hide-on-mobile">
          Orders
        </a>
        <a href="/checkout" className="hide-on-mobile">
          <div className="cart-quantity">
            <img src="/assets/images/icons/cart-icon.svg" className="cart-icon" />
            <span className="cart-quantity-number">{totalItems}</span>
          </div>
          <span>Cart</span>
        </a>
        <a className="hide-on-desktop">
          <img
            src="/assets/images/icons/header/hamburger-icon.svg"
            className="hamburger-icon"
          />
        </a>
      </div>
    </header>
  );
}
