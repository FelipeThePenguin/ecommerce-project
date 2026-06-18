import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import axios from "axios";
import { Header } from "../../components/Header";
import { ProductsGrid } from './ProductsGrid';
import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      setSearchParams(searchParams)
      const urlString = search ? `/api/products?search=${search}` : "/api/products";
      const response = await axios.get(urlString);
      await loadCart();
      setProducts(response.data);
    };
    getProducts();
  }, [loadCart, search, searchParams, setSearchParams]);

  return (
    <>
      <Header cart={cart} />

      <ProductsGrid products={products} loadCart={loadCart} />
    </>
  );
}
