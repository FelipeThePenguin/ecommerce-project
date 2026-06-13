import './CheckoutHeader.css';

export function CheckoutHeader() {
  return (
    <header className="checkout-header">
      <div className="left-section">
        <a className="index-link" href="index.html">
          <img
            src="assets/images/logos/title-logo-primary.svg"
            className="title-logo hide-on-mobile"
          />
          <img
            src="assets/images/logos/logo-primary.svg"
            className="title-logo hide-on-desktop"
          />
        </a>
      </div>
      <div className="middle-section">
        <a href="index.html">
          Checkout &#40;<span className="primary-span">67 items</span>&#41;
        </a>
      </div>
      <div className="right-section">
        <img
          src="assets/images/icons/money-check-icon.svg"
          className="money-check-icon"
        />
      </div>
    </header>
  );
}
