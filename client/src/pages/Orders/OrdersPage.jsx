import { Header } from "../../components/Header";
import './OrdersPage.css';

export function OrdersPage() {
  return (
    <>
      <Header />

      <div class="orders-message">
        <span>Your Orders</span>
      </div>

      <main class="orders-container">
        <div class="order-details">
          <div class="order-content">
            <div class="order-placed">
              <span class="font-bold">Order Placed: </span>
              <span>June 9</span>
            </div>
            <div class="order-total">
              <span class="font-bold">Total: </span>
              <span>$67.67</span>
            </div>
            <div class="order-id">
              <span class="font-bold">Order ID: </span>
              <span>6001d8a3-1e68-4c3f-9743-e150b68ddf64</span>
            </div>
          </div>
          <div class="product-details">
            <div class="image-container">
              <img
                src="assets/images/products/airi-plush.jpeg"
                class="product-image"
              />
            </div>
            <div class="product-content">
              <p class="product-name">Airi Plushie</p>
              <p>Arriving on: June 9</p>
              <p>Quantity: 1</p>
              <button class="primary-button add-to-cart-button">
                <img
                  src="assets/images/icons/cart-icon.svg"
                  class="add-to-cart-icon"
                />
                Add to Cart
              </button>
            </div>
            <div class="product-actions">
              <a href="tracking.html">
                <button class="secondary-button track-button">
                  Track Package
                </button>
              </a>
            </div>
            <div class="image-container">
              <img
                src="assets/images/products/shizuku-plush.jpeg"
                class="product-image"
              />
            </div>
            <div class="product-content">
              <p class="product-name">Shizuku Plushie</p>
              <p>Arriving on: June 12</p>
              <p>Quantity: 2</p>
              <button class="primary-button add-to-cart-button">
                <img
                  src="assets/images/icons/cart-icon.svg"
                  class="add-to-cart-icon"
                />
                Add to Cart
              </button>
            </div>
            <div class="product-actions">
              <a href="tracking.html">
                <button class="secondary-button track-button">
                  Track Package
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
