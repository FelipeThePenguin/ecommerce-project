import { Header } from "../../components/Header";
import './OrdersPage.css';

export function OrdersPage() {
  return (
    <>
      <Header />

      <div className="orders-message">
        <span>Your Orders</span>
      </div>

      <main className="orders-container">
        <div className="order-details">
          <div className="order-content">
            <div className="order-placed">
              <span className="font-bold">Order Placed: </span>
              <span>June 9</span>
            </div>
            <div className="order-total">
              <span className="font-bold">Total: </span>
              <span>$67.67</span>
            </div>
            <div className="order-id">
              <span className="font-bold">Order ID: </span>
              <span>6001d8a3-1e68-4c3f-9743-e150b68ddf64</span>
            </div>
          </div>
          <div className="product-details">
            <div className="image-container">
              <img
                src="assets/images/products/airi-plush.jpeg"
                className="product-image"
              />
            </div>
            <div className="product-content">
              <p className="product-name">Airi Plushie</p>
              <p>Arriving on: June 9</p>
              <p>Quantity: 1</p>
              <button className="primary-button add-to-cart-button">
                <img
                  src="assets/images/icons/cart-icon.svg"
                  className="add-to-cart-icon"
                />
                Add to Cart
              </button>
            </div>
            <div className="product-actions">
              <a href="tracking.html">
                <button className="secondary-button track-button">
                  Track Package
                </button>
              </a>
            </div>
            <div className="image-container">
              <img
                src="assets/images/products/shizuku-plush.jpeg"
                className="product-image"
              />
            </div>
            <div className="product-content">
              <p className="product-name">Shizuku Plushie</p>
              <p>Arriving on: June 12</p>
              <p>Quantity: 2</p>
              <button className="primary-button add-to-cart-button">
                <img
                  src="assets/images/icons/cart-icon.svg"
                  className="add-to-cart-icon"
                />
                Add to Cart
              </button>
            </div>
            <div className="product-actions">
              <a href="tracking.html">
                <button className="secondary-button track-button">
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
