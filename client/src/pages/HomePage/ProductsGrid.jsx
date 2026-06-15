import { Product } from "./Product";

export function ProductsGrid({ products, loadCart }) {
  return (
    <main className="products-grid">
      {products &&
        products.map((product) => {
          return <Product key={product.id} product={product} loadCart={loadCart}/>;
        })}
    </main>
  );
}
