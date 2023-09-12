import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 1, title: "Product 1" },
  { id: 2, title: "Product 2" },
  { id: 3, title: "Product 3" },
];

const Products = () => {
  return (
    <>
      <h1>My Products Page</h1>
      <ul>
        {PRODUCTS.map((products) => (
          <li key={products.id}>
            <Link to={`${products.id}`}>{products.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
