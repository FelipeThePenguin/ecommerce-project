import './Header.css';

export function Header() {
  return (
    <header class="ecommerce-header">
      <div class="left-section">
        <a class="index-link" href="index.html">
          <img
            src="assets/images/logos/title-logo-white.svg"
            class="title-logo hide-on-mobile"
          />
          <img
            src="assets/images/logos/logo-white.svg"
            class="title-logo hide-on-desktop"
          />
        </a>
      </div>
      <div class="middle-section">
        <input class="search-input" />
        <button class="search-button">
          <img
            src="assets/images/icons/header/search-icon.svg"
            class="search-icon"
          />
        </button>
      </div>
      <div class="right-section">
        <a class="filter-button hide-on-mobile">
          <img
            src="assets/images/icons/header/filter-icon.svg"
            class="filter-icon"
          />
        </a>
        <a href="orders.html" class="hide-on-mobile">
          Orders
        </a>
        <a href="checkout.html" class="hide-on-mobile">
          <div class="cart-quantity">
            <img src="assets/images/icons/cart-icon.svg" class="cart-icon" />
            <span class="cart-quantity-number">3</span>
          </div>
          <span>Cart</span>
        </a>
        <a class="hide-on-desktop">
          <img
            src="assets/images/icons/header/hamburger-icon.svg"
            class="hamburger-icon"
          />
        </a>
      </div>
    </header>
  );
}
