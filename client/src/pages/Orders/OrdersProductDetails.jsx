import dayjs from "dayjs";

export function OrdersProductDetails({ productDetails }) {
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
        <p>Arriving on: {dayjs(productDetails.estimatedDeliveryDate).format("MMMM, D")}</p>
        <p>Quantity: {productDetails.quantity}</p>
        <button className="primary-button orders-add-to-cart-button">
          <img
            src="assets/images/icons/cart-icon.svg"
            className="add-to-cart-icon"
          />
          Add to Cart
        </button>
      </div>
      <div className="track-button-container">
        <a href="/tracking">
          <button className="secondary-button track-button">
            Track Package
          </button>
        </a>
      </div>
    </>
  );
}
