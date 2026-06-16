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
 const existingProduct = await cartCollection.findOne({productId}, {_id:0});

 let cartItem = {
  productId,
  quantity,
  deliveryOptionId: "1"
 };

 if (existingProduct) {
  cartItem = {
    productId,
    quantity: existingProduct.quantity + quantity,
    deliveryOptionId: existingProduct.deliveryOptionId
  };

   const updatedCartItem = await cartCollection.updateOne({productId}, {
    $set: {
      productId: cartItem.productId,
      quantity: cartItem.quantity,
      deliveryOptionId: cartItem.deliveryOptionId
    }
   });
 } else {
   const addedCartItem = await cartCollection.insertOne(cartItem);
 }

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

router.delete("/:id", async (req, res) => {
  const database = await ecommerceDatabase;
  const cartCollection = await database.collection("cart");
  const productId = req.params.id;

  const deletedProduct = await cartCollection.deleteOne({ productId });

  // Send nothing with a status code of 204
  res.status(204).send();
})

export default router;
