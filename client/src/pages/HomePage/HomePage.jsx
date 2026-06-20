import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import axios from "axios";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const stars = searchParams.get("stars");
  const ratingsMin = searchParams.get("ratingsMin");
  const ratingsMax = searchParams.get("ratingsMax");
  const priceMin = searchParams.get("priceMin");
  const priceMax = searchParams.get("priceMax");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const filterOptions = {
        stars,
        ratingsMin,
        ratingsMax,
        priceMin,
        priceMax
      };

      console.log(filterOptions, search);

      setSearchParams(searchParams);
      let urlString = search
        ? `/api/products?search=${search}`
        : "/api/products?";

      if (stars && ratingsMin && ratingsMax && priceMin && priceMax) {
        urlString += `&stars=${stars}&ratingsMin=${ratingsMin}&ratingsMax=${ratingsMax}&priceMin=${priceMin}&priceMax=${priceMax}`;
      }

      const response = await axios.get(urlString);
      await loadCart();
      setProducts(response.data);
    };
    getProducts();
  }, [loadCart, search, searchParams, setSearchParams, stars, ratingsMin, ratingsMax, priceMin, priceMax]);

  return (
    <>
      <Header cart={cart} />

      <ProductsGrid products={products} loadCart={loadCart} />
    </>
  );
}
