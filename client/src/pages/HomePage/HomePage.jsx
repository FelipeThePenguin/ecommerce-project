import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../../components/Header";
import { ProductsGrid } from './ProductsGrid';
import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("/api/products");
      await loadCart();
      setProducts(response.data);
    };
    getProducts();
  }, [loadCart]);

  return (
    <>
      <Header cart={cart} />

      <ProductsGrid products={products} loadCart={loadCart} />
    </>
  );
}
