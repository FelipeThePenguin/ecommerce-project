import {ecommerceDatabase} from '../database/connection.js';
import express from 'express';

const router = express.Router();

router.get("/", async (req, res) => {
 const database = await ecommerceDatabase;
 const collection = await database.collection('products');

 const search = req.query.search;
 const query = search ?  { name: {
  $regex: search,
  $options: "i"
 }} : {};

 const result = await collection.find(query, {_id: 0}).toArray();
 res.send(result);
});

export default router;