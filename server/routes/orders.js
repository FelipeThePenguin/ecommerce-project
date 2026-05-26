import {ecommerceDatabase} from '../database/connection.js';
import express from 'express';

const router = express.Router();

router.get("/", async (req, res) => {
 const database = await ecommerceDatabase;
 const collection = await database.collection("orders");

 const result = await collection.find({}, {_id:0}).toArray();
 res.send(result);
});

export default router;
