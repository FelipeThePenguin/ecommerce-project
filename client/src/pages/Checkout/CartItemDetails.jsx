import { DeliveryOptions } from "./DeliveryOptions";
import { formatMoney } from "../../utils/formatMoney";

export function CartItemDetails({ cartItem, loadCart, deliveryDate, deliveryOptions }) {
  return (
    <div key={cartItem.productId} className="checkout-product-details">
      <div className="delivery-date">Delivery date: {deliveryDate}</div>
      <div className="product-details-row">
        <div className="product-details-content">
          <div className="product-details-left">
            <img
              src={cartItem.product.image}
              className="checkout-product-image"
            />
          </div>
          <div className="product-details-right">
            <span className="product-detail">{cartItem.product.name}</span>
            <span className="product-detail">
              {formatMoney(cartItem.product.priceCents)}
            </span>
            <div>
              <span>Quantity: {cartItem.quantity}</span>
              <span className="primary-span">Update</span>
              <span className="primary-span">Delete</span>
            </div>
          </div>
        </div>
        <DeliveryOptions
          loadCart={loadCart}
          cartItem={cartItem}
          deliveryOptions={deliveryOptions}
        />
      </div>
    </div>
  );
}
