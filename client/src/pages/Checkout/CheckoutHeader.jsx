import './CheckoutHeader.css';

export function CheckoutHeader() {
  return (
    <header class="checkout-header">
      <div class="left-section">
        <a class="index-link" href="index.html">
          <img
            src="assets/images/logos/title-logo-primary.svg"
            class="title-logo hide-on-mobile"
          />
          <img
            src="assets/images/logos/logo-primary.svg"
            class="title-logo hide-on-desktop"
          />
        </a>
      </div>
      <div class="middle-section">
        <a href="index.html">
          Checkout &#40;<span class="primary-span">67 items</span>&#41;
        </a>
      </div>
      <div class="right-section">
        <img
          src="assets/images/icons/money-check-icon.svg"
          class="money-check-icon"
        />
      </div>
    </header>
  );
}
