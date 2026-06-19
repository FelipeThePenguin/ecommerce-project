import { useState } from "react";
import { useNavigate } from "react-router";
import "./Header.css";

export function Header({ cart }) {
  const [isChangingFilters, setIsChangingFilters] = useState(false);
  const [stars, setStars] = useState(0);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  let totalItems = 0;
  cart.forEach((cartItem) => {
    totalItems += cartItem.quantity;
  });

  function changeSearch(e) {
    setSearch(e.target.value);
  }

  function changeStars(e) {
    setStars(Number(e.target.value));
  }

  function toggleFilter() {
    console.log(isChangingFilters);
    setIsChangingFilters(isChangingFilters ? false : true);
  }

  function searchProduct() {
    navigate(`/?search=${search}`);
  }

  return (
    <>
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
          <input
            value={search}
            onChange={changeSearch}
            className="search-input"
          />
          <button onClick={searchProduct} className="search-button">
            <img
              src="/assets/images/icons/header/search-icon.svg"
              className="search-icon"
            />
          </button>
        </div>
        <div className="right-section">
          <a 
           className="filter-button hide-on-mobile"
           onClick={toggleFilter}>
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
              <img
                src="/assets/images/icons/cart-icon.svg"
                className="cart-icon"
              />
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

      <div className={`filter-options hide-on-mobile ${isChangingFilters ? "is-changing-filter": ""}`}>
        <div className="filter-option">
          <div className="filter-option-title">Stars Ratings:</div>
          <div className="stars-rating-input-container">
            <img
              src={`/assets/images/ratings/${stars * 5}.svg`}
              className="stars-rating-input-stars ratings-stars"
            />
            <input
              min={0}
              max={10}
              step={1}
              type="range"
              value={stars}
              onChange={changeStars}
              className="stars-rating-input-slider"
            />
          </div>
        </div>

        <div className="filter-option">
          <div className="filter-option-title">Reviews count:</div>
          <div className="filter-option-input-container">
            <input className="filter-option-input" placeholder="Min" />
            <span>-</span>
            <input className="filter-option-input" placeholder="Max" />
          </div>
        </div>
        <div className="filter-option">
          <div className="filter-option-title">Price range:</div>
          <div className="filter-option-input-container">
            <input className="filter-option-input" placeholder="Min" />
            <span>-</span>
            <input className="filter-option-input" placeholder="Max" />
          </div>
        </div>
      </div>
    </>
  );
}
