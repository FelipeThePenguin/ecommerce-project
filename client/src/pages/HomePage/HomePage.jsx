import { Header } from "../../components/Header";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <Header />

      <main class="products-grid">
        <div class="product-details">
          <div class="product-image-container">
            <img
              src="assets/images/products/airi-plush.jpeg"
              class="product-image"
            />
          </div>
          <div class="product-contents">
            <div class="product-name limit-text-to-2-lines">
              Airi Plush - Large
            </div>
            <div>
              <div class="product-ratings">
                <img
                  src="assets/images/ratings/50.svg"
                  class="product-ratings-stars"
                />
                <span class="product-ratings-count">4567</span>
              </div>
              <div class="product-price">$49.99</div>
              <div class="select-wrapper">
                <select class="primary-select">
                  <option selected>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
                <img
                  src="assets/images/icons/arrow-icon.svg"
                  class="primary-select-icon"
                />
              </div>
            </div>
          </div>
          <div class="product-actions">
            <img
              src="assets/images/icons/added-message.svg"
              class="added-message"
            />
            <button class="primary-button add-to-cart-button">
              Add to Cart
            </button>
          </div>
        </div>
        <div class="product-details">
          <div class="product-image-container">
            <img
              src="assets/images/products/miku-plush.jpeg"
              class="product-image"
            />
          </div>
          <div class="product-contents">
            <div class="product-name limit-text-to-2-lines">
              Hatsune Miku Plushie - Limited Edition Japan
            </div>
            <div>
              <div class="product-ratings">
                <img
                  src="assets/images/ratings/40.svg"
                  class="product-ratings-stars"
                />
                <span class="product-ratings-count">1234</span>
              </div>
              <div class="product-price">$39.99</div>
              <div class="select-wrapper">
                <select class="primary-select">
                  <option selected>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
                <img
                  src="assets/images/icons/arrow-icon.svg"
                  class="primary-select-icon"
                />
              </div>
            </div>
          </div>
          <div class="product-actions">
            <img
              src="assets/images/icons/added-message.svg"
              class="added-message"
            />
            <button class="primary-button add-to-cart-button">
              Add to Cart
            </button>
          </div>
        </div>
        <div class="product-details">
          <div class="product-image-container">
            <img
              src="assets/images/products/shizuku-plush.jpeg"
              class="product-image"
            />
          </div>
          <div class="product-contents">
            <div class="product-name limit-text-to-2-lines">
              Shizuku Plushie - Small
            </div>
            <div>
              <div class="product-ratings">
                <img
                  src="assets/images/ratings/45.svg"
                  class="product-ratings-stars"
                />
                <span class="product-ratings-count">890</span>
              </div>
              <div class="product-price">$24.99</div>
              <div class="select-wrapper">
                <select class="primary-select">
                  <option selected>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
                <img
                  src="assets/images/icons/arrow-icon.svg"
                  class="primary-select-icon"
                />
              </div>
            </div>
          </div>
          <div class="product-actions">
            <img
              src="assets/images/icons/added-message.svg"
              class="added-message"
            />
            <button class="primary-button add-to-cart-button">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
