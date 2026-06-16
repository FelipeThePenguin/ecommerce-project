import axios from "axios";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/formatMoney";
import './DeliveryOptions.css';

export function DeliveryOptions({ loadCart, cartItem, deliveryOptions }) {
  const changeDeliveryOption = (productId, deliveryOptionId) => {
    return async () => {
      const response = await axios.put(`/api/cart-items/${productId}`, {
        deliveryOptionId,
      });
      await loadCart();
      return await response.data;
    };
  };

  return (
    <div className="delivery-options">
      <h3 className="delivery-option-title">Choose a delvery option:</h3>
      {deliveryOptions.map((deliveryOption) => {
        const dateString = dayjs()
          .add(deliveryOption.deliveryDays, "days")
          .format("dddd, MMMM D");
        const priceString = deliveryOption.priceCents
          ? `${formatMoney(deliveryOption.priceCents)} - Shipping`
          : "FREE Shipping";

        return (
          <div
            onClick={changeDeliveryOption(cartItem.productId, deliveryOption.id)}
            key={deliveryOption.id}
            className="delivery-option"
          >
            <input
              type="radio"
              checked={deliveryOption.id === cartItem.deliveryOptionId}
              onChange={() => {}}
              name={cartItem.productId}
              className="delivery-option-selector"
            />
            <div className="delivery-option-details">
              <div className="delivery-option-date">{dateString}</div>
              <div className="delivery-option-shipping-price">
                {priceString}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
