import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js';
import cartRouter from './routes/cart.js'
import ordersRouter from './routes/orders.js';
import deliveryOptionsRouter from './routes/deliveryOptions.js';

const app = express();

app.use(cors({
 origin: ['http://localhost:3000']
}));
app.use(express.json());
app.use("/api/products", productsRouter);
app.use("/api/cart-items", cartRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/delivery-options", deliveryOptionsRouter);

app.listen(3000, () => {
 console.log("The server is running");
});