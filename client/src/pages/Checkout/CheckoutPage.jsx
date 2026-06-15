import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { CheckoutHeader } from "./CheckoutHeader";
import { DeliveryOptions } from "./DeliveryOptions";
import { formatMoney } from "../../utils/formatMoney";
import "./CheckoutPage.css";

export function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);

  useEffect(() => {
    const getDeliveryOptions = async () => {
      const response = await axios.get("/api/delivery-options");
      await loadCart();
      setDeliveryOptions(response.data);
    };
    getDeliveryOptions();
  }, [loadCart]);

  return (
    <div className="checkout-page">
      <CheckoutHeader />

      <h2 className="checkout-title">
        <span>Review your order</span>
      </h2>

      <main className="checkout-grid">
        <section className="order-summary">
          {cart &&
            cart.map((cartItem) => {
              const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
               return cartItem.deliveryOptionId === deliveryOption.id
              });
              const deliveryDate = dayjs().add(selectedDeliveryOption.deliveryDays, 'days').format('dddd, MMMM, D');

              return (
                <div
                  key={cartItem.productId}
                  className="checkout-product-details"
                >
                  <div className="delivery-date">
                    Delivery date: {deliveryDate}
                  </div>
                  <div className="product-details-row">
                    <div className="product-details-content">
                      <div className="product-details-left">
                        <img
                          src={cartItem.product.image}
                          className="checkout-product-image"
                        />
                      </div>
                      <div className="product-details-right">
                        <span className="product-detail">
                          {cartItem.product.name}
                        </span>
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
                    <DeliveryOptions loadCart={loadCart} cartItem={cartItem} deliveryOptions={deliveryOptions} />
                  </div>
                </div>
              );
            })}
        </section>

        <section className="payment-summary">
          <div className="payment-summary-content">
            <h3>Payment Summary</h3>
            <div className="payment-summary-row">
              <span>Items (3):</span>
              <span>$42.75</span>
            </div>
            <div className="payment-summary-row">
              <span>Shipping and Handling:</span>
              <span>$4.99</span>
            </div>
            <div className="payment-summary-row">
              <span>Total before tax:</span>
              <span className="tax-border">$47.74</span>
            </div>
            <div className="payment-summary-row">
              <span>Estimated Tax (10%):</span>
              <span>$4.77</span>
            </div>
            <div className="payment-summary-row order-total-row">
              <span>Order total:</span>
              <span>$52.51</span>
            </div>
            <button className="primary-button order-button">
              Place your order
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
