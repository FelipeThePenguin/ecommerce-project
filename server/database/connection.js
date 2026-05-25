import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';
import dns from 'dns';

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

// Replace the placeholder with your Atlas connection string
const uri = process.env.ATLAS_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export let ecommerceDatabase;

export async function runStableAPIConnect() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const database = await client.db('ecommerce');
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!\n',
    );
    ecommerceDatabase = database;
  } catch (err) {
    console.log(err);
  }
}

runStableAPIConnect();