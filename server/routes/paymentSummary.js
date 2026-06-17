import { ecommerceDatabase } from "../database/connection.js";
import express from "express";
import { deliveryOptions } from "../data/deliveryOptions.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const database = await ecommerceDatabase;
  const cartCollection = await database.collection("cart");
  const productCollection = await database.collection("products");
  const response = await fetch("http://localhost:3000/api/cart-items?expand=product");
  const cartItems = await response.json();

  let totalItems = 0;
  let productsCostCents = 0;
  let shippingCostCents = 0;

  cartItems.forEach((cartItem) => {
   totalItems += cartItem.quantity;
   productsCostCents += cartItem.quantity * cartItem.product.priceCents;
   
   const deliveryOption = deliveryOptions.find((option) => {
    return option.id === cartItem.deliveryOptionId
   });

   shippingCostCents += deliveryOption.priceCents
  });

  const totalBeforeTaxCents = productsCostCents + shippingCostCents;
  const taxCents = Math.round(totalBeforeTaxCents / 10);
  const totalCostCents = totalBeforeTaxCents + taxCents;

  res.send({
    totalItems,
    productsCostCents,
    shippingCostCents,
    totalBeforeTaxCents,
    taxCents,
    totalCostCents,
  });
});

export default router;
