import './CheckoutHeader.css';

export function CheckoutHeader({ cart }) {
  let totalItems = 0;
  cart.forEach((cartItem) => {
   totalItems += cartItem.quantity
  });

  return (
    <header className="checkout-header">
      <div className="left-section">
        <a className="index-link" href="/">
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
        <a href="/">
          Checkout &#40;<span className="primary-span">{totalItems} items</span>&#41;
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
