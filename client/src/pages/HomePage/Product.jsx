import { useState } from 'react';
import axios from 'axios';
import { formatMoney } from "../../utils/formatMoney";


export function Product({ product, loadCart }) {
  const [currentQuantity, setCurrentQuantity] = useState(1);

  function updateQuantity(e) {
    setCurrentQuantity(e.target.value);
  }

  const addProduct = async () => {
   const response = await axios.post("/api/cart-items", {
    productId: product.id,
    quantity: Number(currentQuantity)
   });
   await loadCart();
   return await response.data;
  };

  return (
    <div className="product-details">
      <div className="product-image-container">
        <img src={product.image} className="product-image" />
      </div>
      <div className="product-contents">
        <div className="product-name limit-text-to-2-lines">{product.name}</div>
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
          <div className="product-price">{formatMoney(product.priceCents)}</div>
          <div className="select-wrapper">
            <select value={currentQuantity} onChange={updateQuantity} className="primary-select">
              <option>1</option>
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
        <button onClick={addProduct} className="primary-button add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
