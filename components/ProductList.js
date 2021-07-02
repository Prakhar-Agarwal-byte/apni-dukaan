import Product from "./Product";

import { Container, Row } from "react-bootstrap";

const ProductList = ({ products }) => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
