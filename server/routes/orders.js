import { ecommerceDatabase } from "../database/connection.js";
import express from "express";
import dayjs from "dayjs";
import { deliveryOptions } from "../data/deliveryOptions.js";

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

router.get("/:orderId", async (req, res) => {
  const database = await ecommerceDatabase;
  const collection = await database.collection("orders");
  const productsCollection = await database.collection("products");
  const expandOption = req.query.expand;
  const { orderId } = req.params;

  let orders = await collection.findOne({id: orderId}, { _id: 0 });
  const products = await productsCollection.find({}, { _id: 0 }).toArray();

  if (expandOption === "products") {

   orders.products = orders.products.map((productDetails) => {
    return {
     productId: productDetails.productId,
     quantity: productDetails.quantity,
     estimatedDeliveryDate: productDetails.estimatedDeliveryDate,
     product: products.find((product) => {
      return product.id === productDetails.productId
     })
    }
   })

  }

  res.send(orders);
});

router.post("/", async (req, res) => {
 const database = await ecommerceDatabase;
 const cartCollection = await database.collection("cart");
 const ordersCollection = await database.collection("orders");
 const response = await fetch("http://localhost:3000/api/payment-summary");
 const paymentSummary = await response.json();

 const cart = await cartCollection.find({}, { _id: 0 }).toArray();

 const ordersData = {
  id: crypto.randomUUID(),
  orderDate: dayjs().toISOString(),
  totalCostCents: paymentSummary.totalCostCents,
  products: cart.map((cartItem) => {
   const option = deliveryOptions.find((deliveryOption) => {
    return deliveryOption.id === cartItem.deliveryOptionId
   });

   return {
    productId: cartItem.productId,
    quantity: cartItem.quantity,
    estimatedDeliveryDate: dayjs().add(option.deliveryDays, 'day').toISOString()
   }
  })
 };

 await ordersCollection.insertOne(ordersData);
 await cartCollection.deleteMany({});
 res.send(ordersData);
});

export default router;
