import { Header } from "../../components/Header";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <Header />

      <main className="products-grid">
        <div className="product-details">
          <div className="product-image-container">
            <img
              src="assets/images/products/airi-plush.jpeg"
              className="product-image"
            />
          </div>
          <div className="product-contents">
            <div className="product-name limit-text-to-2-lines">
              Airi Plush - Large
            </div>
            <div>
              <div className="product-ratings">
                <img
                  src="assets/images/ratings/50.svg"
                  className="product-ratings-stars"
                />
                <span className="product-ratings-count">4567</span>
              </div>
              <div className="product-price">$49.99</div>
              <div className="select-wrapper">
                <select className="primary-select">
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
                  className="primary-select-icon"
                />
              </div>
            </div>
          </div>
          <div className="product-actions">
            <img
              src="assets/images/icons/added-message.svg"
              className="added-message"
            />
            <button className="primary-button add-to-cart-button">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product-details">
          <div className="product-image-container">
            <img
              src="assets/images/products/miku-plush.jpeg"
              className="product-image"
            />
          </div>
          <div className="product-contents">
            <div className="product-name limit-text-to-2-lines">
              Hatsune Miku Plushie - Limited Edition Japan
            </div>
            <div>
              <div className="product-ratings">
                <img
                  src="assets/images/ratings/40.svg"
                  className="product-ratings-stars"
                />
                <span className="product-ratings-count">1234</span>
              </div>
              <div className="product-price">$39.99</div>
              <div className="select-wrapper">
                <select className="primary-select">
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
                  className="primary-select-icon"
                />
              </div>
            </div>
          </div>
          <div className="product-actions">
            <img
              src="assets/images/icons/added-message.svg"
              className="added-message"
            />
            <button className="primary-button add-to-cart-button">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product-details">
          <div className="product-image-container">
            <img
              src="assets/images/products/shizuku-plush.jpeg"
              className="product-image"
            />
          </div>
          <div className="product-contents">
            <div className="product-name limit-text-to-2-lines">
              Shizuku Plushie - Small
            </div>
            <div>
              <div className="product-ratings">
                <img
                  src="assets/images/ratings/45.svg"
                  className="product-ratings-stars"
                />
                <span className="product-ratings-count">890</span>
              </div>
              <div className="product-price">$24.99</div>
              <div className="select-wrapper">
                <select className="primary-select">
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
                  className="primary-select-icon"
                />
              </div>
            </div>
          </div>
          <div className="product-actions">
            <img
              src="assets/images/icons/added-message.svg"
              className="added-message"
            />
            <button className="primary-button add-to-cart-button">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
