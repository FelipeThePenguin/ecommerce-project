import {ecommerceDatabase} from '../database/connection.js';
import express from 'express';

const router = express.Router();

router.get("/", async (req, res) => {
 const database = await ecommerceDatabase;
 const collection = await database.collection('products');
 const result = await collection.find({}, {_id: 0}).toArray();
 res.send(result);
});

router.get("/:id", async (req, res) => {
 const database = await ecommerceDatabase;
 const collection = await database.collection('products');
 const query = { name: {
  $regex: req.params.id,
  $options: "i"
 } };
 const result = await collection.find(query, {_id: 0}).toArray();

 res.send(result);
});

export default router;