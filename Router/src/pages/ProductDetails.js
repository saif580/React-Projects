import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  return (
    <>
      <h1>This is product details page</h1>
      <p>{params.productId}</p>
      <p><Link to='..' relative="path">Back</Link></p>
    </>
  );
}

export default ProductDetails;
