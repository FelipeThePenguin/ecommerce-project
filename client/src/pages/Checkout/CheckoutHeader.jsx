import { Link } from "react-router";
import './CheckoutHeader.css';

export function CheckoutHeader({ cart }) {
  let totalItems = 0;
  cart.forEach((cartItem) => {
   totalItems += cartItem.quantity
  });

  return (
    <header className="checkout-header">
      <div className="left-section">
        <Link className="index-link" to="/">
          <img
            src="assets/images/logos/title-logo-primary.svg"
            className="title-logo hide-on-mobile"
          />
          <img
            src="assets/images/logos/logo-primary.svg"
            className="title-logo hide-on-desktop"
          />
        </Link>
      </div>
      <div className="middle-section">
        <Link to="/">
          Checkout &#40;<span className="primary-span">{totalItems} items</span>&#41;
        </Link>
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
