import { ecommerceDatabase } from "../database/connection.js";
import express from "express";

const router = express.Router();
router.get("/", async (req, res) => {
  const database = await ecommerceDatabase;
  const cartCollection = await database.collection("cart");
  const productCollection = await database.collection("products");
  const expandOption = req.query.expand;

  const products = await productCollection.find({}, { _id: 0 }).toArray();
  let cart = await cartCollection.find({}, { _id: 0 }).toArray();

  if (expandOption === "product") {
    cart = cart.map((cartItems) => {
      const cartItemDetails = products.find((product) => {
        return cartItems.productId === product.id;
      });
      // Find product details

      return {
        ...cartItems,
        product: cartItemDetails,
      };
    });
  }
  res.send(cart);
});

router.post("/", async (req, res) => {
 const database = await ecommerceDatabase;
 const cartCollection = await database.collection("cart");
 const { productId, quantity } = req.body;

 const cartItem = {
  productId,
  quantity,
  deliveryOptionId: "1"
 };

 const addedCartItem = await cartCollection.insertOne(cartItem);
 res.send(cartItem);
});

router.put("/:id", async (req, res) => {
  const database = await ecommerceDatabase;
  const cartCollection = await database.collection("cart");
  const productId = req.params.id;
  const { quantity, deliveryOptionId } = req.body;

  const product = await cartCollection.findOne(
    { productId: productId },
    { _id: 0 },
  );
  const newProduct = {
    ...product,
    quantity: quantity ?? product.quantity,
    deliveryOptionId: deliveryOptionId ?? product.deliveryOptionId,
  };
  const updateCartItem = await cartCollection.updateOne(
    { productId: productId },
    {
      $set: { ...newProduct },
    },
  );
  // Changes fields with $set instead of replacing the document
  res.send(newProduct);
});

export default router;
