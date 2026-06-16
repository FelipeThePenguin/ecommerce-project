import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { CheckoutHeader } from "./CheckoutHeader";
import { CartItemDetails } from "./CartItemDetails";
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
               <CartItemDetails cartItem={cartItem} loadCart={loadCart} deliveryDate={deliveryDate} deliveryOptions={deliveryOptions} />
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
