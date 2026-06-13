import './TrackingPage.css';

export function TrackingPage() {
  return (
    <main class="tracking-container">
      <div>
        <a href="orders.html" class="primary-span tracking-orders-link">
          View all orders
        </a>
      </div>
      <h2>Arriving on Wednesday, June 10</h2>
      <span>Airi Plushie - Large</span>
      <span>Quantity: 1</span>
      <img src="assets/images/products/airi-plush.jpeg" class="product-image" />
      <div class="tracking-status-container">
        <div class="tracking-status">
          <span class="tracking-span current-status">Preparing</span>
          <span class="tracking-span">Shipped</span>
          <span class="tracking-span">Delivered</span>
        </div>
        <div class="tracking-bar-container">
          <div class="tracking-bar"></div>
        </div>
      </div>
    </main>
  );
}
