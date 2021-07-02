import { Col, Card } from "react-bootstrap";
import styles from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <Col className="mt-4">
      <Card className="hover-shadow" className={styles.card}>
        <Card.Img variant="top" src={product.assets[0].url} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price.formatted_with_symbol}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
