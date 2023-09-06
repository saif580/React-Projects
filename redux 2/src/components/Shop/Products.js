import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DummyProducts = [
  {
    id: "p0",
    title: "Test 1",
    price: 6,
    description: "This is a first product - amazing!",
    quantity:0
  },
  {
    id: "p1",
    title: "Test 2",
    price: 8,
    description: "This is a second product - amazing!",
    quantity:0
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProducts.map((items) => (
          <ProductItem
            key={items.id}
            id={items.id}
            title={items.title}
            price={items.price}
            description={items.description}
            quantity={items.quantity}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
