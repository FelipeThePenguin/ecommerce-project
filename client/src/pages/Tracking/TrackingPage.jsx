import axios from "axios";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Header } from "../../components/Header";
import "./TrackingPage.css";

export function TrackingPage({ cart, loadCart }) {
  const [trackingDetails, setTrackingDetails] = useState({});
  const params = useParams();
  const { orderId, productId } = params;

  useEffect(() => {
    const loadHeader = async () => {
      await loadCart();
    };
    loadHeader();
  }, [loadCart]);

  useEffect(() => {
    const trackProduct = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`,
      );
      setTrackingDetails(response.data);
    };
    trackProduct();
  }, [orderId, productId]);

  const productDetails =
    trackingDetails.products &&
    trackingDetails.products.find((productDetails) => {
      return productDetails.productId === productId;
    });

  let progress;
  if (productDetails) {
    const today = dayjs();
    const remainingTime = dayjs(productDetails.estimatedDeliveryDate).diff(
      today,
      "h",
    );
    const orderPlaced = dayjs(trackingDetails.orderDate);
    const totalTime = dayjs(productDetails.estimatedDeliveryDate).diff(
      orderPlaced,
      "h",
    );
    progress = (remainingTime / totalTime) * 100;
  }

  // Wait for productsDetails to load before use
  return (
    <>
      <Header cart={cart} />

      <div className="tracking-body">
        <main className="tracking-container">
          {productDetails && (
            <>
              <div>
                <a href="/orders" className="primary-span tracking-orders-link">
                  View all orders
                </a>
              </div>
              <h2>
                Arriving on{" "}
                {dayjs(productDetails.estimatedDeliveryDate).format(
                  "dddd, MMMM D",
                )}
              </h2>
              <span>{productDetails.product.name}</span>
              <span>Quantity: {productDetails.quantity}</span>
              <img
                src={productDetails.product.image}
                className="tracking-product-image"
              />
              <div className="tracking-status-container">
                <div className="tracking-status">
                  <span className={`tracking-span ${0 <= progress && progress < 50 ? "current-status": ""}`}>
                    Preparing
                  </span>
                  <span className={`tracking-span ${50 <= progress && progress < 100 ? "current-status": ""}`}>Shipped</span>
                  <span className={`tracking-span ${progress >= 100 ? "current-status": ""}`}>Delivered</span>
                </div>
                <div className="tracking-bar-container">
                  <div
                    style={{ width: `${progress}%` }}
                    className="tracking-bar"
                  ></div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}
