import { CheckoutHeader } from './CheckoutHeader';
import './CheckoutPage.css';

export function CheckoutPage() {
  return (
    <>
      <CheckoutHeader />

      <h2 className="checkout-title">
        <span>Review your order</span>
      </h2>

      <main className="checkout-grid">
        <section className="order-summary">
          <div className="product-details">
            <div className="delivery-date">Delivery date: Tuesday, June 10</div>
            <div className="product-details-row">
              <div className="product-details-content">
                <div className="product-details-left">
                  <img
                    src="assets/images/products/airi-plush.jpeg"
                    className="product-image"
                  />
                </div>
                <div className="product-details-right">
                  <span className="product-detail">Airi Plush - Large</span>
                  <span className="product-detail">$49.99</span>
                  <div>
                    <span>Quantity: 2</span>
                    <span className="primary-span">Update</span>
                    <span className="primary-span">Delete</span>
                  </div>
                </div>
              </div>
              <div className="delivery-options">
                <h3 className="delivery-option-title">Choose a delvery option:</h3>
                <div className="delivery-option">
                  <input type="radio" className="delivery-option-selector" />
                  <div className="delivery-option-details">
                    <div className="delivery-option-date">Wednesday, June 17</div>
                    <div className="delivery-option-shipping-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div className="delivery-option">
                  <input type="radio" className="delivery-option-selector" />
                  <div className="delivery-option-details">
                    <div className="delivery-option-date">Friday, June 19</div>
                    <div className="delivery-option-shipping-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div className="delivery-option">
                  <input type="radio" className="delivery-option-selector" />
                  <div className="delivery-option-details">
                    <div className="delivery-option-date">Monday, June 22</div>
                    <div className="delivery-option-shipping-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-details">
            <div className="delivery-date">Delivery date: Friday, June 19</div>
            <div className="product-details-row">
              <div className="product-details-content">
                <div className="product-details-left">
                  <img
                    src="assets/images/products/miku-plush.jpeg"
                    className="product-image"
                  />
                </div>
                <div className="product-details-right">
                  <span className="product-detail">
                    Hatsune Miku Plush - Medium
                  </span>
                  <span className="product-detail">$29.99</span>
                  <div>
                    <span>Quantity: 1</span>
                    <span className="primary-span">Update</span>
                    <span className="primary-span">Delete</span>
                  </div>
                </div>
              </div>
              <div className="delivery-options">
                <h3 className="delivery-option-title">Choose a delvery option:</h3>
                <div className="delivery-option">
                  <input type="radio" className="delivery-option-selector" />
                  <div className="delivery-option-details">
                    <div className="delivery-option-date">Wednesday, June 17</div>
                    <div className="delivery-option-shipping-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div className="delivery-option">
                  <input type="radio" className="delivery-option-selector" />
                  <div className="delivery-option-details">
                    <div className="delivery-option-date">Friday, June 19</div>
                    <div className="delivery-option-shipping-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div className="delivery-option">
                  <input type="radio" className="delivery-option-selector" />
                  <div className="delivery-option-details">
                    <div className="delivery-option-date">Monday, June 22</div>
                    <div className="delivery-option-shipping-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="payment-summary">
          <div className="payment-summary-content">
            <h3>Payment Summary</h3>
            <div className="payment-summary-row">
              <span>Items (3):</span>
              <span>$42.75</span>
            </div>
            <div className="payment-summary-row">
              <span>Shipping and Handling:</span>
              <span>$4.99</span>
            </div>
            <div className="payment-summary-row">
              <span>Total before tax:</span>
              <span className="tax-border">$47.74</span>
            </div>
            <div className="payment-summary-row">
              <span>Estimated Tax (10%):</span>
              <span>$4.77</span>
            </div>
            <div className="payment-summary-row order-total-row">
              <span>Order total:</span>
              <span>$52.51</span>
            </div>
            <button className="primary-button order-button">
              Place your order
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
