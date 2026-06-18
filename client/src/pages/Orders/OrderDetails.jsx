import dayjs from "dayjs";
import { OrdersProductDetails } from "./OrdersProductDetails";
import { formatMoney } from "../../utils/formatMoney";
import "./OrderDetails.css";

export function OrderDetails({ orderDetails }) {
  return (
    <div className="order-details">
      <div className="order-content">
        <div className="order-placed">
          <span className="font-bold">Order Placed: </span>
          <span>{dayjs(orderDetails.orderDate).format("MMMM D")}</span>
        </div>
        <div className="order-total">
          <span className="font-bold">Total: </span>
          <span>{formatMoney(orderDetails.totalCostCents)}</span>
        </div>
        <div className="order-id">
          <span className="font-bold">Order ID: </span>
          <span>{orderDetails.id}</span>
        </div>
      </div>
      <div className="order-product-details">
        {orderDetails.products &&
          orderDetails.products.map((productDetails) => {
            return (
              <OrdersProductDetails
                key={productDetails.productId}
                productDetails={productDetails}
                orderId={orderDetails.id}
              />
            );
          })}
      </div>
    </div>
  );
}
