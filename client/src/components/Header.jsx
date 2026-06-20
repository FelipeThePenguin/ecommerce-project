import { useState } from "react";
import { useNavigate } from "react-router";
import "./Header.css";

export function Header({ cart }) {
  const [isMenuBarActive, setIsMenuBarActive] = useState(false);
  const [isChangingFilters, setIsChangingFilters] = useState(false);
  const [ratingsMin, setRatingsMin] = useState(0);
  const [ratingsMax, setRatingsMax] = useState(999999);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(999999);
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
    setStars(e.target.value);
  }

  function changeRatingsMin(e) {
    setRatingsMin(e.target.value);
  }

  function changeRatingsMax(e) {
    setRatingsMax(e.target.value);
  }

  function changePriceMin(e) {
    setPriceMin(e.target.value);
  }

  function changePriceMax(e) {
    setPriceMax(e.target.value);
  }

  function toggleMenuBar() {
    setIsMenuBarActive(isMenuBarActive ? false : true);
  }

  function toggleFilter() {
    setIsChangingFilters(isChangingFilters ? false : true);
  }

  function searchProduct() {
    navigate(
      `/?search=${search}&stars=${stars / 2}&ratingsMin=${ratingsMin}&ratingsMax=${ratingsMax}&priceMin=${priceMin}&priceMax=${priceMax}`,
    );
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
          <a className="filter-button hide-on-mobile" onClick={toggleFilter}>
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
          <a onClick={toggleMenuBar} className="hide-on-desktop">
            <img
              src="/assets/images/icons/header/hamburger-icon.svg"
              className="hamburger-icon"
            />
          </a>
        </div>
      </header>

      <div
        className={`menu-bar hide-on-desktop ${isMenuBarActive ? "is-menu-bar-active" : ""}`}
      >
        <div className="menu-bar-option menu-bar-filters">
          <p onClick={toggleFilter} className="menu-bar-title menu-bar-filters-title">Filters</p>
          <div
            className={`menu-bar-filter-container ${isChangingFilters ? "is-changing-filter-on-menu" : ""}`}
          >
            <div className="menu-bar-filter">
              <p className="menu-bar-filter-title">Stars Rating:</p>
              <div className="stars-rating-input-container">
                <img
                  src={`/assets/images/ratings/${stars * 5}.svg`}
                  className="menu-bar-stars-rating-input-stars"
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
            <div className="menu-bar-filter">
              <p className="menu-bar-filter-title">Reviews count:</p>
              <div className="menu-bar-input-container">
                <input
                  className="filter-option-input"
                  placeholder="Min"
                  value={ratingsMin}
                  onChange={changeRatingsMin}
                />
                <span>-</span>
                <input
                  className="filter-option-input"
                  placeholder="Max"
                  value={ratingsMax}
                  onChange={changeRatingsMax}
                />
              </div>
            </div>
            <div className="menu-bar-filter">
              <p className="menu-bar-filter-title">Price Range:</p>
              <div className="menu-bar-input-container">
                <div className="filter-option-input-container">
                  <input
                    className="filter-option-input"
                    placeholder="Min"
                    value={priceMin}
                    onChange={changePriceMin}
                  />
                  <span>-</span>
                  <input
                    className="filter-option-input"
                    placeholder="Max"
                    value={priceMax}
                    onChange={changePriceMax}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => {navigate("/orders")}} className="menu-bar-option">
          <span className="menu-bar-title">
            Orders
          </span>
        </div>
        <div onClick={() => {navigate("/checkout")}}className="menu-bar-option">
          <span className="menu-bar-title">
            Cart &#40;{totalItems}&#41;
          </span>
        </div>
      </div>

      <div
        className={`filter-options hide-on-mobile ${isChangingFilters ? "is-changing-filter" : ""}`}
      >
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
            <input
              className="filter-option-input"
              placeholder="Min"
              value={ratingsMin}
              onChange={changeRatingsMin}
            />
            <span>-</span>
            <input
              className="filter-option-input"
              placeholder="Max"
              value={ratingsMax}
              onChange={changeRatingsMax}
            />
          </div>
        </div>
        <div className="filter-option">
          <div className="filter-option-title">Price range:</div>
          <div className="filter-option-input-container">
            <input
              className="filter-option-input"
              placeholder="Min"
              value={priceMin}
              onChange={changePriceMin}
            />
            <span>-</span>
            <input
              className="filter-option-input"
              placeholder="Max"
              value={priceMax}
              onChange={changePriceMax}
            />
          </div>
        </div>
      </div>
    </>
  );
}
