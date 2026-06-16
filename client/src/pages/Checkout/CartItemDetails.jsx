import { useState } from "react";
import axios from "axios";
import { DeliveryOptions } from "./DeliveryOptions";
import { formatMoney } from "../../utils/formatMoney";
import "./CartItemDetails.css";

export function CartItemDetails({
  cartItem,
  loadCart,
  deliveryDate,
  deliveryOptions,
}) {
  const [isEditingQuantity, setIsEditingQuantity] = useState(false);
  const [currentQuantity, setCurrentQuantity] = useState(cartItem.quantity);

  function changeUpdatingQuantity(e) {
   setCurrentQuantity(e.target.value);
  }

  const deleteCartItem = async () => {
    const response = await axios.delete(
      `/api/cart-items/${cartItem.productId}`,
    );
    await loadCart();
    return response.data;
  };

  const updateQuantity = async () => {
    if (!isEditingQuantity) {
      setIsEditingQuantity(true);
      return;
    } else {
      setIsEditingQuantity(false);

      const response = await axios.put(`/api/cart-items/${cartItem.productId}`, {
       quantity: Number(currentQuantity)
      });
      await loadCart();
      return await response.data;
    }
  };

  return (
    <div className="checkout-product-details">
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
              <span>
                Quantity:{" "}
                {isEditingQuantity ? (
                  <input
                    type="number"
                    value={currentQuantity}
                    onChange={changeUpdatingQuantity}
                    className="quantity-input"
                  />
                ) : (
                  cartItem.quantity
                )}
              </span>
              <span
                className="primary-span cart-item-span"
                onClick={updateQuantity}
              >
                {isEditingQuantity ? "Save" : "Update"}
              </span>
              <span
                className="primary-span cart-item-span"
                onClick={deleteCartItem}
              >
                Delete
              </span>
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
