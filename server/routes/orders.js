import { ecommerceDatabase } from "../database/connection.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const database = await ecommerceDatabase;
  const collection = await database.collection("orders");
  const productsCollection = await database.collection("products");
  const expandOption = req.query.expand;

  let orders = await collection.find({}, { _id: 0 }).toArray();
  const products = await productsCollection.find({}, { _id: 0 }).toArray();

  if (expandOption === "products") {
    orders = orders.map((orderDetails) => {
      return {
        id: orderDetails.id,
        orderDate: orderDetails.orderDate,
        totalCostCents: orderDetails.totalCostCents,
        products: orderDetails.products.map((productDetails) => {
          const product = products.find((details) => {
           return details.id === productDetails.productId
          })
          console.log(product);

          return {
            productId: productDetails.productId,
            quantity: productDetails.quantity,
            estimatedDeliveryDate: productDetails.estimatedDeliveryDate,
            product,
          };
        }),
      };
    });
  }

  res.send(orders);
});

export default router;
