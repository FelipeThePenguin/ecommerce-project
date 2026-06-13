import { Header } from "../../components/Header";
import "./TrackingPage.css";

export function TrackingPage() {
  return (
    <>
    <Header />

    <div className="tracking-body">
      <main className="tracking-container">
        <div>
          <a href="/orders" className="primary-span tracking-orders-link">
            View all orders
          </a>
        </div>
        <h2>Arriving on Wednesday, June 10</h2>
        <span>Airi Plushie - Large</span>
        <span>Quantity: 1</span>
        <img
          src="assets/images/products/airi-plush.jpeg"
          className="tracking-product-image"
        />
        <div className="tracking-status-container">
          <div className="tracking-status">
            <span className="tracking-span current-status">Preparing</span>
            <span className="tracking-span">Shipped</span>
            <span className="tracking-span">Delivered</span>
          </div>
          <div className="tracking-bar-container">
            <div className="tracking-bar"></div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
