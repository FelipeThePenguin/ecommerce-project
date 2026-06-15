import { deliveryOptions } from '../data/deliveryOptions.js';
import express from 'express';

const router = express.Router();

router.get("/", async (req, res) => {
 res.send(deliveryOptions);
});

export default router;
