import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { OrderDetails } from "./OrderDetails";
import "./OrdersPage.css";

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadHeader = async () => {
      await loadCart();
    };
    loadHeader();
  }, [loadCart]);

  useEffect(() => {
    const getOrdersDate = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };
    getOrdersDate();
  }, []);

  return (
    <div className="orders-page">
      <Header cart={cart} />

      <div className="orders-message">
        <span>Your Orders</span>
      </div>

      <main className="orders-container">
        {orders &&
          orders.map((orderDetails) => {
            return <OrderDetails key={orderDetails.id} orderDetails={orderDetails} loadCart={loadCart} />;
          })}
      </main>
    </div>
  );
}
