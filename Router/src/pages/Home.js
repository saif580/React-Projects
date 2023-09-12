import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>This will take you to products <Link to="products">click here</Link> page</p>
    </>
  );
};

export default Home;
