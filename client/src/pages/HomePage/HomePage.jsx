import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../../components/Header";
import { formatMoney } from "../../utils/formatMoney";
import "./HomePage.css";

export function HomePage({ loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("/api/products");
      await loadCart();
      setProducts(response.data);
    };
    getProducts();
  }, [loadCart]);

  return (
    <>
      <Header />

      <main className="products-grid">
        {products &&
          products.map((product) => {
            return (
              <div key={product.id} className="product-details">
                <div className="product-image-container">
                  <img src={product.image} className="product-image" />
                </div>
                <div className="product-contents">
                  <div className="product-name limit-text-to-2-lines">
                    {product.name}
                  </div>
                  <div>
                    <div className="product-ratings">
                      <img
                        src={`assets/images/ratings/${product.rating.stars * 10}.svg`}
                        className="product-ratings-stars"
                      />
                      <span className="product-ratings-count">
                        {product.rating.count}
                      </span>
                    </div>
                    <div className="product-price">
                      {formatMoney(product.priceCents)}
                    </div>
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
            );
          })}
      </main>
    </>
  );
}
