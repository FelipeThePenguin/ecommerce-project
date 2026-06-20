import { ecommerceDatabase } from "../database/connection.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const database = await ecommerceDatabase;
  const collection = await database.collection("products");
  const { search, stars, ratingsMin, ratingsMax, priceMin, priceMax } =
    req.query;

  let query = search
    ? {
        name: {
          $regex: search,
          $options: "i",
        },
      }
    : {};

  if (stars) {
    query = {
      ...query,
      priceCents: {
        $lte: Number(priceMax) * 100,
        $gte: Number(priceMin) * 100,
      },
      "rating.count": {
        $lte: Number(ratingsMax),
        $gte: Number(ratingsMin),
      },
      "rating.stars": {
        $gte: Number(stars),
      },
    };
  }

  const result = await collection.find(query, { _id: 0 }).toArray();
  res.send(result);
});

export default router;
