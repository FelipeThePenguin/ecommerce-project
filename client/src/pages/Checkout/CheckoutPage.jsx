import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import dayjs from "dayjs";
import { CheckoutHeader } from "./CheckoutHeader";
import { CartItemDetails } from "./CartItemDetails";
import { PaymentSummary } from "./PaymentSummary";
import "./CheckoutPage.css";

export function CheckoutPage({ cart, loadCart }) {
  const navigate = useNavigate();
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
      <CheckoutHeader cart={cart} />

      <h2 className="checkout-title">
        <span>Review your order</span>
      </h2>

      <main className="checkout-grid">
        <section className="order-summary">
          {cart &&
            cart.map((cartItem) => {
              const selectedDeliveryOption = deliveryOptions.find(
                (deliveryOption) => {
                  return cartItem.deliveryOptionId === deliveryOption.id;
                },
              );
              const deliveryDate = dayjs()
                .add(selectedDeliveryOption.deliveryDays, "days")
                .format("dddd, MMMM, D");

              return (
                <CartItemDetails
                  key={cartItem.productId}
                  cartItem={cartItem}
                  loadCart={loadCart}
                  deliveryDate={deliveryDate}
                  deliveryOptions={deliveryOptions}
                />
              );
            })}
          {cart &&
            (cart.length === 0 ? (
              <div>
                <p>Your cart is empty.</p>
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                  className="view-products-button primary-button"
                >
                  View products
                </button>
              </div>
            ) : (
              ""
            ))}
        </section>

        <PaymentSummary cart={cart} />
      </main>
    </div>
  );
}
