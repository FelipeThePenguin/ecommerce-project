import axios from "axios";
import dayjs from "dayjs";
import { Link } from "react-router";

export function OrdersProductDetails({ productDetails, orderId, loadCart }) {
  const addOrdersProduct = async () => {
    const response = await axios.post("/api/cart-items", {
      productId: productDetails.productId,
      quantity: 1,
    });
    await loadCart();
    return response.data;
  };

  return (
    <>
      <div className="image-container">
        <img
          src={productDetails.product.image}
          className="order-product-image"
        />
      </div>
      <div className="product-content">
        <p className="font-bold">{productDetails.product.name}</p>
        <p>
          Arriving on:{" "}
          {dayjs(productDetails.estimatedDeliveryDate).format("MMMM, D")}
        </p>
        <p>Quantity: {productDetails.quantity}</p>
        <button
          onClick={addOrdersProduct}
          className="primary-button orders-add-to-cart-button"
        >
          <img
            src="assets/images/icons/cart-icon.svg"
            className="add-to-cart-icon"
          />
          Add to Cart
        </button>
      </div>
      <div className="track-button-container">
        <Link to={`/tracking/${orderId}/${productDetails.productId}`}>
          <button className="secondary-button track-button">
            Track Package
          </button>
        </Link>
      </div>
    </>
  );
}
