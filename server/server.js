import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js';

const app = express();

app.use(cors({
 origin: ['http://localhost:3000']
}));
app.use(express.json());
app.use("/products", productsRouter);

app.listen(3000, () => {
 console.log("The server is running");
});