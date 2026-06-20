import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { formatMoney } from "../../utils/formatMoney";
import "./PaymentSummary.css";

export function PaymentSummary({ cart }) {
  const [paymentSummary, setPaymentSummary] = useState({});
  const navigate = useNavigate();

  const createOrder = async () => {
    if (cart.length === 0) {
      return;
    }

    const response = await axios.post("/api/orders");
    navigate("/orders");
    return response.data;
  };

  useEffect(() => {
    const getPaymentSummary = async () => {
      const response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };
    getPaymentSummary();
  }, [cart]);

  return (
    <section className="payment-summary">
      <div className="payment-summary-content">
        <h3>Payment Summary</h3>
        <div className="payment-summary-row">
          <span>Items &#40;{paymentSummary.totalItems}&#41;:</span>
          <span>{formatMoney(paymentSummary?.productsCostCents)}</span>
        </div>
        <div className="payment-summary-row">
          <span>Shipping and Handling:</span>
          <span>{formatMoney(paymentSummary?.shippingCostCents)}</span>
        </div>
        <div className="payment-summary-row">
          <span>Total before tax:</span>
          <span className="tax-border">
            {formatMoney(paymentSummary?.totalBeforeTaxCents)}
          </span>
        </div>
        <div className="payment-summary-row">
          <span>Estimated Tax (10%):</span>
          <span>{formatMoney(paymentSummary?.taxCents)}</span>
        </div>
        <div className="payment-summary-row order-total-row">
          <span>Order total:</span>
          <span>{formatMoney(paymentSummary?.totalCostCents)}</span>
        </div>
        <button
          onClick={createOrder}
          className={`primary-button order-button ${cart.length === 0 ? "cart-empty-button" : ""}`}
        >
          Place your order
        </button>
      </div>
    </section>
  );
}
