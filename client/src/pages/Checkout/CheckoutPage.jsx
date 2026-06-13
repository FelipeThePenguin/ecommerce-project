import { CheckoutHeader } from './CheckoutHeader';
import './CheckoutPage.css';

export function CheckoutPage() {
  return (
    <>
      <CheckoutHeader />

      <h2 class="checkout-title">
        <span>Review your order</span>
      </h2>

      <main class="checkout-grid">
        <section class="order-summary">
          <div class="product-details">
            <div class="delivery-date">Delivery date: Tuesday, June 10</div>
            <div class="product-details-row">
              <div class="product-details-content">
                <div class="product-details-left">
                  <img
                    src="assets/images/products/airi-plush.jpeg"
                    class="product-image"
                  />
                </div>
                <div class="product-details-right">
                  <span class="product-detail">Airi Plush - Large</span>
                  <span class="product-detail">$49.99</span>
                  <div>
                    <span>Quantity: 2</span>
                    <span class="primary-span">Update</span>
                    <span class="primary-span">Delete</span>
                  </div>
                </div>
              </div>
              <div class="delivery-options">
                <h3 class="delivery-option-title">Choose a delvery option:</h3>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-selector" />
                  <div class="delivery-option-details">
                    <div class="delivery-option-date">Wednesday, June 17</div>
                    <div class="delivery-option-shipping-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-selector" />
                  <div class="delivery-option-details">
                    <div class="delivery-option-date">Friday, June 19</div>
                    <div class="delivery-option-shipping-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-selector" />
                  <div class="delivery-option-details">
                    <div class="delivery-option-date">Monday, June 22</div>
                    <div class="delivery-option-shipping-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="product-details">
            <div class="delivery-date">Delivery date: Friday, June 19</div>
            <div class="product-details-row">
              <div class="product-details-content">
                <div class="product-details-left">
                  <img
                    src="assets/images/products/miku-plush.jpeg"
                    class="product-image"
                  />
                </div>
                <div class="product-details-right">
                  <span class="product-detail">
                    Hatsune Miku Plush - Medium
                  </span>
                  <span class="product-detail">$29.99</span>
                  <div>
                    <span>Quantity: 1</span>
                    <span class="primary-span">Update</span>
                    <span class="primary-span">Delete</span>
                  </div>
                </div>
              </div>
              <div class="delivery-options">
                <h3 class="delivery-option-title">Choose a delvery option:</h3>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-selector" />
                  <div class="delivery-option-details">
                    <div class="delivery-option-date">Wednesday, June 17</div>
                    <div class="delivery-option-shipping-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-selector" />
                  <div class="delivery-option-details">
                    <div class="delivery-option-date">Friday, June 19</div>
                    <div class="delivery-option-shipping-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-selector" />
                  <div class="delivery-option-details">
                    <div class="delivery-option-date">Monday, June 22</div>
                    <div class="delivery-option-shipping-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="payment-summary">
          <div class="payment-summary-content">
            <h3>Payment Summary</h3>
            <div class="payment-summary-row">
              <span>Items (3):</span>
              <span>$42.75</span>
            </div>
            <div class="payment-summary-row">
              <span>Shipping and Handling:</span>
              <span>$4.99</span>
            </div>
            <div class="payment-summary-row">
              <span>Total before tax:</span>
              <span class="tax-border">$47.74</span>
            </div>
            <div class="payment-summary-row">
              <span>Estimated Tax (10%):</span>
              <span>$4.77</span>
            </div>
            <div class="payment-summary-row order-total-row">
              <span>Order total:</span>
              <span>$52.51</span>
            </div>
            <button class="primary-button order-button">
              Place your order
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
